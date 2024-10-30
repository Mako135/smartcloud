import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isNumber } from "@/lib/isNumber";
import clsx from "clsx";
import { useState } from "react";
import { toast } from "sonner";

interface ContactDialogProps {
  className?: string;
}

export function ContactDialog({ className }: ContactDialogProps) {
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isNumber(phone)) {
      toast.error("Введите корректный номер телефона");
      return;
    }

    toast.success("В скором времени с вами свяжется наш менеджер");

    console.log("Имя:", name);
    console.log("Компания:", company);
    console.log("Телефон:", phone);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={clsx("rounded-3xl bg-transparent border-secondary hover:bg-secondary", className)}
        >
          Оставить заявку
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[320px] sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle>Получить консультацию</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Оставьте заявку и наш менеджер свяжется с вами в ближайшее время
        </DialogDescription>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="name" className="text-right">
                Ваше имя*
              </Label>
              <Input
                id="name"
                required
                placeholder="Kazteleport"
                type="text"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="company" className="text-right">
                Название компании*
              </Label>
              <Input
                id="company"
                required
                placeholder="Smartcloud"
                type="text"
                autoComplete="off"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-right">
                Контактный телефон*
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full"
                required
                placeholder="+380123456789"
                type="tel"
                autoComplete="off"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Отправить заявку
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
