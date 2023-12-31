import { ComponentProps, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants";

const textStyles = tv({
  base: "text-slate-500 tracking-wide text-sm dark:text-slate-300",
})

type textProps = ComponentProps<"h1"> & VariantProps<typeof textStyles> & {
  children: ReactNode;
}

const Text = ({ children, className, ...rest }: textProps) => {
  return (
    <p className={textStyles({ className })} {...rest}>{children}</p>
  )
}

export default Text