import OsCard from "@/components/shared/OsCard";
import { useState, useEffect } from "react";

type OperatingSystem = {
  title: string;
  version: string[] | string;
  icon: string;
};

type Props = {
  operatingSystems: OperatingSystem[];
  operatingSystemsWithProgram: OperatingSystem[];
};

const localization = {
  ru: {
    title: "Образы, оптимизированные для развертывания",
    tabs: {
      os: "Образы ОС",
      marketplace: "Маркетплейс приложений",
    },
  },
  uz: {
    title: "Joylashtirish uchun optimallashtirilgan tasvirlar",
    tabs: {
      os: "OS tasvirlari",
      marketplace: "Ilovalar bozori",
    },
  },
};

const TabsComponent = ({
  operatingSystems,
  operatingSystemsWithProgram,
}: Props) => {
  const [locale, setLocale] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocale(window.location.pathname.startsWith("/uz") ? "uz" : "ru");
    }
  }, []);

  const { title, tabs } = localization[locale];
  const tabKeys = ["os", "marketplace"] as const;
  const [activeTab, setActiveTab] = useState<"os" | "marketplace">("os");

  return (
    <section className="my-60">
      <h1 className="text-center text-4xl font-medium mb-20">{title}</h1>
      <div className="flex justify-center border-b border-gray-200 dark:border-gray-500 mb-6">
        {tabKeys.map((tabKey) => (
          <div
            key={tabKey}
            onClick={() => setActiveTab(tabKey)}
            className={`relative pb-2 px-3 transition-all duration-150 cursor-pointer ${
              activeTab === tabKey
                ? "text-blue-600 dark:text-white"
                : "text-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            {tabs[tabKey]}
            <span
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-500 dark:bg-white transition-all duration-300 ${
                activeTab === tabKey ? "w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-5">
        {activeTab === "os" &&
          operatingSystems.map((os) => (
            <OsCard
              key={os.title}
              title={os.title}
              version={os.version}
              icon={os.icon}
            />
          ))}
        {activeTab === "marketplace" &&
          operatingSystemsWithProgram.map((os) => (
            <OsCard
              key={os.title}
              title={os.title}
              version={os.version}
              icon={os.icon}
            />
          ))}
      </div>
    </section>
  );
};

export default TabsComponent;
