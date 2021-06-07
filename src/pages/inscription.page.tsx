import { useHistory } from "react-router";
import Inscrpiton from "../modules/Autentication/inscription";
import { store } from "../store";
import { MainLayout } from "../ui/Layout";
export default function InscriptionPage() {
  const state = store.getState();
  const history = useHistory();
  if (state.isLoggedIn) {
    history.push("/");
    return null;
  }
  return <MainLayout><Inscrpiton /></MainLayout>;
}
