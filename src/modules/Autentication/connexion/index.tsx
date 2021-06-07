import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { userExists } from "../../../api";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import MainForm from "../main-form";
import { ActionsWrapper } from "../main-form/styles";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const handleChange = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>) => {
    setEmail(value);
  };
  const history = useHistory();
  const handleSuivant = () => {
    if (!userExists(email)) {
      alert("Please verify your email address Or register");
    } else history.push({ pathname: "/password", state: { email } });
  };
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };
  return (
    
    <MainForm title="Connexion">
      <Input placeholder="E-mail" onChange={handleChange} value={email} type="text" />
      <div>
        Vous n'avez pas encore de compte ?{" "}
        <Link to="/code-acces" style={linkStyle}>Créez-en un !</Link>{" "}
      </div>
      <ActionsWrapper>
        <Button onClick={handleSuivant}>Suivant</Button>
      </ActionsWrapper>
    </MainForm>
  );
}
