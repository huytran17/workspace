export {};

declare global {
  interface IPagination<T> {
    pagination: {
      from: number;
      to: number;
      page: number;
      entries_per_page: number;
      total: number;
    };
    data: T[];
  }
}
