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
    question1: "Какое оборудование нужно, чтобы воспользоваться сервисом информационной безопасности?",
    answer1: "Особенность услуги в том, что клиенту не нужно наращивать собственные технологические мощности, для поддержания максимального уровня защиты. Разрабатываемые индивидуальные и комплексные решения базируются на ресурсном потенциале провайдера.",
    question2: "Нужно ли заказчику содержать собственного системного администратора?",
    answer2: "Специально нанимать IT-специалиста нет необходимости. Наша команда поможет проанализировать текущее состояние информационной защищенности компании и разработает предложения для ее совершенствования и ликвидации уязвимостей.",
    question3:"На кого ориентирован сервис по обеспечению ИБ?",
    answer3_part1: "Услуга рассчитана:",
    answer3_part2: "на помощь компаниям, которые испытывают повышенную нагрузку на корпоративную IT-инфраструктуру;",
    answer3_part3: "на всех, кто не успевает модернизировать и обновлять собственные системы безопасности на фоне постоянно растущих и совершенствующихся инфоугроз;",
    answer3_part4: "на компании, оказывающие дистанционные онлайн-услуги и работающие с удаленными сотрудниками;",
    answer3_part5: "для тех, кто развивает каналы онлайн-продаж, частично или полностью мигрирует в облако",
  },
  uz: {
    title: "Kimlar uchun mos?",
    question1: "Axborot xavfsizligi xizmatidan foydalanish uchun qanday uskunalar kerak?",
    answer1: "Xizmatning o‘ziga xosligi shundaki, mijoz o‘zining texnologik imkoniyatlarini kengaytirishga hojat yo‘q, chunki maksimal darajadagi himoyani ta’minlash provayderning resurslari asosida amalga oshiriladi. Ishlab chiqilayotgan individual va kompleks yechimlar aynan shu resurs imkoniyatlariga tayanadi.",
    question2: "Buyurtmachi o‘zining tizim administratorini ishga olishi shartmi?",
    answer2: "Maxsus IT-mutaxassisni yollash shart emas. Bizning jamoamiz kompaniyaning joriy axborot xavfsizligi holatini tahlil qilishga va uni takomillashtirish hamda zaifliklarni bartaraf etish bo‘yicha takliflar ishlab chiqishga yordam beradi.",
    question3: "Axborot xavfsizligini ta’minlash xizmati kimlar uchun mo‘ljallangan?",
    answer3_part1: "Xizmat quyidagilar uchun mo‘ljallangan:",
    answer3_part2: "korporativ IT-infrastrukturasiga yuqori yuklama tushayotgan kompaniyalarga yordam berish uchun;",
    answer3_part3: "o‘z xavfsizlik tizimlarini doimiy ravishda o‘sib borayotgan va takomillashayotgan axborot tahdidlariga mos ravishda yangilashga ulgurmayotganlar uchun;",
    answer3_part4: "masofaviy onlayn xizmatlar ko‘rsatayotgan va uzoqdan ishlaydigan xodimlar bilan ishlovchi kompaniyalar uchun;",
    answer3_part5: "onlayn savdo kanallarini rivojlantirayotgan, qisman yoki to‘liq bulutga o‘tayotgan kompaniyalar uchun."
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
            {t.answer2}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="third">
          <AccordionTrigger className="text-xl">
            {t.question3}
          </AccordionTrigger>
          <AccordionContent className="grid gap-5 text-[18px]">
            {t.answer3_part1}
            <ul className="list-disc pl-5">
              <li>
                {t.answer3_part2}
              </li>
              <li>
              {t.answer3_part3}
              </li>
              <li>
              {t.answer3_part4}
              </li>
              <li>
              {t.answer3_part5}
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
