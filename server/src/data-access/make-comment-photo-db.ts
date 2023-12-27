import mongoose from "mongoose";
import ICommentPhotoDb, {
  CommentPhotoPayloadOmitProps,
} from "./interfaces/comment-photo-db";
import CommentPhoto from "@/database/entities/comment-photo";
import ICommentPhoto from "@/database/interfaces/comment-photo";

export default function makeCommentPhotoDb({
  commentPhotoDbModel,
}: {
  commentPhotoDbModel: mongoose.Model<
    ICommentPhoto & mongoose.Document,
    Record<string, unknown>
  >;
}) {
  return new (class CommentPhotoDb implements ICommentPhotoDb {
    async findById({ _id }: { _id: string }): Promise<ICommentPhoto> {
      try {
        const exists = await commentPhotoDbModel
          .findOne({ _id })
          .lean({ virtuals: true });

        if (exists) {
          return new CommentPhoto(exists);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async insert(
      payload: Omit<ICommentPhoto, CommentPhotoPayloadOmitProps>
    ): Promise<ICommentPhoto> {
      try {
        const created = await commentPhotoDbModel.create(payload);

        if (created) {
          return new CommentPhoto(created);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async update(payload: Partial<ICommentPhoto>): Promise<ICommentPhoto> {
      try {
        const updated = await commentPhotoDbModel
          .findOneAndUpdate(payload)
          .lean({ virtuals: true });

        if (updated) {
          return new CommentPhoto(updated);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }

    async hardDelete({ _id }: { _id: string }): Promise<ICommentPhoto> {
      try {
        const deleted = await commentPhotoDbModel
          .findByIdAndDelete({ _id })
          .lean({ virtuals: true });

        if (deleted) {
          return new CommentPhoto(deleted);
        }

        return null;
      } catch (error) {
        console.error(error);
      }
    }
  })();
}
