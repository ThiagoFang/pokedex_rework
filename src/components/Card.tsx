import { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

export const CardStyles = tv({
	base: "bg-white p-4 rounded-xl shadow-lg dark:bg-dark-container dark:shadow-slate-950/10 shadow-slate-200",
})

export type CardProps = ComponentProps<"div"> & VariantProps<typeof CardStyles> & {
	children: ReactNode;
}

const Card = ({ children, className, ...rest }: CardProps) => {
	return <div className={CardStyles({ className })} {...rest}>{children}</div>;
};

export default Card;
