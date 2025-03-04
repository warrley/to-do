import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { useAuth } from "../firebase/AuthContext";

export const FormLogin = () => {
  const { user, loginWithGoogle, registerWithEmail, loginWithEmail, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (email && password) {
      await registerWithEmail(email, password);
    }
  };

  const handleLogin = async () => {
    if (email && password) {
      await loginWithEmail(email, password);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-lg">
      {user ? (
        <>
          <p className="text-lg font-medium">Olá, {user.email} 👋</p>
          <Button label="Sair" onClick={logout} />
        </>
      ) : (
        <>
          <Input text={email} setText={setEmail} />
          <Input text={password} setText={setPassword} />
          <Button label="Entrar com Email" onClick={handleLogin} />
          <Button label="Registrar" onClick={handleRegister} />
          <Button label="Entrar com Google" onClick={loginWithGoogle} />
        </>
      )}
    </div>
  );
};
