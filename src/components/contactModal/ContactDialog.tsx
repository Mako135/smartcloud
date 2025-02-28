import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import clsx from "clsx";
import ContactForm from "./ContactForm";
import { useState, useEffect } from "react";

const translations: Record<"ru" | "uz", { button: string; title: string; description: string }> = {
  ru: {
    button: "Оставить заявку",
    title: "Получить консультацию",
    description: "Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время",
  },
  uz: {
    button: "Ariza qoldirish",
    title: "Konsultatsiya olish",
    description: "Ariza qoldiring, va bizning menejerimiz siz bilan tez orada bog'lanadi",
  },
};

export function ContactDialog({ className }: { className?: string }) {
  const [currentLocale, setCurrentLocale] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    setCurrentLocale(window.location.pathname.startsWith("/uz") ? "uz" : "ru");
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={clsx(
            "rounded-3xl bg-transparent border-secondary hover:bg-secondary hover:text-white text-md",
            className
          )}
        >
          {translations[currentLocale].button}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[320px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {translations[currentLocale].title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-md">
          {translations[currentLocale].description}
        </DialogDescription>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
