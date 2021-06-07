
interface IProps {
    type: "video" | "image";
    src: string
}


export default function Media({type, src, ...rest}: IProps) {
    return type === "image" ? <img src={src} {...rest} />: <iframe src={src} {...rest}/>;
}