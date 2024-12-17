import React, { useState } from "react";
import { Button } from "../ui/button";
import { ShadcnPhone } from "../shared/CustomPhoneInput";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { isValidPhoneNumber } from "@/lib/isNumber";
import { toast } from "sonner";
import { sendEmail } from "@/api";

export default function ContactForm() {
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
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div>
          <Label htmlFor="name" className="text-right text-md">
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
          <Label htmlFor="company" className="text-right text-md">
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
          <Label htmlFor="phone" className="text-right text-md">
            Контактный телефон*
          </Label>
          <ShadcnPhone value={inputs.phone} onChange={handlePhoneChange} />
        </div>
      </div>
      <Button type="submit" className="w-full text-md" variant="default">
        Перезвоните мне
      </Button>
    </form>
  );
}
