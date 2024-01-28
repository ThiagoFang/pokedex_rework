import { ComponentProps, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants";

const subtitleStyles = tv({
  base: "text-slate-600 tracking-wide text-sm dark:text-slate-200/90",
})

type SubtitleProps = ComponentProps<"h1"> & VariantProps<typeof subtitleStyles> & {
  children: ReactNode;
}

export default function Subtitle({ children, className, ...rest }: SubtitleProps) {
  return (
    <h2 className={subtitleStyles({ className })} {...rest}>{children}</h2>
  )
}