import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import toast from "react-hot-toast";

function Profile() {
  const [user, setUser] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    gender: "Male",
    dob: "2003-01-15",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Profile Updated Successfully!");
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-4 gap-8">

          <DashboardSidebar />

          <div className="lg:col-span-3 space-y-8">

            <DashboardHeader />

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <div className="flex flex-col md:flex-row items-center gap-8">

                <div className="text-center">

                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=16a34a&color=fff&size=200"
                    alt="Profile"
                    className="w-36 h-36 rounded-full object-cover border-4 border-green-600"
                  />

                  <button className="mt-4 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-xl">
                    Change Photo
                  </button>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex-1 grid md:grid-cols-2 gap-5"
                >

                  <div>
                    <label className="font-medium text-gray-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={user.fullName}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-gray-700">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-gray-700">
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-gray-700">
                      Gender
                    </label>

                    <select
                      name="gender"
                      value={user.gender}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-medium text-gray-700">
                      Date of Birth
                    </label>

                    <input
                      type="date"
                      name="dob"
                      value={user.dob}
                      onChange={handleChange}
                      className="mt-2 w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-600 outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-semibold transition"
                    >
                      Save Changes
                    </button>
                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Profile;