import SettingsCard from "./SettingsCard";

function DeleteAccount() {
  return (
    <SettingsCard
      title="Danger Zone"
      description="This action cannot be undone."
    >
      <button
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
      >
        Delete Account
      </button>
    </SettingsCard>
  );
}

export default DeleteAccount;