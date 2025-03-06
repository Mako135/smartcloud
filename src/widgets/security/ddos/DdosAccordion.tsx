import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { useState, useEffect } from "react";

const translations = {
  ru: {
    title: "Для кого подходит?",
    question1: "Какую модель построения защиты от DDoS-атак вы используете?",
    answer1_part1:
      "Услуга защиты сайта работает с использованием технологии Reverse Proxy. После изменения А-записей на DNS-сервере запросы посетителей к сайту перенаправляются на защищенный IP-адрес DDoS-GUARD. Входящий трафик очищается от аномальных запросов (Атака поддельными TCP-сессиями, атака поддельными TCP сессиями с несколькими SYN-ACK, сессионная атака Slowloris, атака поддельными TCP сессиями с несколькими ACK, атака фрагментированными HTTP-пакетами, HTTP-флуд, HTTP-флуд одиночными сессиями, HTTP-флуд одиночными запросами, рекурсивный HTTP GET флуд, рекурсивный HTTP GET флуд случайными запросами, атака с целью отказа приложения, UDP-флуд, фрагментированный UDP-флуд, DNS-флуд, VoIP-флуд, флуд медиаданными, UDP-флуд с помощью ботнета, ICMP-флуд, фрагментированный ICMP-флуд, DDoS-атака нулевого дня, NTP-флуд, атака с модификацией поля TOS, IP Null атака, TCP Null атака, Smurf-атака, атака широковещательными UDP пакетами, Apache-киллер, атака человек посередине (MITM), атака SIP Register Flood, тайпсквоттинг, атака SNMP Reflection, CharGEN-флуд, атака SYN Flood, атака SYN-ACK Flood, атака ACK и PUSH ACK Flood, фрагментированный ACK Flood, атака RST и FIN Flood, атака Misused Application, NTP-амплификация, DNS-амплификация, низкоуровневая атака (Naptha Attack), MS SQL DDoS-атака, SIP флуд запросами соединения, Ping смерти, ARP-спуфинг, атака LAND, атака Teardrop, SSL Flood, Memcached DDoS-атака, атака SIP Malformed, DDoS-атаки с амплификацией.) и передается на целевой веб-сервер. Если в настройках правил обработки трафика сайта включена опция кэширования и отдачи контента, статический контент отправляется по запросу посетителей с ближайшего узла обработки трафика. Для большинства сайтов включение этой опции позволит значительно снизить нагрузку на целевой веб-сервер и ускорить загрузку веб-страницы.",
    answer1_part2:
      "Услуга защиты сети имеет несколько вариантов организации: в зависимости от способа доставки трафика в сеть клиента, схемы фильтрации, количества и расположения точек подключений и других опций.",
    list1: " - Туннели через общедоступную сеть (GRE, IPIP)",
    list2: " - L2/L3-каналы через сторонних операторов и партнеров DDoS-GUARD",
    list3:
      " - Прямое подключение к оборудованию DDoS-GUARD в одной из точек присутствия",
    question2: "В скором времени с вами свяжется наш менеджер",
    answer2: "Произошла ошибка сервера, попробуйте позже",
  },
  uz: {
    title: "Kimlar uchun mos?",
    question1:
      "Siz qanday DDoS hujumlariga qarshi himoya modelidan foydalanasiz?",
    answer1_part1:
      "Saytni himoya qilish xizmati Reverse Proxy texnologiyasidan foydalangan holda ishlaydi. DNS-serverda A-yozuvlarini o‘zgartirgandan so‘ng, tashrif buyuruvchilarning so‘rovlari DDoS-GUARD himoyalangan IP-manziliga yo‘naltiriladi. Kiruvchi trafik anomaliyalar (soxta TCP-sessiyalar hujumi, bir nechta SYN-ACK bilan soxta TCP hujumi, Slowloris sessiya hujumi, bir nechta ACK bilan soxta TCP sessiyalari hujumi, bo‘laklangan HTTP-paketlar hujumi, HTTP-flood, yakka sessiyalar orqali HTTP-flood, yakka so‘rovlarga asoslangan HTTP-flood, rekursiv HTTP GET flood, tasodifiy so‘rovlarga asoslangan rekursiv HTTP GET flood, ilovalarni ishdan chiqarish hujumi, UDP-flood, bo‘laklangan UDP-flood, DNS-flood, VoIP-flood, media ma’lumotlari bilan flood, botnet orqali UDP-flood, ICMP-flood, bo‘laklangan ICMP-flood, nol kunlik DDoS-hujumi, NTP-flood, TOS maydonini o‘zgartirish hujumi, IP Null hujumi, TCP Null hujumi, Smurf-hujumi, UDP translyatsiya hujumi, Apache-killer, odam orasida hujum (MITM), SIP Register Flood hujumi, typo-squatting, SNMP Reflection hujumi, CharGEN-flood, SYN Flood hujumi, SYN-ACK Flood hujumi, ACK va PUSH ACK Flood hujumi, bo‘laklangan ACK Flood, RST va FIN Flood hujumi, Misused Application hujumi, NTP- kuchaytirish hujumi, DNS-kuchaytirish hujumi, past darajadagi hujum (Naptha Attack), MS SQL DDoS-hujumi, SIP so‘rovlarini bog‘lash orqali flood, O‘lim Ping hujumi, ARP-spoofing, LAND hujumi, Teardrop hujumi, SSL Flood, Memcached DDoS-hujumi, SIP Malformed hujumi, kuchaytirish orqali DDoS-hujumlar) dan tozalanib, maqsadli veb-serverga yuboriladi. Agar sayt trafikini qayta ishlash qoidalarida keshlash va kontentni yetkazib berish opsiyasi yoqilgan bo‘lsa, statik kontent tashrif buyuruvchilarning so‘rovlariga eng yaqin trafikni qayta ishlash tugunidan yetkazib beriladi. Ko‘pgina saytlarda ushbu opsiyani yoqish maqsadli veb-serverga tushadigan yukni sezilarli darajada kamaytirish va veb-sahifalarni yuklash tezligini oshirish imkonini beradi.",
    answer1_part2:
      "armoqni himoya qilish xizmati bir necha tashkil etish variantlariga ega: u mijoz tarmog‘iga trafik yetkazib berish usuli, filtrlash sxemasi, ulanish nuqtalarining soni va joylashuvi hamda boshqa variantlarga bog‘liq ravishda moslashtirilishi mumkin.",
    list1: "Ochiq tarmoq orqali tunnel (GRE, IPIP)",
    list2: "L2/L3 kanallari (DDoS-GUARD hamkorlari orqali)",
    list3:
      "DDoS-GUARD uskunasiga to‘g‘ridan-to‘g‘ri ulanish mavjud nuqtalardan birida",
    question2: "Tez orada menejerimiz siz bilan bog‘lanadi",
    answer2: "Server xatosi yuz berdi, keyinroq urinib ko‘ring",
  },
};

export default function DdosAccordion() {
  const [currentLocale, setCurrentLocale] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    setCurrentLocale(window.location.pathname.startsWith("/uz") ? "uz" : "ru");
  }, []);

  const t = translations[currentLocale];
  return (
    <div className="my-60">
      <h2 className="text-center text-4xl font-medium">{t.title}</h2>
      <Accordion type="single" collapsible className="w-full mt-20">
        <AccordionItem value="first">
          <AccordionTrigger className="text-xl">{t.question1}</AccordionTrigger>
          <AccordionContent className="text-[18px]">
            <p>{t.answer1_part1}</p>
            <p>{t.answer1_part2}</p>
            <ul>
              <li>{t.list1}</li>
              <li>{t.list2}</li>
              <li>{t.list3}</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="second">
          <AccordionTrigger className="text-xl">{t.question2}</AccordionTrigger>
          <AccordionContent className="grid gap-5 text-[18px]">
            {t.answer2}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
