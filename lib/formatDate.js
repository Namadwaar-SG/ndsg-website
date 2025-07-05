export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const day = date.getDate();
  const daySuffix = getDaySuffix(day);

  const month = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(
    date
  );
  const year = date.getFullYear();

  return `${day}${daySuffix} ${month} ${year}`;
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
