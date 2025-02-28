import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";
import { useState, useEffect } from "react";

const translations: Record<"ru" | "uz", { label: string }> = {
  ru: { label: "Резервное копирование, ГБ" },
  uz: { label: "Zaxira nusxasi, GB" },
};

const BackupInput = () => {
  const { backup, increaseBackup, decreaseBackup, setBackup } = useIaasStore();
  const [currentLocale, setCurrentLocale] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    setCurrentLocale(window.location.pathname.startsWith("/uz") ? "uz" : "ru");
  }, []);
  return (
    <InputIaaS
      label={translations[currentLocale].label}
      data={backup}
      setData={setBackup}
      increaseData={increaseBackup}
      decreaseData={decreaseBackup}
      min={0}
      max={8190}
    />
  );
};

export default BackupInput;
