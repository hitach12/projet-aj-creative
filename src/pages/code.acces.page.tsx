import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import CodeAccess from "../modules/Autentication/CodeAcces";
import { store } from "../store";
import { MainLayout } from "../ui/Layout";
export default function CodeAccesPage() {
  const [stateCopy, setStateCopy] = useState(store.getState())
  const history = useHistory();
  useEffect(() => {
    setStateCopy(store.getState());
  }, [store.getState()])
  if (stateCopy.isLoggedIn) {
    history.push("/");
    return null;
  }
  return <MainLayout><CodeAccess /></MainLayout>;
}
