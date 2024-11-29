import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SocAccordion() {
  return (
    <div className="my-60">
      <h2 className="text-center text-4xl font-medium">Для кого подходит?</h2>
      <Accordion type="single" collapsible className="w-full mt-20">
        <AccordionItem value="first">
          <AccordionTrigger className="text-xl">
            Какое оборудование нужно, чтобы воспользоваться сервисом
            информационной безопасности?
          </AccordionTrigger>
          <AccordionContent className="text-[18px]">
            Особенность услуги в том, что клиенту не нужно наращивать
            собственные технологические мощности, для поддержания максимального
            уровня защиты. Разрабатываемые индивидуальные и комплексные решения
            базируются на ресурсном потенциале провайдера.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="second">
          <AccordionTrigger className="text-xl">
            Нужно ли заказчику содержать собственного системного администратора?
          </AccordionTrigger>
          <AccordionContent className="grid gap-5 text-[18px]">
            Специально нанимать IT-специалиста нет необходимости. Наша команда
            поможет проанализировать текущее состояние информационной
            защищенности компании и разработает предложения для ее
            совершенствования и ликвидации уязвимостей.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="third">
          <AccordionTrigger className="text-xl">
            На кого ориентирован сервис по обеспечению ИБ?
          </AccordionTrigger>
          <AccordionContent className="grid gap-5 text-[18px]">
            Услуга рассчитана:
            <ul className="list-disc pl-5">
              <li>
                на помощь компаниям, которые испытывают повышенную нагрузку на
                корпоративную IT-инфраструктуру;
              </li>
              <li>
                на всех, кто не успевает модернизировать и обновлять собственные
                системы безопасности на фоне постоянно растущих и
                совершенствующихся инфоугроз;
              </li>
              <li>
                на компании, оказывающие дистанционные онлайн-услуги и
                работающие с удаленными сотрудниками;
              </li>
              <li>
                для тех, кто развивает каналы онлайн-продаж, частично или
                полностью мигрирует в облако
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
