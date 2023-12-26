import IAdminNotification from "@/database/interfaces/admin-notification";

export type AdminNotificationPayloadOmitProps =
  | "_id"
  | "created_at"
  | "updated_at"
  | "deleted_at";

export interface IAdminNotificationPagination
  extends IPagination<IAdminNotification> {}

export default interface IAdminNotificationDb {
  findByAdminPaginated: ({
    _id,
    page,
    entries_per_page,
  }: {
    _id: string;
    page: number;
    entries_per_page: number;
  }) => Promise<IAdminNotificationPagination>;
  insert: (
    payload: Omit<IAdminNotification, AdminNotificationPayloadOmitProps>
  ) => Promise<IAdminNotification>;
  update: (payload: Partial<IAdminNotification>) => Promise<IAdminNotification>;
  delete: ({ _id }: { _id: string }) => Promise<IAdminNotification>;
  hardDelete: ({ _id }: { _id: string }) => Promise<IAdminNotification>;
}
