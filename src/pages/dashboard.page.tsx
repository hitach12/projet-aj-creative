import { useHistory } from "react-router";
import FeedList from "../modules/Dashboard/feed-list";
import { store } from "../store";
import { DashboardLayout } from "../ui/Layout";
export default function DashboardPage() {
  const state = store.getState();
  console.log(state);

  const history = useHistory();
  if (!state.isLoggedIn) {
    history.push("/connexion");
    return null;
  }
  return (
    <DashboardLayout>
      <FeedList />
    </DashboardLayout>
  );
}
