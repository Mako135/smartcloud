  import { Button } from "@/components/ui/button";
  import { Cpu, Gauge, HardDrive, LocateFixed, MemoryStick } from "lucide-react";
  import React from "react";

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
            }).format(price)}{" "}
            / {period}
          </p>
        </div>
        <div className=" flex flex-col gap-5 my-8">
          <div className="flex gap-2">
            <Cpu />
            <p className=" text-base font-bold">{cpu}</p>
          </div>
          <div className="flex gap-2">
            <MemoryStick />
            <p className=" text-base">RAM: {ram}</p>
          </div>
          <div className="flex gap-2">
            <HardDrive />
            <p className=" text-base">Storage: {storage}</p>
          </div>
          <div className="flex gap-2">
            <LocateFixed />
            <p className=" text-base">IP: {ip}</p>
          </div>
          <div className="flex gap-2">
            <Gauge />
            <p className=" text-base">Internet: {internet}</p>
          </div>
        </div>
        <Button className="w-full font-bold hover:bg-secondary border-secondary/30" variant="outline">Попробовать</Button>
      </div>
    );
  }
