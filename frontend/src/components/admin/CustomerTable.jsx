import { useState } from "react";
import { FiEye, FiSlash, FiCheckCircle } from "react-icons/fi";
import CustomerStatusBadge from "./CustomerStatusBadge";
import { Link } from "react-router-dom";

const initialCustomers = [
    {
        id: "CUS1001",
        name: "Rahul Kumar",
        email: "rahul@gmail.com",
        phone: "+91 9876543210",
        orders: 12,
        spent: 12450,
        status: "Active",
    },
    {
        id: "CUS1002",
        name: "Anjali Singh",
        email: "anjali@gmail.com",
        phone: "+91 9876501234",
        orders: 5,
        spent: 5899,
        status: "Blocked",
    },
    {
        id: "CUS1003",
        name: "Amit Sharma",
        email: "amit@gmail.com",
        phone: "+91 9876511111",
        orders: 20,
        spent: 24500,
        status: "Active",
    },
    {
        id: "CUS1004",
        name: "Priya Verma",
        email: "priya@gmail.com",
        phone: "+91 9876522222",
        orders: 8,
        spent: 8699,
        status: "Active",
    },
];

function CustomerTable({ search }) {
    const [customers, setCustomers] = useState(initialCustomers);

    const toggleStatus = (id) => {
        setCustomers((prev) =>
            prev.map((customer) =>
                customer.id === id
                    ? {
                        ...customer,
                        status:
                            customer.status === "Active"
                                ? "Blocked"
                                : "Active",
                    }
                    : customer
            )
        );
    };

    const filteredCustomers = customers.filter(
        (customer) =>
            customer.name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            customer.email
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (
        <div className="overflow-x-auto rounded-2xl">
            <table className="w-full">

                <thead className="bg-gray-100">
                    <tr className="text-left text-gray-600">
                        <th className="p-4">Customer</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Orders</th>
                        <th>Total Spent</th>
                        <th>Status</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredCustomers.map((customer) => (
                        <tr
                            key={customer.id}
                            className="border-b hover:bg-gray-50"
                        >
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                                        {customer.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">
                                            {customer.name}
                                        </h4>

                                        <p className="text-xs text-gray-500">
                                            {customer.id}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <td>{customer.email}</td>

                            <td>{customer.phone}</td>

                            <td>{customer.orders}</td>

                            <td>₹{customer.spent}</td>

                            <td>
                                <CustomerStatusBadge
                                    status={customer.status}
                                />
                            </td>

                            <td>
                                <div className="flex justify-center gap-4">

                                    <Link
                                        to={`/admin/customers/${customer.id}`}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <FiEye size={18} />
                                    </Link>

                                    <button
                                        onClick={() =>
                                            toggleStatus(customer.id)
                                        }
                                        className={
                                            customer.status === "Active"
                                                ? "text-red-600 hover:text-red-800"
                                                : "text-green-600 hover:text-green-800"
                                        }
                                        title={
                                            customer.status === "Active"
                                                ? "Block Customer"
                                                : "Unblock Customer"
                                        }
                                    >
                                        {customer.status === "Active" ? (
                                            <FiSlash size={18} />
                                        ) : (
                                            <FiCheckCircle size={18} />
                                        )}
                                    </button>

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

            {filteredCustomers.length === 0 && (
                <div className="text-center py-10 text-gray-500">
                    No customers found.
                </div>
            )}
        </div>
    );
}

export default CustomerTable;