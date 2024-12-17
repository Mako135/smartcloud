import { Button } from "@/components/ui";
import { Cpu, Gauge, HardDrive, LocateFixed, MemoryStick } from "lucide-react";

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
  return (
    <div className="shadow-lg rounded-lg border border-secondary/30 px-6 py-4 hover:border-secondary duration-150">
      <div>
        <h1 className="font-bold text-xl mb-2">{title}</h1>
        <p className=" text-base">
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
          <p className=" text-base">vCPU: {cpu}</p>
        </div>
        <div className="flex gap-2">
          <MemoryStick />
          <p className=" text-base">RAM: {ram}</p>
        </div>
        <div className="flex gap-2">
          <HardDrive />
          <p className=" text-base">Дисковое хранилище: {storage}</p>
        </div>
        <div className="flex gap-2">
          <LocateFixed />
          <p className=" text-base">Публичный IP: {ip}</p>
        </div>
        <div className="flex gap-2">
          <Gauge />
          <p className=" text-base">Internet: {internet}</p>
        </div>
      </div>
      <Button
        className="w-full hover:bg-secondary border-secondary/30 hover:text-white"
        variant="outline"
        asChild
      >
        <a
          href="https://portal.smartcloud.uz/index.php?/products/"
          target="_blank"
        >
          Подробнее
        </a>
      </Button>
    </div>
  );
}
