
import cn from "classnames";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react"

import styles from "./button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
  "outlined" |
  "text" |
  "contained";

  color?:
  "success" |
  "error" |
  "secondary" |
  "dark" |
  "light";

  className?: string;
  size?: "s" | "m" | "l";
  block?: boolean;
  loading?: boolean;

}

const stylesSize = {
  s: styles["button-size-s"],
  m: styles["button-size-m"],
  l: styles["buttom-size-m"]
}

const stylesVariant = {
  contained: styles["button-variant-contained"],
  outlined: styles["button-variant-outlined"],
  text: styles["button-variant-text"],
}
const stylesColor = {
  success: styles["button-bg-success"],
  error: styles["button-bg-error"],
  secondary: styles["button-bg-secondary"],
  dark: styles["button-bg-dark"],
  light: styles["button-bg-light"],

}

export const Button = ({
  children,
  variant = "contained",
  size = "m",
  block = false,
  className,
  loading = false,
  color = "dark",
  ...restProps
}
) => {


  return (
    <button className={cn(
      className,
      styles.button,
      stylesColor[color],
      stylesSize[size],
      stylesVariant[variant]
    )}
      {...restProps}
    >
      {children}
    </button>
  )
}