import { HTMLAttributes } from "react";
import { InputWrapper } from "./styles";

export interface IProps extends HTMLAttributes<HTMLInputElement> {
    type: string;
    name?: string;
    value?: any;
}
export default function Input({type,name, ...rest}: IProps) {
    return <InputWrapper type={type} name={name} {...rest} />
}