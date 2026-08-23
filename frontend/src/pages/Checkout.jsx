// Checkout.jsx
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CartContext } from "../context/CartContext";
import { FiMapPin, FiShield, FiTruck } from "react-icons/fi";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [coupon, setCoupon] = useState("");

  const subtotal = cartItems.reduce((s,i)=>s+i.price*i.quantity,0);
  const delivery = 0;
  const discount = subtotal>3000?200:0;
  const total = subtotal-discount+delivery;
  const handlePlaceOrder = () => {
  // Order has been successfully placed
  clearCart();

  navigate("/order-success");
};

  return (
    <>
      <Navbar />
      <section className="bg-[#F8FAF5] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-10">
            <p className="uppercase tracking-[4px] text-green-700 font-semibold">Secure Checkout</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">Checkout</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Customer Information</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <input className="border rounded-xl p-3" placeholder="Full Name"/>
                  <input className="border rounded-xl p-3" placeholder="Email Address"/>
                  <input className="border rounded-xl p-3" placeholder="Phone Number"/>
                  <input className="border rounded-xl p-3" placeholder="Alternate Phone Number (Optional)"/>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Shipping Address</h2>
                  <button className="flex items-center gap-2 border border-green-700 text-green-700 px-4 py-2 rounded-xl"><FiMapPin/>Use Current Location</button>
                </div>
                <div className="space-y-5">
                  <input className="w-full border rounded-xl p-3" placeholder="Flat / House No. / Building Name"/>
                  <input className="w-full border rounded-xl p-3" placeholder="Area / Sector / Locality"/>
                  <div className="grid md:grid-cols-3 gap-5">
                    <input className="border rounded-xl p-3" placeholder="PIN Code"/>
                    <input className="border rounded-xl p-3" placeholder="City"/>
                    <input className="border rounded-xl p-3" placeholder="State"/>
                  </div>
                  <div className="flex gap-6">
                    <label><input type="radio" name="addr" defaultChecked/> Home</label>
                    <label><input type="radio" name="addr"/> Work</label>
                    <label><input type="radio" name="addr"/> Other</label>
                  </div>
                  <label><input type="checkbox"/> Save this address for future orders</label>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                {["cod","upi","card"].map(m=>(
                  <label key={m} className="flex gap-3 border rounded-xl p-4 mb-3">
                    <input type="radio" checked={paymentMethod===m} onChange={()=>setPaymentMethod(m)}/>
                    {m==="cod"?"Cash on Delivery":m==="upi"?"UPI Payment":"Credit / Debit Card"}
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 h-fit sticky top-28">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              {cartItems.map(item=>(
                <div key={item.id} className="flex items-center gap-3 mb-4">
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-contain bg-green-50 rounded-lg p-2"/>
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span>₹{item.price*item.quantity}</span>
                </div>
              ))}
              <div className="flex gap-2 my-5">
                <input value={coupon} onChange={e=>setCoupon(e.target.value)} placeholder="Coupon Code" className="flex-1 border rounded-xl p-3"/>
                <button className="bg-green-700 text-white px-5 rounded-xl">Apply</button>
              </div>
              <hr/>
              <div className="flex justify-between mt-4"><span>MRP</span><span>₹{subtotal}</span></div>
              <div className="flex justify-between"><span>Discount</span><span>-₹{discount}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span className="text-green-700">FREE</span></div>
              <div className="flex justify-between"><span>GST</span><span>Included</span></div>
              <hr className="my-4"/>
              <div className="flex justify-between text-2xl font-bold"><span>Total</span><span className="text-green-700">₹{total}</span></div>
              <div className="bg-green-50 rounded-xl p-4 flex gap-3 mt-5"><FiTruck/><div><p className="font-semibold">Estimated Delivery</p><p className="text-sm">3–5 business days</p></div></div>
              <div className="bg-blue-50 rounded-xl p-4 flex gap-3 mt-4"><FiShield/><div><p className="font-semibold">100% Secure Checkout</p><p className="text-sm">Protected payment</p></div></div>
              
              <button onClick={handlePlaceOrder} className="w-full bg-green-700 text-white py-4 rounded-xl mt-6">Place Order</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Checkout;
