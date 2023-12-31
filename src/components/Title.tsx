import { ComponentProps, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants";

const titleStyles = tv({
  base: "font-semibold text-slate-700 text-base dark:text-slate-100",
})

type TitleProps = ComponentProps<"h1"> & VariantProps<typeof titleStyles> & {
  children: ReactNode;
}

const Title = ({ children, className, ...rest }: TitleProps) => {
  return (
    <h1 className={titleStyles({ className })} {...rest}>{children}</h1>
  )
}

export default Title