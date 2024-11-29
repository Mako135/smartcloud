import { iaasPrice } from "@/lib/data/price";
import { useIaasStore } from "@/store/iaasStore";
import { useMemo } from "react";

const IaasCart = () => {
  const { cpu, ram, storage, backup, ip, type } = useIaasStore();

  const items = useMemo(
    () => [
      { label: "vCPU", count: cpu, price: iaasPrice.cpu },
      { label: "RAM", count: ram, price: iaasPrice.ram, unit: "ГБ" },
      {
        label: `Дисковое хранилище ${type.toUpperCase()}`,
        count: storage,
        price: type === "ssd" ? iaasPrice.ssd : iaasPrice.hdd,
        unit: "ГБ",
      },
      ...(backup > 0
        ? [
            {
              label: "Резервное копирование",
              count: backup,
              price: iaasPrice.backup,
              unit: "ГБ",
            },
          ]
        : []),
      {
        label: "Публичный IP адрес",
        count: ip,
        price: iaasPrice.ipAdress,
      },
    ],
    [cpu, ram, storage, backup, ip, type]
  );

  const total = useMemo(
    () => items.reduce((acc, { count, price }) => acc + count * price, 0),
    [items]
  );

  const formatCurrency = useMemo(() => {
    const formatter = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "UZS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return (value: number) => formatter.format(value);
  }, []);

  return (
    <div className="col-span-2 bg-slate-500 dark:bg-slate-700/50 rounded-xl p-4 px-5 flex flex-col justify-between text-white">
      <h2 className="text-3xl font-medium">Итоговый расчет</h2>

      <div className="grid gap-2 my-4">
        {items.map(({ label, count, price, unit }) => (
          <div key={label} className="flex justify-between items-center">
            <p className=" text-sm max-w-20 md:max-w-40 font-[500]">
              {label} * {count} {unit || ""}
            </p>
            <p>{formatCurrency(count * price)}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold text-sm max-w-20 md:max-w-40">
            Цена за месяц
          </p>
          <p className="text-xl font-medium">{formatCurrency(total)}</p>
        </div>
        <a
          href="https://portal.smartcloud.uz/index.php?/products/"
          target="_blank"
        >
          <button className="w-full p-2 bg-slate-100 text-black rounded-lg dark:bg-[#0f172a80] dark:text-white ">
            Попробовать
          </button>
        </a>
      </div>
    </div>
  );
};

export default IaasCart;
