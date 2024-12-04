import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DdosAccordion() {
  return (
    <div className="my-60">
      <h2 className="text-center text-4xl font-medium">Для кого подходит?</h2>
      <Accordion type="single" collapsible className="w-full mt-20">
        <AccordionItem value="first">
          <AccordionTrigger className="text-xl">
            Какую модель построения защиты от DDoS-атак вы используете?
          </AccordionTrigger>
          <AccordionContent className="text-[18px]">
            <p>
              Услуга защиты сайта работает с использованием технологии Reverse
              Proxy. После изменения А-записей на DNS-сервере запросы
              посетителей к сайту перенаправляются на защищенный IP-адрес
              DDoS-GUARD. Входящий трафик очищается от аномальных запросов
              (Атака поддельными TCP-сессиями, атака поддельными TCP сессиями с
              несколькими SYN-ACK, сессионная атака Slowloris, атака поддельными
              TCP сессиями с несколькими ACK, атака фрагментированными
              HTTP-пакетами, HTTP-флуд, HTTP-флуд одиночными сессиями, HTTP-флуд
              одиночными запросами, рекурсивный HTTP GET флуд, рекурсивный HTTP
              GET флуд случайными запросами, атака с целью отказа приложения,
              UDP-флуд, фрагментированный UDP-флуд, DNS-флуд, VoIP-флуд, флуд
              медиаданными, UDP-флуд с помощью ботнета, ICMP-флуд,
              фрагментированный ICMP-флуд, DDoS-атака нулевого дня, NTP-флуд,
              атака с модификацией поля TOS, IP Null атака, TCP Null атака,
              Smurf-атака, атака широковещательными UDP пакетами, Apache-киллер,
              атака человек посередине (MITM), атака SIP Register Flood,
              тайпсквоттинг, атака SNMP Reflection, CharGEN-флуд, атака SYN
              Flood, атака SYN-ACK Flood, атака ACK и PUSH ACK Flood,
              фрагментированный ACK Flood, атака RST и FIN Flood, атака Misused
              Application, NTP-амплификация, DNS-амплификация, низкоуровневая
              атака (Naptha Attack), MS SQL DDoS-атака, SIP флуд запросами
              соединения, Ping смерти, ARP-спуфинг, атака LAND, атака Teardrop,
              SSL Flood, Memcached DDoS-атака, атака SIP Malformed, DDoS-атаки с
              амплификацией.) и передается на целевой веб-сервер. Если в
              настройках правил обработки трафика сайта включена опция
              кэширования и отдачи контента, статический контент отправляется по
              запросу посетителей с ближайшего узла обработки трафика. Для
              большинства сайтов включение этой опции позволит значительно
              снизить нагрузку на целевой веб-сервер и ускорить загрузку
              веб-страницы.
            </p>
            <p>
              Услуга защиты сети имеет несколько вариантов организации: в
              зависимости от способа доставки трафика в сеть клиента, схемы
              фильтрации, количества и расположения точек подключений и других
              опций.
            </p>

            <ul>
              <li>- Туннели через общедоступную сеть (GRE, IPIP)</li>
              <li>
                - L2/L3 каналы через сторонних операторов и партнеров DDoS-GUARD
              </li>
              <li>
                - Прямое подключение к оборудованию DDoS-GUARD в одной из точек
                присутствия
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="second">
          <AccordionTrigger className="text-xl">
            Как вносятся адреса в белый список: автоматически или вручную?
          </AccordionTrigger>
          <AccordionContent className="grid gap-5 text-[18px]">
            Адреса вносятся вручную.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
