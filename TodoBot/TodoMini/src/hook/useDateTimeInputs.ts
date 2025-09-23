const useDateTimeInputs = (isoString?: string) => {
  const dateObj = isoString ? new Date(isoString) : new Date();
  return {
    date: dateObj.toISOString().split("T")[0],
    time: dateObj.toISOString().split("T")[1].slice(0, 5),
    toISO: (dateStr: string, timeStr: string) =>
      new Date(`${dateStr}T${timeStr}`).toISOString(),
  };
};

export default useDateTimeInputs;