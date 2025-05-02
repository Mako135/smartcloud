import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CpuInput from "@/components/cloud-services/iaas/CpuInput";
import RamInput from "@/components/cloud-services/iaas/RamInput";
import StorageType from "@/components/cloud-services/iaas/StorageType";
import StorageInput from "@/components/cloud-services/iaas/StorageInput";
import BackupInput from "@/components/cloud-services/iaas/BackupInput";
import IpInput from "@/components/cloud-services/iaas/IpInput";
import IaasCart from "@/components/cloud-services/iaas/IaasCart";
import { CityTabs } from "@/components/cloud-services/iaas/CityTabs";

type Locale = "ru" | "uz";

const translations: Record<Locale, { title: string; description: string }> = {
  ru: {
    title: "Рассчитайте стоимость аренды IaaS",
    description:
      "Стоимость IaaS зависит от конфигурации вашей системы. Посекундная тарификация, входящий трафик и запросы — бесплатно",
  },
  uz: {
    title: "IaaS ijarasi narxini hisoblang",
    description:
      "IaaS narxi sizning tizimingiz konfiguratsiyasiga bog'liq. Sekundlik tarif, kiruvchi trafik va so‘rovlar – bepul",
  },
};

const IaaSConfigurator = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentLocale, setCurrentLocale] = useState<Locale>("ru");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const locale = window.location.pathname.startsWith("/uz") ? "uz" : "ru";
      setCurrentLocale(locale);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          defaults: { duration: 0.5, ease: "power1.out" },
        });

        timeline.fromTo(
          "#iaasConfTitle",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1 }
        );

        timeline.fromTo(
          "#iaasDescTitle",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1 },
          "<0.3"
        );

        timeline.fromTo(
          "#iaasConf",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1 },
          "<0.3"
        );

        timeline.fromTo(
          "#iaasConf .grid > *",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, stagger: 0.2 }
        );
      }, ref);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="my-dynamic" ref={ref}>
      <h1 className="text-extra-large font-medium" id="iaasConfTitle">
        {translations[currentLocale].title}
      </h1>
      <p className="text-medium mt-5 md:mt-0" id="iaasDescTitle">
        {translations[currentLocale].description}
      </p>

      <div
        className="grid grid-cols-2 lg:grid-cols-6 mt-10 p-2 bg-slate-100 dark:bg-[#0f172a80] rounded-xl"
        id="iaasConf"
      >
        <div className="col-span-4 pt-4 pr-5 pb-6 pl-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch mt-5">
            <h2 className="text-large font-medium col-span-2 h-fit">
              Infrastructure as a Service
            </h2>
            <CityTabs />
            <CpuInput />
            <RamInput />
            <StorageType />
            <StorageInput />
            <BackupInput />
            <IpInput />
          </div>
        </div>
        <IaasCart />
      </div>
    </div>
  );
};

export default IaaSConfigurator;
