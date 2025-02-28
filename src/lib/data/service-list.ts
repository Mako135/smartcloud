import {
  AppWindow,
  BotMessageSquare,
  DatabaseBackup,
  DoorOpen,
  FileKey,
  GlobeLock,
  HardDrive,
  Server,
  ServerCog,
  ShieldBan,
  ShieldCheck,
  Siren,
} from "lucide-react";

export const service_list = [
  {
    label: {
      ru: "IaaS - инфраструктура как услуга",
      uz: "IaaS – xizmat sifatida infratuzilma"
    },
    desc: {
      ru: "Модель, при которой ключевые компоненты облачной инфраструктуры - серверы, хранилища данных, операционные системы и сетевые ресурсы - предоставляются в виде единой подключаемой услуги.",
      uz: "Model, unda bulutli infratuzilmaning asosiy komponentlari - serverlar, ma'lumotlar omborlari, operatsion tizimlar va tarmoq resurslari yagona ulangan xizmat sifatida taqdim etiladi."
    },
    icon: Server,
    link: {
      ru: "/cloud-services/iaas",
      uz: "/uz/cloud-services/iaas"
    },
  },
  {
    label: {
      ru: "BaaS – резервное копирование как услуга",
      uz: "BaaS – xizmat sifatida zaxiralash"
    },
    desc: {
      ru: "Выручит при случайном удалении важных файлов, поломках оборудования, сбоях программного обеспечения, форс-мажорах, злонамеренных атаках, заражениями вирусами.",
      uz: "Muhim fayllarni tasodifan o‘chirish, uskuna nosozliklari, dasturiy ta'minotdagi xatoliklar, favqulodda holatlar, zararli hujumlar va viruslar tufayli zaruriy ma'lumotlar zaxiralash xizmati yordamida tiklanadi."
    },
    icon: DatabaseBackup,
    link: {
      ru: "/cloud-services/baas",
      uz: "/uz/cloud-services/baas"
    },
  },
  {
    label: {
      ru: "Storage – облачное хранилище в аренду",
      uz: "Storage – ijaraga bulutli saqlash"
    },
    desc: {
      ru: "Быстро масштабируемое, гибкое облачное хранилище. Хранение любых объемов структурированных и неструктурированных данных, надежная защита от сбоев дисков.",
      uz: "Tez kengaytiriladigan, moslashuvchan bulutli saqlash. Har qanday hajmdagi tuzilgan va tuzilmagan ma'lumotlarni saqlash, disk xatoliklaridan himoya."
    },
    icon: HardDrive,
    link: {
      ru: "/cloud-services/storage",
      uz: "/uz/cloud-services/storage"
    },
  },
  {
    label: {
      ru: "VDS – виртуальный выделенный сервер",
      uz: "VDS – virtual ajratilgan server"
    },
    desc: {
      ru: "Возможности VDS полностью соответствуют функционалу реального физического сервера.",
      uz: "VDS imkoniyatlari to'liq real fizik serverning funktsiyalariga mos keladi."
    },
    icon: ServerCog,
    link: {
      ru: "/cloud-services/vds",
      uz: "/uz/cloud-services/vds"
    },
  },
  {
    label: {
      ru: "Kaspersky",
      uz: "Kaspersky"
    },
    desc: {
      ru: "«Лаборатория Касперского» предлагает современные решения для защиты Вашего бизнеса от киберугроз, позволяя сосредоточиться на его развитии.",
      uz: "«Kaspersky Lab» sizning biznesingizni kiberxavf-xatarlardan himoya qilish uchun zamonaviy yechimlarni taqdim etadi va sizni uning rivojlanishiga e'tibor qaratsirishga imkon beradi."
    },
    icon: ShieldCheck,
    link: {
      ru: "/kaspersky",
      uz: "/uz/kaspersky"
    },
  },
  {
    label: {
      ru: "Virtual Network Firewall – полный модуль защиты",
      uz: "Virtual Network Firewall – to'liq himoya moduli"
    },
    desc: {
      ru: "Безопасность и надежность цифровой инфраструктуры, защита данных от киберугроз и несанкционированного доступа.",
      uz: "Raqamli infratuzilmaning xavfsizligi va ishonchliligi, kiberxavflardan va ruxsatsiz kirishdan ma'lumotlarni himoya qilish."
    },
    icon: GlobeLock,
    link: {
      ru: "/cloud-services/vnf",
      uz: "/uz/cloud-services/vnf"
    },
  },
  {
    label: {
      ru: "Защита от DDoS атак",
      uz: "DDoS hujumlardan himoya"
    },
    desc: {
      ru: "Осуществляется в виде защищенного IP-транзита для комплексной безопасности сети (серверов) клиента.",
      uz: "Mijozning tarmog'ining (serverlar) to'liq xavfsizligi uchun himoyalangan IP-transit sifatida amalga oshiriladi."
    },
    icon: ShieldBan,
    link: {
      ru: "/security/ddos",
      uz: "/uz/security/ddos"
    },
  },
  {
    label: {
      ru: "Security Оperations Сenter (SOC)",
      uz: "Xavfsizlik operatsiyalari markazi (SOC)"
    },
    desc: {
      ru: "Центр оперативного реагирования решает широкий спектр задач по оптимизации системы управления информационной безопасностью.",
      uz: "Operatsion javob berish markazi axborot xavfsizligini boshqarish tizimini optimallashtirish bo'yicha keng doiradagi vazifalarni hal qiladi."
    },
    icon: FileKey,
    link: {
      ru: "/security/soc",
      uz: "/uz/security/soc"
    },
  },
  {
    label: {
      ru: "Защита веб приложений (WAF)",
      uz: "Veb ilovalarini himoya qilish (WAF)"
    },
    desc: {
      ru: "Особый тип брандмауэра, который узконаправленно работает с веб-приложениями: защиту развертывают между конечным пользователем и web-приложением для анализа двунаправленного веб-трафика (HTTP).",
      uz: "Veb-ilovalar bilan maxsus ishlaydigan brendmauerning o'ziga xos turi: himoya foydalanuvchi va veb-ilova o'rtasida joylashtiriladi va ikki tomonlama veb-trafigini (HTTP) tahlil qilish uchun foydalaniladi."
    },
    icon: Siren,
    link: {
      ru: "/security/waf",
      uz: "/uz/security/waf"
    },
  },
  {
    label: {
      ru: "Pentest (тестирование на проникновение)",
      uz: "Pentest (kirish sinovlari)"
    },
    desc: {
      ru: "Проведение внешнего/внутреннего сканирования специализированным ПО на наличие уязвимостей в сети клиента, а также тестирование на проникновение.",
      uz: "Mijoz tarmog‘ida zaifliklarni aniqlash uchun maxsus dasturiy ta’minot yordamida tashqi/ichki skanerlashni o‘tkazish hamda kirish sinovlarini amalga oshirish."
    },
    icon: DoorOpen,
    link: {
      ru: "/security/pentest",
      uz: "/uz/security/pentest"
    },
  },
  {
    label: {
      ru: "Техническая поддержка систем информационной безопасности",
      uz: "Axborot xavfsizligi tizimlarini texnik qo'llab-quvvatlash"
    },
    desc: {
      ru: "В рамках сервиса проводится мониторинг текущего состояния защищенности компании, ведение аналитики в режиме реального времени, поддержка комплексных защитных решений. Информационная безопасность поддерживается по строгим международным стандартам и нормативам.",
      uz: "Xizmat doirasida kompaniyaning himoya holatini monitoring qilish, real vaqt rejimida tahlil yuritish va kompleks himoya yechimlarini qo‘llab-quvvatlash amalga oshiriladi. Axborot xavfsizligi qat'iy xalqaro standartlar va normativlarga muvofiq qo'llab-quvvatlanadi."
    },
    icon: BotMessageSquare,
    link: {
      ru: "/security/support",
      uz: "/uz/security/support"
    },
  },
  {
    label: {
      ru: "Аренда программного обеспечения",
      uz: "Dasturiy ta'minotni ijaraga olish"
    },
    desc: {
      ru: "Аренда программного обеспечения предоставляется по методу лицензирования Microsoft CSP (Cloud Solution Provider). Microsoft Office, Windows, Exchange, SQL Server, Power BI можно арендовать на гибких условиях для любых нужд. Масштабируйте ресурсы по мере роста вашего бизнеса.",
      uz: "Dasturiy ta’minotni ijaraga olish Microsoft CSP (Cloud Solution Provider) litsenziyalash usuli orqali taqdim etiladi. Microsoft Office, Windows, Exchange, SQL Server, Power BI dasturlarini har qanday ehtiyojlar uchun moslashuvchan shartlarda ijaraga olish mumkin. Biznesingiz o'sishi bilan resurslaringizni kengaytiring."
    },
    icon: AppWindow,
    link: {
      ru: "/cloud-services/asp",
      uz: "/uz/cloud-services/asp"
    },
  },
] as const;
