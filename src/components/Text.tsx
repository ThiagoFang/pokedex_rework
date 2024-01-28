import { ComponentProps, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants";

const textStyles = tv({
  base: "text-slate-500 tracking-wide text-sm dark:text-slate-300",
})

type TextProps = ComponentProps<"h1"> & VariantProps<typeof textStyles> & {
  children: ReactNode;
}

export default function Text({ children, className, ...rest }: TextProps) {
  return (
    <p className={textStyles({ className })} {...rest}>{children}</p>
  )
}