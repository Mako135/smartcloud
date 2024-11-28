import OsCard from "@/components/shared/OsCard";
import { useState } from "react";

type OperatingSystem = {
  title: string;
  version: string[] | string;
  icon: string;
};

type Props = {
  operatingSystems: OperatingSystem[];
  operatingSystemsWithProgram: OperatingSystem[];
};

const TabsComponent = ({
  operatingSystems,
  operatingSystemsWithProgram,
}: Props) => {
  const tabs = ["Образы ОС", "Маркетплейс приложений"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="my-80">
      <h1 className="text-center text-4xl font-medium mb-20">
        Образы, оптимизированные для развертывания
      </h1>
      <div className="flex justify-center border-b border-gray-200 dark:border-gray-500 mb-6">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`relative pb-2 px-3 transition-all duration-150 cursor-pointer ${
              activeTab === tab
                ? "text-blue-600 dark:text-white"
                : "text-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            {tab}
            <span
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-500 dark:bg-white transition-all duration-300 ${
                activeTab === tab ? "w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-5">
        {activeTab === "Образы ОС" &&
          operatingSystems.map((os) => (
            <OsCard
              key={os.title}
              title={os.title}
              version={os.version}
              icon={os.icon}
            />
          ))}
        {activeTab === "Маркетплейс приложений" &&
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
