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
          md: "lg:text-[40px] md:text-[35px] text-[30px] lg:mb-7 md:mb-5 mb-4",
          lg: "lg:text-[50px] md:text-[45px] text-[40px] lg:mb-10 md:mb-7 mb-5",
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
