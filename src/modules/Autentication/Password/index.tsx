import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { login, register } from "../../../api";
import { store } from "../../../store";
import { IUser } from "../../../types";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import MainForm from "../main-form";
import { ActionsWrapper } from "../main-form/styles";
import { BiArrowBack } from "react-icons/bi";
import { EmailWrapper } from "./styles";

export default function Password() {

  
  const location = useLocation();
  const history = useHistory()
  const [password, setPassword] = useState("");
  const { state } = location;
  const handleChange = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>) => {
    setPassword(value);
  };
  const Back = () =>  <EmailWrapper onClick={handleback}><BiArrowBack />  {(state as any).email}</EmailWrapper>
  ;

  const handleback = () => {
    history.push('/connexion');
  }
  const handleConnect = () => {
    if ((state as any).firstName || (state as any).lastName) {
      const registered = register({ ...(state as IUser), password });
      if (registered.status) {
        alert("You're being registered successfully !!!");
        store.dispatch({ type: "login", user: registered.data });
        history.push('/');
      } else {
        alert("User already registered with this email, try another one !!!");
      }
      
    } else {
      const loggedIn = login({ email: (state as any).email, password });
      if (loggedIn.status) {
        alert("You're being signed in successfully !!!");
        store.dispatch({ type: "login", user: loggedIn.user });
        history.push('/');
      } else {
        alert("Wrong Pasword !!!");
      }
    }
  };


  return (
    <MainForm title="Entrez le mot de passe" back={<Back />}>
      <Input
        placeholder="Mot de passe"
        onChange={handleChange}
        type="password"
        value={password}
      />
      <ActionsWrapper>
        <Button onClick={handleConnect}>Se Connecter</Button>
      </ActionsWrapper>
    </MainForm>
  );
}
