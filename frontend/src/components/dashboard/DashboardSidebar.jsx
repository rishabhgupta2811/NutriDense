import {
    FiUser,
    FiPackage,
    FiHeart,
    FiMapPin,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const menu = [
    {
        title: "My Profile",
        icon: <FiUser />,
        path: "/profile",
    },
    {
        title: "My Orders",
        icon: <FiPackage />,
        path: "/orders",
    },
    {
        title: "Wishlist",
        icon: <FiHeart />,
        path: "/wishlist",
    },
    {
        title: "Addresses",
        icon: <FiMapPin />,
        path: "/addresses",
    },
    {
        title: "Settings",
        icon: <FiSettings />,
        path: "/settings",
    },
];

function DashboardSidebar() {
    return (
        <aside className="bg-white rounded-3xl shadow-lg p-6">

            <div className="text-center mb-8">

                <img
                    src="https://ui-avatars.com/api/?name=User"
                    alt="profile"
                    className="w-24 h-24 rounded-full mx-auto"
                />

                <h2 className="font-bold text-xl mt-4">
                    Welcome 👋
                </h2>

            </div>

            <nav className="space-y-3">

                {menu.map((item) => (
                    <NavLink
                        key={item.title}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-4 rounded-xl transition ${isActive
                                ? "bg-green-700 text-white"
                                : "hover:bg-green-50"
                            }`
                        }
                    >
                        {item.icon}
                        {item.title}
                    </NavLink>
                ))}

            </nav>

            <button
                className="mt-10 w-full flex items-center justify-center gap-3 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
            >
                <FiLogOut />
                Logout
            </button>

        </aside>
    );
}

export default DashboardSidebar;