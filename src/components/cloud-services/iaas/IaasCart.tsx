import { iaasPrice } from "@/lib/data/price";
import { useLocale } from "@/lib/useLocale";
import { useIaasStore } from "@/store/iaasStore";
import { useMemo } from "react";

const translations: Record<
  "ru" | "uz",
  {
    totalLabel: string;
    vcpu: string;
    ram: string;
    storage: string;
    backup: string;
    ip: string;
    pricePerMonth: string;
    tryButton: string;
  }
> = {
  ru: {
    totalLabel: "Итоговый расчет",
    vcpu: "vCPU",
    ram: "RAM",
    storage: "Дисковое хранилище",
    backup: "Резервное копирование",
    ip: "Публичный IP адрес",
    pricePerMonth: "Цена за месяц",
    tryButton: "Попробовать",
  },
  uz: {
    totalLabel: "Yakuniy hisob-kitob",
    vcpu: "vCPU",
    ram: "RAM",
    storage: "Disk xotirasi",
    backup: "Zaxira nusxasi",
    ip: "Ommaviy IP manzil",
    pricePerMonth: "Oylik narx",
    tryButton: "Sinab ko'rish",
  },
};

const IaasCart = () => {
  const { cpu, ram, storage, backup, ip, type } = useIaasStore();
  const { currentLocale } = useLocale();

  const t = translations[currentLocale];

  const items = useMemo(
    () => [
      { label: t.vcpu, count: cpu, price: iaasPrice.cpu },
      { label: t.ram, count: ram, price: iaasPrice.ram, unit: "ГБ" },
      {
        label: `${t.storage} ${type.toUpperCase()}`,
        count: storage,
        price: type === "ssd" ? iaasPrice.ssd : iaasPrice.hdd,
        unit: "ГБ",
      },
      ...(backup > 0
        ? [
          {
            label: t.backup,
            count: backup,
            price: iaasPrice.backup,
            unit: "ГБ",
          },
        ]
        : []),
      {
        label: t.ip,
        count: ip,
        price: iaasPrice.ipAdress,
      },
    ],
    [cpu, ram, storage, backup, ip, type, t]
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
      <h2 className="text-large font-medium">{t.totalLabel}</h2>

      <div className="grid gap-2 my-4">
        {items.map(({ label, count, price, unit }) => (
          <div key={label} className="flex justify-between items-center">
            <p className=" text-small max-w-20 md:max-w-40 font-[500]">
              {label} * {count} {unit || ""}
            </p>
            <p className="text-small">{formatCurrency(count * price)}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-small max-w-20 md:max-w-40">{t.pricePerMonth}</p>
          <p className="text-regular font-medium">{formatCurrency(total)}</p>
        </div>
        <a
          href="https://portal.smartcloud.uz/index.php?/products/"
          target="_blank"
        >
          <button className="text-regular w-full p-2 bg-slate-100 text-black rounded-lg dark:bg-[#0f172a80] dark:text-white ">
            {t.tryButton}
          </button>
        </a>
      </div>
    </div>
  );
};

export default IaasCart;
