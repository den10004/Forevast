const PRESSURE_UNITS = 0.750062;

export const capitalizeFirstLetter = (str) => {
  if (!str) return "";

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getPressureMm = (hpa) => {
  return Math.round(hpa * PRESSURE_UNITS);
};

export const getTime = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString("ru-RU", {
    timeZone: "Atlantic/Reykjavik",
  });
};

export const timeConverter = (UNIX_timestamp) => {
  let a = new Date(UNIX_timestamp * 1000);
  let months = [
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
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let time = date + " " + month + " " + year + " " + hour + ":00";
  return time;
};

export const today = new Date().toLocaleString("en-EN", {
  weekday: "short",
  month: "long",
  day: "numeric",
});
