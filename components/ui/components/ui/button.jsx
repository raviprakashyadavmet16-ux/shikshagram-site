import React from "react";

export function Button({
  className = "",
  children,
  variant,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center transition disabled:opacity-50";
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
