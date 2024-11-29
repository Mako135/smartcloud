import { useEffect, useRef } from "react";
import gsap from "gsap";
import CpuInput from "@/components/cloud-services/iaas/CpuInput";
import RamInput from "@/components/cloud-services/iaas/RamInput";
import StorageType from "@/components/cloud-services/iaas/StorageType";
import StorageInput from "@/components/cloud-services/iaas/StorageInput";
import BackupInput from "@/components/cloud-services/iaas/BackupInput";
import IpInput from "@/components/cloud-services/iaas/IpInput";
import IaasCart from "@/components/cloud-services/iaas/IaasCart";

const IaaSConfigurator = () => {
  const ref = useRef<HTMLDivElement>(null);

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
    <div className="my-60" ref={ref}>
      <h1 className="text-2xl md:text-4xl font-medium" id="iaasConfTitle">
        Рассчитайте стоимость аренды IaaS
      </h1>
      <p className="text-md mt-5 md:text-2xl md:mt-0" id="iaasDescTitle">
        Стоимость IaaS зависит от конфигурации вашей системы. Посекундная
        тарификация, входящий трафик и запросы — бесплатно
      </p>

      <div
        className="grid grid-cols-2 lg:grid-cols-6 mt-10 p-2 bg-slate-100 dark:bg-[#0f172a80] rounded-xl"
        id="iaasConf"
      >
        <div className="col-span-4 pt-4 pr-5 pb-6 pl-3">
          <h2 className="text-3xl font-medium">Infrastructure as a Service</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch mt-5">
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
