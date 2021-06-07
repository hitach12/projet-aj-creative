import styled from "@emotion/styled";
import { IProps } from ".";

export const ButtonWrapper = styled.button<IProps>`
  border: 0;
  outline: 0;
  background-color: ${props => (props.variant === "filled" || props.variant === "outlined") ? props.color : 'transparent'};
  padding: 8px;
  color: ${props => props.variant === "text" ? '#666' : "#fff" };
  font-style: normal;
  line-height: 24px;
  cursor: pointer;
  min-width: 100px;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  ${props => props.rouned ? 'border-radius: 20px;' : null}
`;
