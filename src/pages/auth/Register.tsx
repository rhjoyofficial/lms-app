import { useState } from "react";
import { register } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(form);
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Register</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            className="w-full border p-2"
            placeholder={key.replace("_", " ")}
            type={key.includes("password") ? "password" : "text"}
            value={(form as any)[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}

        <button className="w-full bg-black text-white py-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
