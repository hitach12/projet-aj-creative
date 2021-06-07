import { FormUnputsWrapper, LogoWrapper, MainFormWrapper } from "./styles";

interface IProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  back?: React.ReactNode;
}

export default function MainForm(props: IProps) {
  return (
    <MainFormWrapper>
      <LogoWrapper>
        <img src="logoAjiCreative.png" alt="Aji Creative" />
        {props.back}
        <h1>{props.title}</h1>
        {props.description && <p>{props.description}</p>}
      </LogoWrapper>
      <FormUnputsWrapper>{props.children}</FormUnputsWrapper>
    </MainFormWrapper>
  );
}
