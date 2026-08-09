import { createContext, useState } from "react";

export const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      fullName: "John Doe",
      phone: "9876543210",
      alternatePhone: "",
      house: "221B",
      area: "Baker Street",
      landmark: "Near City Mall",
      city: "Patna",
      state: "Bihar",
      pincode: "800001",
      type: "Home",
      isDefault: true,
    },
  ]);

  const addAddress = (address) => {
    const newAddress = {
      ...address,
      id: Date.now(),
    };

    if (newAddress.isDefault) {
      setAddresses((prev) =>
        prev.map((item) => ({ ...item, isDefault: false })).concat(newAddress)
      );
    } else {
      setAddresses((prev) => [...prev, newAddress]);
    }
  };

  const deleteAddress = (id) => {
    setAddresses((prev) => prev.filter((item) => item.id !== id));
  };

  const updateAddress = (updatedAddress) => {
    setAddresses((prev) =>
      prev.map((item) =>
        item.id === updatedAddress.id ? updatedAddress : item
      )
    );
  };

  const setDefaultAddress = (id) => {
    setAddresses((prev) =>
      prev.map((item) => ({
        ...item,
        isDefault: item.id === id,
      }))
    );
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        addAddress,
        deleteAddress,
        updateAddress,
        setDefaultAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}