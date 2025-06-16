export interface PagedResponse<T> {
    total: number;
    items: T[];
    hasMore: boolean;
    currentPage?: number;
    pageSize?: number;
    totalPages?: number;
}
