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

interface ContactDialogProps {
  className?: string;
}

export function ContactDialog({ className }: ContactDialogProps) {
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
          Оставить заявку
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[320px] sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle className="text-xl">Получить консультацию</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-md">
          Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время
        </DialogDescription>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}
