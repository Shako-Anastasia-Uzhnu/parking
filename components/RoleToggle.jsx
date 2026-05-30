"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RoleToggle({ userId, currentRole, currentUserId }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (userId === currentUserId) {
    return <span className="text-xs font-medium text-slate-400 italic">(Ви)</span>;
  }

  const newRole = currentRole === "admin" ? "user" : "admin";

  const handleToggle = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.error || "Не вдалося змінити роль користувача");
        return;
      }

      router.refresh();
    } catch (error) {
      alert("Помилка з'єднання");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors disabled:opacity-50 cursor-pointer inline-flex items-center gap-1"
    >
      {loading ? (
        <span className="animate-pulse">...</span>
      ) : (
        <>
          Зробити {newRole === "admin" ? "🛠️ admin" : "🚗 user"}
        </>
      )}
    </button>
  );
}