import { useCallback, useState, useEffect } from "react";
import { ShadcnPhone } from "../shared/CustomPhoneInput";
import { toast } from "sonner";
import { sendEmail } from "@/api";
import { Button, Input, Label } from "../ui";
import { validateForm } from "./formValidate";

const translations = {
  ru: {
    name: "Ваше имя*",
    company: "Название компании*",
    phone: "Контактный телефон*",
    placeholderName: "Ваше имя",
    placeholderCompany: "Название компании",
    submit: "Перезвоните мне",
    submitting: "Отправка...",
    success: "В скором времени с вами свяжется наш менеджер",
    error: "Произошла ошибка сервера, попробуйте позже"
  },
  uz: {
    name: "Ismingiz*",
    company: "Kompaniya nomi*",
    phone: "Kontakt telefon*",
    placeholderName: "Ismingizni kiriting",
    placeholderCompany: "Kompaniya nomini kiriting",
    submit: "Menga qo'ng'iroq qiling",
    submitting: "Yuborilmoqda...",
    success: "Tez orada menejerimiz siz bilan bog'lanadi",
    error: "Server xatosi yuz berdi, keyinroq urinib ko'ring"
  }
};

export default function ContactForm() {
  const [inputs, setInputs] = useState({
    name: "",
    company: "",
    phone: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<"ru" | "uz">("ru");

  useEffect(() => {
    setCurrentLocale(window.location.pathname.startsWith("/uz") ? "uz" : "ru");
  }, []);

  const t = translations[currentLocale];

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handlePhoneChange = useCallback((phone: string) => {
    setInputs((prev) => ({ ...prev, phone }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errorMsg = validateForm(inputs);
    if (errorMsg) {
      toast.error(errorMsg);
      return;
    }

    setIsLoading(true);

    try {
      const data = await sendEmail(inputs);
      if (data.ok) {
        toast.success(t.success);
        setInputs({ name: "", company: "", phone: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error(t.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div>
          <Label htmlFor="name" className="text-right text-md">
            {t.name}
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder={t.placeholderName}
            type="text"
            autoComplete="off"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="company" className="text-right text-md">
            {t.company}
          </Label>
          <Input
            id="company"
            name="company"
            required
            placeholder={t.placeholderCompany}
            type="text"
            autoComplete="off"
            value={inputs.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-right text-md">
            {t.phone}
          </Label>
          <ShadcnPhone value={inputs.phone} onChange={handlePhoneChange} />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full text-md"
        variant="default"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? t.submitting : t.submit}
      </Button>
    </form>
  );
}
