import { useMemo } from "react";

export function useFormattedDateTime(isoString: string) {
  return useMemo(() => {
    if (!isoString) return { date: "", time: "" };

    const dateObj = new Date(isoString);

    // Локализованный формат даты
    const date = dateObj.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    // Локализованный формат времени
    const time = dateObj.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return { date, time };
  }, [isoString]);
}
