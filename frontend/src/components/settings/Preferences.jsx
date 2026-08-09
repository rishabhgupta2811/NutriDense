import SettingsCard from "./SettingsCard";

function Preferences() {
  return (
    <SettingsCard
      title="Preferences"
      description="Customize your shopping experience."
    >
      <div className="space-y-5">

        <div>
          <label className="font-medium">Language</label>

          <select className="w-full mt-2 border rounded-xl p-3">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        <label className="flex items-center gap-3">
          <input type="checkbox" />
          Subscribe to Newsletter
        </label>

      </div>
    </SettingsCard>
  );
}

export default Preferences;