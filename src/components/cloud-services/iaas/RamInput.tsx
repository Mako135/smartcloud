import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";
import { useState, useEffect } from "react";

const translations: Record<"ru" | "uz", { label: string }> = {
  ru: { label: "Объем RAM, ГБ" },
  uz: { label: "RAM hajmi, GB" },
};

const RamInput = () => {
  const { ram, increaseRam, decreaseRam, setRam } = useIaasStore();
  const [currentLocale, setCurrentLocale] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    setCurrentLocale(window.location.pathname.startsWith("/uz") ? "uz" : "ru");
  }, []);

  return (
    <InputIaaS
      label={translations[currentLocale].label}
      data={ram}
      setData={setRam}
      increaseData={increaseRam}
      decreaseData={decreaseRam}
      min={4}
      max={256}
    />
  );
};

export default RamInput;
