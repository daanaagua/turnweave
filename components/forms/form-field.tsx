import type { TextareaHTMLAttributes, InputHTMLAttributes } from "react";

type SharedFieldProps = {
  label: string;
  hint?: string;
  error?: string;
};

type InputFieldProps = SharedFieldProps &
  InputHTMLAttributes<HTMLInputElement> & {
    kind?: "input";
  };

type TextareaFieldProps = SharedFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    kind: "textarea";
  };

export function FormField(props: InputFieldProps | TextareaFieldProps) {
  const { label, hint, error, className, kind, ...rest } = props;
  const fieldClassName =
    "mt-2 w-full rounded-2xl border border-line bg-white/5 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-accent/70 focus:bg-white/5";
  const statusClassName = error
    ? "mt-2 text-xs leading-5 text-[#f2a6a6]"
    : "mt-2 text-xs leading-5 text-muted";

  if (kind === "textarea") {
    return (
      <label className="block">
        <span className="text-sm font-medium text-ink">{label}</span>
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={`${fieldClassName} min-h-32 resize-y ${className ?? ""}`.trim()}
        />
        {error ? (
          <p className={statusClassName}>{error}</p>
        ) : hint ? (
          <p className={statusClassName}>{hint}</p>
        ) : null}
      </label>
    );
  }

  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        className={`${fieldClassName} ${className ?? ""}`.trim()}
      />
      {error ? (
        <p className={statusClassName}>{error}</p>
      ) : hint ? (
        <p className={statusClassName}>{hint}</p>
      ) : null}
    </label>
  );
}
