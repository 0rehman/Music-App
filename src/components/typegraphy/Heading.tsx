import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface headingProps {
  headingText: string;
  className?: string;
  sizes: "sm" | "md" | "lg" | null;
  id?: string | number;
}

const Heading = ({ className, sizes, headingText }: headingProps) => {
  const headingVariants = cva(
    "font-bold text-white leading-none lg:mb-5 mb-4",
    {
      variants: {
        sizes: {
          sm: "lg:text-[20px] md:text-[18px] text-[16px] lg:mb-5 md:mb-4 mb-3",
          md: "lg:text-[35px] md:text-[30px] text-[25px] lg:mb-5 md:mb-3 mb-2",
          lg: "lg:text-[45px] md:text-[40px] text-[35px] lg:mb-10 md:mb-7 mb-5",
        },
      },
      defaultVariants: {
        sizes: "md",
      },
    }
  );

  return (
    <h5 className={cn(headingVariants({ className, sizes }))}>{headingText}</h5>
  );
};

export default Heading;
