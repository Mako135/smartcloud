import { useEffect, useState } from "react";

export const useLocale = () => {
  const [currentLocale, setCurrentLocale] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentLocale(
        window.location.pathname.startsWith("/uz") ? "uz" : "ru"
      );
    }
  }, []);

  return { currentLocale };
};
