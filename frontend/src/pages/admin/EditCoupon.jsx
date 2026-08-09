import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import CouponForm from "../../components/admin/CouponForm";

function EditCoupon() {
  const navigate = useNavigate();
  const { id } = useParams();

  const coupon = {
    id,
    code: "WELCOME10",
    type: "Percentage",
    value: 10,
    minOrder: 500,
    usageLimit: 100,
    expiry: "2026-12-31",
    status: "Active",
  };

  const handleSubmit = (updatedCoupon) => {
    console.log(updatedCoupon);

    toast.success("Coupon updated successfully!");

    navigate("/admin/coupons");
  };

  return (
    <section className="bg-gray-100 min-h-screen p-8">
      <div className="grid lg:grid-cols-5 gap-8">

        <div className="lg:col-span-1">
          <AdminSidebar />
        </div>

        <div className="lg:col-span-4 space-y-6">

          <AdminHeader />

          <h2 className="text-3xl font-bold">
            Edit Coupon
          </h2>

          <CouponForm
            initialData={coupon}
            onSubmit={handleSubmit}
          />

        </div>

      </div>
    </section>
  );
}

export default EditCoupon;