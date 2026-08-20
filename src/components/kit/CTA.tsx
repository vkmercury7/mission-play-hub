import { ArrowRight } from "lucide-react";

const CHECKOUT_URL =
  "https://hub.usepinpay.com/pay/ea65198a-96c4-4da7-b067-3b27c646037a";

export function CTA({
  children = "QUERO O KIT ANTI-TÉDIO",
  size = "lg",
  className = "",
  href = CHECKOUT_URL,
}: {
  children?: React.ReactNode;
  size?: "lg" | "md";
  className?: string;
  href?: string;
}) {
  const sizing =
    size === "lg"
      ? "px-7 py-5 text-base sm:text-lg md:px-10 md:py-6 md:text-xl"
      : "px-6 py-4 text-sm sm:text-base";

  return (
    <a
      href={href}
      className={`cta-base w-full text-center sm:w-auto ${sizing} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
    </a>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  );
}
