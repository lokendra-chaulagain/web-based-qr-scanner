import AdminLayout from "./components/layout/AdminLayout";
import UserLayout from "./components/layout/UserLayout";

export default function App() {
  const admin = false;

  if (admin) {
    return <AdminLayout />;
  } else {
    return <UserLayout />;
  }
}
