import { useHistory } from "react-router";
import Connexion from "../modules/Autentication/connexion";
import { store } from "../store";
import { MainLayout } from "../ui/Layout";
export default function ConnexionPage() {
  const state = store.getState();
  const history = useHistory();
  if (state.isLoggedIn) {
    history.push("/");
    return null;
  }
  return <MainLayout><Connexion /></MainLayout>;
}
