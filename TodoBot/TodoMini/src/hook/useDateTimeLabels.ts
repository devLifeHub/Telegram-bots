const useDateTimeLabels = (isoString?: string) => {
  const dateObj = isoString ? new Date(isoString) : new Date();
  return {
    date: dateObj.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    time: dateObj.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
};

export default useDateTimeLabels;