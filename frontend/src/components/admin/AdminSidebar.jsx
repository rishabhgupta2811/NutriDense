import {
  FiGrid,
  FiBox,
  FiShoppingBag,
  FiUsers,
  FiStar,
  FiTag,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";


const menuItems = [
  {
  name: "Analytics",
  path: "/admin/analytics",
  icon: <FiBarChart2 />,
},
  {
  name: "Coupons",
  path: "/admin/coupons",
  icon: <FiTag />,
},
  {
  name: "Customers",
  path: "/admin/customers",
  icon: <FiUsers />,
},
  {
    title: "Dashboard",
    path: "/admin",
    icon: <FiGrid />,
  },
  {
    title: "Products",
    path: "/admin/products",
    icon: <FiBox />,
  },
  {
    title: "Orders",
    path: "/admin/orders",
    icon: <FiShoppingBag />,
  },
  {
    title: "Customers",
    path: "/admin/customers",
    icon: <FiUsers />,
  },
  {
    title: "Reviews",
    path: "/admin/reviews",
    icon: <FiStar />,
  },
  {
    title: "Coupons",
    path: "/admin/coupons",
    icon: <FiTag />,
  },
  {
    title: "Analytics",
    path: "/admin/analytics",
    icon: <FiBarChart2 />,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: <FiSettings />,
  },
];

function AdminSidebar() {
  return (
    <aside className="bg-slate-900 text-white rounded-3xl p-6 min-h-screen">

      <div className="mb-10">

        <h1 className="text-3xl font-bold text-green-400">
          NutriDense
        </h1>

        <p className="text-gray-400 mt-1 tracking-widest text-sm">
          ADMIN PANEL
        </p>

      </div>

      <nav className="space-y-3">

        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-green-600 text-white"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span>
              {item.title}
            </span>

          </NavLink>
        ))}

      </nav>

    </aside>
  );
}

export default AdminSidebar;