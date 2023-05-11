import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "../admin/Table";
import UserDetails from "../../pages/UserDetails";
import { Toaster } from "react-hot-toast";
import AdminHeader from "../admin/AdminHeader";
import Event from "../../pages/event/Event";
import General from "../../pages/general";
import AdminFooter from "../admin/AdminFooter";
import AdminLeftbar from "../admin/AdminLeftbar";

export default function AdminLayout() {
  return (
    <div className="flex flex-col fixed w-full">
      <AdminHeader />

      <div className="flex h-screen  justify-between border-e bg-white overflow-hidden">
        <AdminLeftbar />
        <div className="px-4 w-10/12 py-6 bg-accent-50">
          <Router>
            <Routes>
              <Route
                path="/"
                element={<General />}
              />
            </Routes>

            <Routes>
              <Route
                path="/dashboard/users"
                element={<Table />}
              />
            </Routes>

            <Routes>
              <Route
                path="/dashboard/user/user-details/:id"
                element={<UserDetails />}
              />
            </Routes>

            <Routes>
              <Route
                path="/dashboard/events"
                element={<Event />}
              />
            </Routes>

            <Toaster />
          </Router>
        </div>
      </div>
      <AdminFooter />
    </div>
  );
}
