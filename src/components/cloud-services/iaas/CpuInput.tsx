import { useIaasStore } from "@/store/iaasStore";
import InputIaaS from "./InputIaaS";
import { useState, useEffect } from "react";

const translations: Record<"ru" | "uz", { label: string }> = {
  ru: { label: "Количество vCPU" },
  uz: { label: "vCPU miqdori" },
};

const CpuInput = () => {
  const { cpu, increaseCpu, decreaseCpu, setCpu } = useIaasStore();
  const [currentLocale, setCurrentLocale] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    setCurrentLocale(window.location.pathname.startsWith("/uz") ? "uz" : "ru");
  }, []);

  return (
    <InputIaaS
      label={translations[currentLocale].label}
      data={cpu}
      setData={setCpu}
      increaseData={increaseCpu}
      decreaseData={decreaseCpu}
      min={2}
      max={128}
    />
  );
};

export default CpuInput;
