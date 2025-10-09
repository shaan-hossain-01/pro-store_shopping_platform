import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Ensure value is a number
  const price = typeof value === "number" ? value : Number(value);
  if (isNaN(price)) return null; // or show a fallback

  const stringValue = price.toFixed(2);
  const [integerPart, decimalPart] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {integerPart}
      <span className="text-xs align-super">.{decimalPart}</span>
    </p>
  );
};

export default ProductPrice;
