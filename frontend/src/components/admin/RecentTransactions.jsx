const transactions = [
  {
    id: "TXN001",
    customer: "Rahul Kumar",
    amount: "₹2,499",
    status: "Paid",
    time: "10 min ago",
  },
  {
    id: "TXN002",
    customer: "Anjali Singh",
    amount: "₹799",
    status: "Pending",
    time: "25 min ago",
  },
  {
    id: "TXN003",
    customer: "Amit Sharma",
    amount: "₹5,299",
    status: "Paid",
    time: "1 hour ago",
  },
  {
    id: "TXN004",
    customer: "Priya Verma",
    amount: "₹1,499",
    status: "Paid",
    time: "3 hours ago",
  },
];

function RecentTransactions() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Transactions
      </h2>

      <div className="space-y-5">

        {transactions.map((transaction) => (

          <div
            key={transaction.id}
            className="flex justify-between items-center border-b pb-4"
          >

            <div>

              <h3 className="font-semibold">
                {transaction.customer}
              </h3>

              <p className="text-sm text-gray-500">
                {transaction.id}
              </p>

            </div>

            <div className="text-right">

              <p className="font-bold">
                {transaction.amount}
              </p>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  transaction.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {transaction.status}
              </span>

              <p className="text-xs text-gray-500 mt-1">
                {transaction.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentTransactions;