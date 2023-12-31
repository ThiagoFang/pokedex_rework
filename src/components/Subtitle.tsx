import { ComponentProps, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants";

const subtitleStyles = tv({
  base: "text-slate-600 tracking-wide text-sm dark:text-slate-200/90",
})

type subtitleProps = ComponentProps<"h1"> & VariantProps<typeof subtitleStyles> & {
  children: ReactNode;
}

const Subtitle = ({ children, className, ...rest }: subtitleProps) => {
  return (
    <h2 className={subtitleStyles({ className })} {...rest}>{children}</h2>
  )
}

export default Subtitle