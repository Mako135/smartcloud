import { Button } from "@/components/ui";
import { useLocale } from "@/lib/useLocale";
import { Cpu, Gauge, HardDrive, LocateFixed, MemoryStick } from "lucide-react";

const translations: Record<
  "ru" | "uz",
  {
    storage: string;
    ip: string;
    detaileButton: string;
  }
> = {
  ru: {
    storage: "Дисковое хранилище",
    ip: "Публичный IP",
    detaileButton: "Подробнее",
  },
  uz: {
    storage: "Disk xotirasi",
    ip: "Ommaviy IP",
    detaileButton: "Batafsil",
  },
};

interface Props {
  title: string;
  price: number;
  cpu: string;
  ram: string;
  storage: string;
  ip: string;
  internet: string;
  period: string;
}
export default function VdsCard({
  title,
  price,
  cpu,
  ram,
  storage,
  ip,
  internet,
  period,
}: Props) {
  const { currentLocale } = useLocale();

  const t = translations[currentLocale];
  return (
    <div className="shadow-lg rounded-lg border border-secondary/30 px-6 py-4 hover:border-secondary duration-150">
      <div>
        <h1 className="font-bold text-medium mb-2">{title}</h1>
        <p className=" text-base text-regular">
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "UZS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(price)}{" "}
          / {period}
        </p>
      </div>
      <div className=" flex flex-col gap-5 my-8">
        <div className="flex gap-2">
          <Cpu />
          <p className=" text-base text-regular">vCPU: {cpu}</p>
        </div>
        <div className="flex gap-2">
          <MemoryStick />
          <p className=" text-base text-regular">RAM: {ram}</p>
        </div>
        <div className="flex gap-2">
          <HardDrive />
          <p className=" text-base text-regular">
            {t.storage}: {storage}
          </p>
        </div>
        <div className="flex gap-2">
          <LocateFixed />
          <p className=" text-base text-regular">
            {t.ip}: {ip}
          </p>
        </div>
        <div className="flex gap-2">
          <Gauge />
          <p className=" text-base text-regular">Internet: {internet}</p>
        </div>
      </div>
      <Button
        className="w-full hover:bg-secondary border-secondary/30 hover:text-white text-regular"
        variant="outline"
        asChild
      >
        <a
          href="https://portal.smartcloud.uz/index.php?/products/"
          target="_blank"
        >
          {t.detaileButton}
        </a>
      </Button>
    </div>
  );
}
