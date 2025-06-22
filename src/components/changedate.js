function formatDateSimple(dateString) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const [year, month, day] = dateString.split("-");
  return `${day} ${months[+month - 1]}, ${year}`;
}

export default formatDateSimple;