import React from "react";
import LoginForm from "../components/forms/LoginForm";

export default function AdminPage() {
  return (
    <main className="flex py-20 flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
