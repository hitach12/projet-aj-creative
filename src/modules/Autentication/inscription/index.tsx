import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import MainForm from "../main-form";
import { ActionsWrapper } from "../main-form/styles";

export default function Inscrpiton() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = ({
    currentTarget: { name, value },
  }: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const history = useHistory();
  const handleClick = () => history.push({pathname: "/password", state: {...state}});
  return (
    <MainForm
      title="Inscription"
      description="Nous avons besoin de quelques informations supplémentaires pour configuer votre compte."
    >
      <Input
        placeholder="Prénom"
        name="firstName"
        onChange={handleChange}
        type="text"
        value={state.firstName}
      />
      <Input
        placeholder="Nom"
        name="lastName"
        onChange={handleChange}
        type="text"
        value={state.lastName}
      />
      <Input
        placeholder="E-mail"
        name="email"
        onChange={handleChange}
        type="text"
        value={state.email}
      />
      <ActionsWrapper>
        <Button onClick={handleClick}>Suivant</Button>
      </ActionsWrapper>
    </MainForm>
  );
}
