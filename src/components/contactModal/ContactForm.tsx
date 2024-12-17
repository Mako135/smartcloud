import { useCallback, useState } from "react";
import { ShadcnPhone } from "../shared/CustomPhoneInput";
import { toast } from "sonner";
import { sendEmail } from "@/api";
import { Button, Input, Label } from "../ui";
import { validateForm } from "./formValidate";

export default function ContactForm() {
  const [inputs, setInputs] = useState({
    name: "",
    company: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);

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
        toast.success("В скором времени с вами свяжется наш менеджер");
        setInputs({ name: "", company: "", phone: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Произошла ошибка сервера, попробуйте позже");
    } finally {
      setIsLoading(false);
    }
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
      <Button
        type="submit"
        className="w-full text-md"
        variant="default"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? "Отправка..." : "Перезвоните мне"}
      </Button>
    </form>
  );
}
