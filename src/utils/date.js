export const dateToMonth = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  console.log(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[month] + " " + year;
};
