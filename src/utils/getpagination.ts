export class pageUtil {
  public static getPagination = (
    perPage: number,
    page: number | string,
    total: number,
  ) => {
    const currentPage = typeof page === "string" ? parseInt(page, 10) : page; // Parse string to number if needed.

    return {
      total,
      perPage,
      currentPage,
      totalPages: total === 0 ? 0 : Math.ceil(total / perPage), // Remove the unary plus (+) before perPage
    };
  };
}
