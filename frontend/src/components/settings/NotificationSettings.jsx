import { useState } from "react";
import SettingsCard from "./SettingsCard";

function NotificationSettings() {
  const [settings, setSettings] = useState({
    email: true,
    offers: true,
    sms: false,
  });

  const handleToggle = (name) => {
    setSettings((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <SettingsCard
      title="Notifications"
      description="Choose how you'd like to receive updates."
    >
      <div className="space-y-4">

        {[
          ["email", "Email Notifications"],
          ["offers", "Special Offers"],
          ["sms", "SMS Notifications"],
        ].map(([key, label]) => (

          <label
            key={key}
            className="flex justify-between items-center"
          >
            <span>{label}</span>

            <input
              type="checkbox"
              checked={settings[key]}
              onChange={() => handleToggle(key)}
            />
          </label>

        ))}

      </div>
    </SettingsCard>
  );
}

export default NotificationSettings;