import { ComponentProps, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants";

const metricStyles = tv({
  base: "font-semibold text-slate-700 text-2xl leading-8 dark:text-slate-100",
})

type MetricProps = ComponentProps<"h1"> & VariantProps<typeof metricStyles> & {
  children: ReactNode;
}

export default function Metric({ children, className, ...rest }: MetricProps) {
  return (
    <h1 className={metricStyles({ className })} {...rest}>{children}</h1>
  )
}
