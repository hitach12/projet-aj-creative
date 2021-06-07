import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { verifyCodeAcces } from "../../../api";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import MainForm from "../main-form";
import { ActionsWrapper } from "../main-form/styles";


export default function CodeAccess() {
  const [codeAcces, setCodeAcces] = useState("");
    const handleChange = ({currentTarget: {value}}: React.FormEvent<HTMLInputElement>) => {
        setCodeAcces(value)
    }
const history = useHistory();
    const handleSuivant = () => {
      if (verifyCodeAcces(codeAcces)) {
        history.push('/inscription', { codeAcces })
      } else {
        alert("Wrong code access try another one")
      }
    }
  return (
    <MainForm title="Code accés">
      <Input value={codeAcces} placeholder="Code accés communiqué par votre admin" onChange={handleChange} type="text"/>
      <ActionsWrapper>
        <Button onClick={handleSuivant}>Suivant</Button>
      </ActionsWrapper>
    </MainForm>
  )
}