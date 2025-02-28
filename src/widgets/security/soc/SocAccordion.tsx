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
    question1: "Возможности SOC",
    answer1: "Толчком к развитию Security Operations Center послужили рост и совершенствование кибератак. Для противодействия угрозам требовался надежный инструмент защиты. Но, чем крупнее компания, чем более разнотипная и географически разнесенная ее IT-инфраструктура, тем сложнее организовать результативный самостоятельный мониторинг событий информационной безопасности. А для среднего и малого бизнеса создание и содержание полноценной службы киберзащиты часто оказывается финансово непосильным.",
    question2: "Архитектура SOC",
    answer2_part1: "Все, что мониторит и защищает SOC, называют информационными ресурсами. С технической точки зрения, работа оперативного центра инфобезопасности строится по схеме:",
    answer2_part2: "Специальные средства защиты информации (системы класса SIM и SIEM) проводят сбор инцидентов: отслеживают и регистрируют все, что происходит с информационными ресурсами компании.",
    answer2_part3: "Собранная информация передается в SOC.",
    answer2_part4: "Команда центра анализирует, реагирует и расследует инциденты информационной безопасности. Для этого используют различные программные и аппаратные средства.",
    question3: "Что лучше собственный SOC или аутсорсинг",
    answer3: "Однозначного варианта нет. Операционная модель SOC ИБ подбирается с учетом потребностей и возможностей конкретного бизнеса: - собственная. Самый дорогой и долгий по организации и запуску вариант. Его достоинство – центр мониторинга информационной безопасности полностью принадлежит компании; - аутсорсинговая. Одно из наиболее перспективных направлений среди сервисов киберзащиты. При аренде SOC как услуги все рабочие моменты берет на себя оператор. Клиенту не нужно искать и содержать штат, разрабатывать и внедрять регламенты. - гибридная. Модель совместного действия. Аппаратно-техническую часть для разворачивания в IT-инфраструктуре заказчик приобретает самостоятельно, а управление осуществляет совместно с провайдером. Объем оборудования, число сервисов и функций рассчитывается в каждом конкретном случае.",
  },
  uz: {
        title: "Kimlar uchun mos?",
        question1: "SOC imkoniyatlari",
        answer1: "Security Operations Center (SOC) rivojlanishiga kiberhujumlarning o‘sishi va takomillashuvi turtki bo‘ldi. Tahdidlarga qarshi kurashish uchun ishonchli himoya vositasi talab qilindi. Biroq, kompaniya qanchalik yirik va IT-infrastrukturasining turlari qancha ko‘p va geografik jihatdan tarqoq bo‘lsa, axborot xavfsizligi hodisalarini samarali mustaqil kuzatish shunchalik qiyin bo‘ladi. O‘rta va kichik biznes uchun esa to‘liq kiberxavfsizlik xizmatini yaratish va saqlash ko‘pincha moliyaviy jihatdan og‘irlik qiladi.",
        question2: "SOC arxitekturasi",
        answer2_part1: "SOC tomonidan kuzatiladigan va himoyalangan hamma narsa axborot resurslari deb ataladi. Texnik jihatdan axborot xavfsizligi operatsion markazining ishi quyidagi sxema asosida quriladi:",
        answer2_part2: "Maxsus axborot xavfsizligi vositalari (SIM va SIEM tizimlari) hodisalarni yig‘ish bilan shug‘ullanadi: kompaniyaning axborot resurslari bilan sodir bo‘ladigan barcha jarayonlarni kuzatadi va qayd qiladi.",
        answer2_part3: "Yig‘ilgan ma’lumotlar SOCga yuboriladi.",
        answer2_part4: "Markaz jamoasi axborot xavfsizligi hodisalarini tahlil qiladi, ularga javob qaytaradi va tekshiradi. Buning uchun turli dasturiy va apparat vositalaridan foydalaniladi.",
        question3: "O‘z SOC ni yaratish yoki autsorsing?",
        answer3: "Yagona to‘g‘ri variant yo‘q. SOC axborot xavfsizligi operatsion modeli har bir biznesning ehtiyoj va imkoniyatlariga qarab tanlanadi: - o‘ziga tegishli. Eng qimmat va tashkil etish hamda ishga tushirish bo‘yicha eng uzoq davom etadigan variant. Uning ustunligi – axborot xavfsizligini kuzatish markazi to‘liq kompaniyaga tegishli bo‘ladi; - autsorsing. Kiberxavfsizlik xizmatlari orasida eng istiqbolli yo‘nalishlardan biri. SOCni xizmat sifatida ijaraga olganda barcha ish jarayonlarini operator o‘z zimmasiga oladi. Mijozga kadrlarni qidirish va ularni saqlash, reglamentlarni ishlab chiqish va joriy etish shart emas. - gibrid. Hamkorlik modeli. Buyurtmachi IT-infrastrukturasiga joriy qilish uchun apparat-texnik qismini o‘zi sotib oladi, boshqaruv esa provayder bilan birgalikda amalga oshiriladi. Uskuna hajmi, xizmatlar va funksiyalar soni har bir aniq holatda hisoblab chiqiladi."
    }
};


export default function SocAccordion() {
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
          <AccordionTrigger className="text-xl">
            {t.question1}
          </AccordionTrigger>
          <AccordionContent className="text-[18px]">
            {t.answer1}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="second">
          <AccordionTrigger className="text-xl">
            {t.question2}
          </AccordionTrigger>
          <AccordionContent className="grid gap-5 text-[18px]">
            {t.answer2_part1}
            <ul className="pl-5 list-disc">
              <li>{t.answer2_part1}</li>
              <li>{t.answer2_part2}</li>
              <li>{t.answer2_part3}</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="third">
          <AccordionTrigger className="text-xl">
            {t.question3}
          </AccordionTrigger>
          <AccordionContent className="grid gap-5 text-[18px]">
            {t.answer3}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
