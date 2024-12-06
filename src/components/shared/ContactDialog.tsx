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
import { isValidPhoneNumber } from "@/lib/isNumber";
import clsx from "clsx";
import { useState } from "react";
import { toast } from "sonner";
import { ShadcnPhone } from "./CustomPhoneInput";
import { sendEmail } from "@/api";

interface ContactDialogProps {
  className?: string;
}

export function ContactDialog({ className }: ContactDialogProps) {
  const [inputs, setInputs] = useState({
    name: "",
    company: "",
    phone: "",
  });

  const handlePhoneChange = (phone: string) => {
    setInputs((prev) => ({
      ...prev,
      phone: phone,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidPhoneNumber(inputs.phone)) {
      toast.error("Введите корректный номер телефона");
      return;
    }

    try {
      const data = await sendEmail({
        name: inputs.name,
        company: inputs.company,
        phone: inputs.phone,
      });
      if (data.ok) {
        toast.success("В скором времени с вами свяжется наш менеджер");
      }
    } catch (error) {
      toast.error("Произошла ошибка сервера, попробуйте позже");
    }

    setInputs({ name: "", company: "", phone: "" });
  };

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
          <DialogTitle>Получить консультацию</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время
        </DialogDescription>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="name" className="text-right">
                Ваше имя*
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Ваше имя"
                type="text"
                autoComplete="off"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="company" className="text-right">
                Название компании*
              </Label>
              <Input
                id="company"
                name="company"
                required
                placeholder="Название компании"
                type="text"
                autoComplete="off"
                value={inputs.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-right">
                Контактный телефон*
              </Label>
              <ShadcnPhone value={inputs.phone} onChange={handlePhoneChange} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Перезвоните мне
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
