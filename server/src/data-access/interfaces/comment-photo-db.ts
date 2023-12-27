import ICommentPhoto from "@/database/interfaces/comment-photo";

export type CommentPhotoPayloadOmitProps = "_id" | "created_at" | "updated_at";

export default interface ICommentPhotoDb {
  findById: ({ _id }: { _id: string }) => Promise<ICommentPhoto>;
  insert: (
    payload: Omit<ICommentPhoto, CommentPhotoPayloadOmitProps>
  ) => Promise<ICommentPhoto>;
  update: (payload: Partial<ICommentPhoto>) => Promise<ICommentPhoto>;
  hardDelete: ({ _id }: { _id: string }) => Promise<ICommentPhoto>;
}
