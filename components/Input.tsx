import { ReactNode } from "react";

type Props = {
  defaultValue?: string;
  name: string;
  onChange?: () => Promise<void>;
  outline?: boolean;
  placeholder?: string;
  preffix?: ReactNode;
  preffixAction?: (formData: FormData) => Promise<void>;
  suffix?: ReactNode;
  suffixAction?: (formData: FormData) => Promise<void>;
  value?: string;
};

export default function Input({
  defaultValue,
  name,
  onChange,
  outline,
  placeholder,
  preffix,
  preffixAction,
  suffix,
  suffixAction,
  value,
}: Props) {
  return (
    <form className="flex items-center h-10 rounded-md border border-[--border-1] focus-within:border-[--border-2]">
      {preffix && (
        <button
          className={`p-3 ${outline && "border-r border-[--border-1]"}`}
          formAction={preffixAction}
        >
          {preffix}
        </button>
      )}
      <input
        id={name}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        className="px-2 w-full h-full bg-transparent outline-none"
      />
      {suffix && (
        <button
          className={`p-3 ${outline && "border-l border-[--border-1]"}`}
          formAction={suffixAction}
        >
          {suffix}
        </button>
      )}
    </form>
  );
}
