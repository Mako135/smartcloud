import StorageType from "../../../components/cloud-services/iaas/StorageType";
import CpuInput from "../../../components/cloud-services/iaas/CpuInput";
import BackupInput from "../../../components/cloud-services/iaas/BackupInput";
import StorageInput from "../../../components/cloud-services/iaas/StorageInput";
import RamInput from "../../../components/cloud-services/iaas/RamInput";
import IpInput from "../../../components/cloud-services/iaas/IpInput";
import IaasCart from "../../../components/cloud-services/iaas/IaasCart";

const IaaSConfigurator = () => {
  return (
    <div className="my-40">
      <h1 className="text-4xl font-medium">
        Рассчитайте стоимость аренды IaaS
      </h1>
      <p className="text-xl mt-4">
        Стоимость IaaS зависит от конфигурации вашей системы. Посекундная
        тарификация, входящий трафик и запросы — бесплатно.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-6 mt-10 p-2 bg-slate-100 dark:bg-[#0f172a80] rounded-xl">
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
