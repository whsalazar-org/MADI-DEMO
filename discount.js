export function isDiscountActive(onDate, startDate, endDate) {
  return startDate <= onDate && onDate < endDate;
}
