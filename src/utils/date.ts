export const MONTH_NAMES_EN = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatMonthYear(date?: Date): string {
  if (!date) return "";
  return `${MONTH_NAMES_EN[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatMonthYearRange(
  startDate: Date,
  endDate?: Date | null
): string {
  return `${formatMonthYear(startDate)} – ${
    endDate ? formatMonthYear(endDate) : "Present"
  }`;
}
