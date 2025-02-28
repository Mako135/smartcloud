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
    label: "IaaS - infratuzilma xizmat sifatida",
    desc: "Bulutli infratuzilmaning asosiy komponentlari - serverlar, ma'lumotlar omborlari, operatsion tizimlar va tarmoq resurslari - yagona ulanish xizmati sifatida taqdim etiladigan model.",
    icon: Server,
    link: "/cloud-services/iaas",
  },
  {
    label: "BaaS – zaxira nusxa olish xizmat sifatida",
    desc: "Muhim fayllar tasodifan o‘chirib yuborilganida, uskunalar buzilganida, dasturiy ta'minot nosozliklarida, favqulodda holatlarda, zararli hujumlar yoki viruslar yuqtirilganida yordam beradi.",
    icon: DatabaseBackup,
    link: "/cloud-services/baas",
  },
  {
    label: "Storage – bulutli xotira ijarasi",
    desc: "Tez kengaytiriladigan, moslashuvchan bulutli xotira. Tuzilgan va tuzilmagan har qanday hajmdagi ma'lumotlarni saqlash, disk nosozliklaridan ishonchli himoya.",
    icon: HardDrive,
    link: "/cloud-services/storage",
  },
  {
    label: "VDS – virtual ajratilgan server",
    desc: "VDS imkoniyatlari real jismoniy serverning funksional imkoniyatlariga to‘liq mos keladi.",
    icon: ServerCog,
    link: "/cloud-services/vds",
  },
  {
    label: "Kaspersky",
    desc: "Kasperskiy laboratoriyasi sizning biznesingizni kiberxavflardan himoya qilish uchun zamonaviy yechimlar taklif etadi, bu esa biznesni rivojlantirishga e’tibor qaratishga imkon beradi.",
    icon: ShieldCheck,
    link: "/kaspersky",
  },
  {
    label: "Virtual Network Firewall – to‘liq himoya moduli",
    desc: "Raqamli infratuzilmaning xavfsizligi va ishonchliligi, ma'lumotlarni kiberxavf va ruxsatsiz kirishlardan himoya qilish.",
    icon: GlobeLock,
    link: "/cloud-services/vnf",
  },
  {
    label: "DDoS hujumlardan himoya",
    desc: "Mijoz tarmog‘i (serverlari)ning kompleks xavfsizligi uchun himoyalangan IP-transit shaklida amalga oshiriladi.",
    icon: ShieldBan,
    link: "/security/ddos",
  },
  {
    label: "Security Operations Center (SOC)",
    desc: "Operativ javob berish markazi axborot xavfsizligini boshqarish tizimini optimallashtirish bo‘yicha keng ko‘lamli vazifalarni hal qiladi.",
    icon: FileKey,
    link: "/security/soc",
  },
  {
    label: "Veb-ilovalarni himoya qilish (WAF)",
    desc: "Veb-ilovalar bilan aniq ishlaydigan maxsus turdagi fayrvol: himoya veb-ilova va oxirgi foydalanuvchi o‘rtasida joylashtirilib, ikki tomonlama veb-trafikni (HTTP) tahlil qiladi.",
    icon: Siren,
    link: "/security/waf",
  },
  {
    label: "Pentest (kiritish testi)",
    desc: "Mijoz tarmog‘idagi zaifliklarni aniqlash uchun maxsus dasturiy ta'minot yordamida tashqi/ichki skanerlash, shuningdek, kirishni sinash.",
    icon: DoorOpen,
    link: "/security/pentest",
  },
  {
    label: "Axborot xavfsizligi tizimlarining texnik qo‘llab-quvvatlashi",
    desc: "Xizmat doirasida kompaniyaning hozirgi himoya holati monitoringi, real vaqt rejimida tahlilni olib borish, kompleks himoya yechimlarini qo‘llab-quvvatlash amalga oshiriladi. Axborot xavfsizligi xalqaro standartlar va normalarga qat'iy rioya qilgan holda qo‘llab-quvvatlanadi.",
    icon: BotMessageSquare,
    link: "/security/support",
  },
  {
    label: "Dasturiy ta'minotni ijaraga olish",
    desc: "Dasturiy ta'minotni ijaraga olish Microsoft CSP (Cloud Solution Provider) litsenziyalash usuli bo‘yicha taqdim etiladi. Microsoft Office, Windows, Exchange, SQL Server, Power BI dasturlarini istalgan ehtiyoj uchun moslashuvchan sharoitlarda ijaraga olishingiz mumkin. Biznesingiz o‘sishi bilan resurslarni kengaytiring.",
    icon: AppWindow,
    link: "/cloud-services/asp",
  },
] as const;
