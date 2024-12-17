import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";

interface AccordionProps {
  data: { title: string; desc: string }[];
}

export function SecurityAccordion({ data }: AccordionProps) {
  return (
    <section className="my-60">
      <h2 className="text-center text-4xl font-medium">Для кого подходит?</h2>
      <Accordion type="single" collapsible className="w-full mt-20">
        {data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-xl">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-[18px]">
              {item.desc}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
