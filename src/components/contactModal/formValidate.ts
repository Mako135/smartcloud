import { isValidPhoneNumber } from "@/lib/isNumber";

export function validateForm({
  name,
  company,
  phone,
}: {
  name: string;
  company: string;
  phone: string;
}): string | null {
  if (!name.trim()) return "Введите ваше имя";
  if (!company.trim()) return "Введите название компании";
  if (!phone.trim()) return "Введите номер телефона";
  if (!isValidPhoneNumber(phone)) return "Введите корректный номер телефона";
  return null;
}
