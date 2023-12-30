import IComment from "@/database/interfaces/comment";

export type CommentPayloadOmitProps =
  | "_id"
  | "created_at"
  | "updated_at"
  | "deleted_at";

export interface ICommentPagination extends IPagination<IComment> {}

export default interface ICommentDb {
  findByProductPaginated: ({
    product_id,
    page,
    entries_per_page,
  }: {
    product_id: string;
    page: number;
    entries_per_page: number;
  }) => Promise<ICommentPagination>;
  insert: (
    payload: Omit<IComment, CommentPayloadOmitProps>
  ) => Promise<IComment>;
  update: (payload: Partial<IComment>) => Promise<IComment>;
  delete: ({ _id }: { _id: string }) => Promise<IComment>;
  hardDelete: ({ _id }: { _id: string }) => Promise<IComment>;
}
