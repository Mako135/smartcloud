import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionProps {
  data: { title: string; desc: string }[];
}

export function SecurityAccordion({ data }: AccordionProps) {
  return (  
    <div className="my-40">
      <h2 className="text-center text-4xl font-medium">Для кого подходит?</h2>
      <Accordion type="single" collapsible className="w-full mt-20">
        {data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-xl">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-md">{item.desc}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
