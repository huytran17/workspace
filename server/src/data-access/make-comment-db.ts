import IComment from "@/database/interfaces/comment";
import mongoose from "mongoose";
import ICommentDb, {
  CommentPayloadOmitProps,
  ICommentPagination,
} from "./interfaces/comment-db";
import Comment from "@/database/entities/comment";

export default function makeCommentDb({
  commentDbModel,
}: {
  commentDbModel: mongoose.Model<
    IComment & mongoose.Document,
    Record<string, unknown>
  >;
}) {
  return new (class CommentDb implements ICommentDb {
    async findByProductPaginated({
      product_id,
      page,
      entries_per_page,
    }: {
      product_id: string;
      page: number;
      entries_per_page: number;
    }): Promise<ICommentPagination> {
      try {
        const skip = page > 0 ? (page - 1) * entries_per_page : 0;

        const query_conditions = {
          deleted_at: null,
          product: product_id,
        };

        const exists = await commentDbModel
          .find(query_conditions)
          .skip(skip)
          .limit(entries_per_page)
          .lean({ virtuals: true });

        if (!exists) {
          return null;
        }

        const total = await commentDbModel.countDocuments(query_conditions);

        const has_more = page > 0 ? page * entries_per_page < total : false;
        const from = page > 0 ? page : null;
        const to = has_more ? page + 1 : null;

        const data = exists.map((comment) => new Comment(comment));

        return {
          pagination: {
            from,
            to,
            page,
            entries_per_page,
            total,
          },
          data,
        };
      } catch (error) {
        console.error(error);
      }
    }

    async insert(
      payload: Omit<IComment, CommentPayloadOmitProps>
    ): Promise<IComment> {
      try {
        const created = await commentDbModel.create(payload);

        if (created) {
          return new Comment(created);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async update(payload: Partial<IComment>): Promise<IComment> {
      try {
        const updated = await commentDbModel
          .findByIdAndUpdate(payload)
          .lean({ virtuals: true });

        if (updated) {
          return new Comment(updated);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async delete({ _id }: { _id: string }): Promise<IComment> {
      try {
        const query_conditions = {
          _id,
          deleted_at: new Date(),
        };

        const deleted = await commentDbModel
          .findOneAndUpdate(query_conditions)
          .lean({ virtuals: true });

        if (deleted) {
          return new Comment(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async hardDelete({ _id }: { _id: string }): Promise<IComment> {
      try {
        const deleted = await commentDbModel
          .findByIdAndDelete({ _id })
          .lean({ virtuals: true });

        if (deleted) {
          return new Comment(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }
  })();
}
