import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

import ChangePassword from "../components/settings/ChangePassword";
import NotificationSettings from "../components/settings/NotificationSettings";
import Preferences from "../components/settings/Preferences";
import DeleteAccount from "../components/settings/DeleteAccount";

function Settings() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}

          <DashboardSidebar />

          {/* Main Content */}

          <div className="lg:col-span-3 space-y-8">

            <DashboardHeader />

            <ChangePassword />

            <NotificationSettings />

            <Preferences />

            <DeleteAccount />

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Settings;