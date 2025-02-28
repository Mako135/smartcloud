import { isValidPhoneNumber } from "@/lib/isNumber";

const uzbekistanPhoneRegex = /^998(90|91|93|94|95|97|98|99|33|88|50|55|77|71|78|79)\d{7}$/;

const messages = {
  ru: {
    name: "Введите ваше имя",
    company: "Введите название компании",
    phone: "Введите номер телефона",
    invalidPhone: "Введите корректный номер телефона",
  },
  uz: {
    name: "Ismingizni kiriting",
    company: "Kompaniya nomini kiriting",
    phone: "Telefon raqamingizni kiriting",
    invalidPhone: "To‘g‘ri telefon raqamini kiriting",
  },
};

export function validateForm({
  name,
  company,
  phone,
}: {
  name: string;
  company: string;
  phone: string;
}): string | null {
  const currentLocale = window.location.pathname.startsWith("/uz") ? "uz" : "ru";
  const t = messages[currentLocale];

  if (!name.trim()) return t.name;
  if (!company.trim()) return t.company;
  if (!phone.trim()) return t.phone;

  if (phone.startsWith("+998") && !uzbekistanPhoneRegex.test(phone.replace(/\D/g, ""))) {
    return t.invalidPhone;
  }

  if (!isValidPhoneNumber(phone)) return t.invalidPhone;

  return null;
}
