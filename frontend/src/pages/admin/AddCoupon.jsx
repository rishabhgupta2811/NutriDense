import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import CouponForm from "../../components/admin/CouponForm";

function AddCoupon() {
  const navigate = useNavigate();

  const handleSubmit = (coupon) => {
    console.log(coupon);

    toast.success("Coupon created successfully!");

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
            Add Coupon
          </h2>

          <CouponForm onSubmit={handleSubmit} />

        </div>

      </div>
    </section>
  );
}

export default AddCoupon;