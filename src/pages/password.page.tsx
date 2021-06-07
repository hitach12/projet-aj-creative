import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Password from "../modules/Autentication/Password";
import { store } from "../store";
import { MainLayout } from "../ui/Layout";
export default function PasswordPage() {
  const [stateCopy, setStateCopy] = useState(store.getState())
  useEffect(() => {
    setStateCopy(store.getState());
  }, [store.getState()])
  const history = useHistory();
  if (stateCopy.isLoggedIn) {
    history.push("/");
    return null;
  }
  return <MainLayout><Password /></MainLayout>;
}
