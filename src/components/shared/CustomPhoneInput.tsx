import React, { useMemo, useCallback } from "react";
import "react-international-phone/style.css";
import {
  type CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

interface ShadcnPhoneProps {
  value: string;
  onChange: (phone: string) => void;
}

const filteredCountries = defaultCountries.filter((country) =>
  ["ru", "kz", "uz"].includes(parseCountry(country).iso2)
);

export const ShadcnPhone = React.memo(
  ({ value, onChange }: ShadcnPhoneProps) => {
    const {
      inputValue,
      handlePhoneValueChange,
      inputRef,
      country,
      setCountry,
    } = usePhoneInput({
      defaultCountry: "uz",
      value,
      countries: filteredCountries,
      onChange: (data) => {
        onChange(data.phone);
      },
    });
    const parsedCountries = useMemo(() => {
      return filteredCountries.map((c) => parseCountry(c));
    }, []);

    const handleCountryChange = useCallback(
      (value: string) => {
        setCountry(value as CountryIso2);
      },
      [setCountry]
    );

    const handlePhoneChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        handlePhoneValueChange(e);
      },
      [handlePhoneValueChange]
    );

    return (
      <div className="flex items-center">
        <Select value={country.iso2} onValueChange={handleCountryChange}>
          <SelectTrigger className="w-[80px] rounded-r-none">
            <SelectValue placeholder="Выберите страну">
              <FlagImage iso2={country.iso2} className="mr-2" />
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {parsedCountries.map((country) => (
                <SelectItem key={country.iso2} value={country.iso2}>
                  <div className="flex items-center">
                    <FlagImage iso2={country.iso2} className="mr-2" />
                    <span>{country.name}</span>
                    <span className="text-gray-500 ml-auto">
                      +{country.dialCode}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          placeholder="Номер телефона"
          value={inputValue}
          onChange={handlePhoneChange}
          ref={inputRef}
          type="tel"
          className="rounded-l-none border-l-0"
        />
      </div>
    );
  }
);
