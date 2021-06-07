import { HTMLAttributes } from "react";
import { ButtonWrapper } from "./styles";
export interface IProps extends HTMLAttributes<HTMLButtonElement> {
    color?: "primary" | "divider" | "none" | string;
    variant?: "outlined" | "filled" | "text";
    rouned?: boolean;
}
export default function Button({color = "primary", variant = "filled", rouned = false, ...props}: IProps) {
    const passedColor = color === "primary" ? "#0067b8" : (color === "divider" ? "#ccc8c8" : color);
    return <ButtonWrapper color={passedColor} variant={variant} rouned={rouned} {...props}/>
}