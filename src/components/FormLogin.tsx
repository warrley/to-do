import { useState } from "react";
import { Button } from "./Button";
import { useAuth } from "../firebase/AuthContext";
import { Input } from "./Input";

export const FormLogin = () => {
  const { user, loginWithGoogle, registerWithEmail, loginWithEmail, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await loginWithEmail(email, password);
      setShowModalLogin(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error("Login failed, trying to register...", error);
      try {
        await registerWithEmail(email, password);
        setShowModalLogin(false);
        setEmail('');
        setPassword('');
      } catch (registerError) {
        console.error("Registration failed:", registerError);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      setShowModalLogin(false);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <div className="flex flex-col w-full">
          <p className="text-lg font-medium">Olá, {user.email} 👋</p>
          <Button label="Sair" onClick={logout} />
        </div>
      ) : (
        <Button label="Login / Register" onClick={() => setShowModalLogin(!showModalLogin)} />
      )}
      
      {showModalLogin && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowModalLogin(false)}></div>

          <div className="flex flex-col items-center gap-3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-600 text-white w-[80%] lg:w-[40%] p-6 rounded-lg z-50">
            <p className="text-3xl font-bold">Signin</p>
            
            <form className="flex flex-col w-full gap-4" onSubmit={handleCheck}>
              <div className="flex flex-col w-full">
                <div className="flex flex-col">
                  <label>Enter an email</label>
                  <Input text={email} type="email" setText={setEmail} />
                </div>
                <div className="flex flex-col">
                  <label>Enter a password</label>
                  <Input text={password} type="password" setText={setPassword} />
                </div>
              </div>
              <Button label="Enter with email"/>
            </form>

            <div className="flex w-full gap-2 flex-col">
              <Button label="Enter with Google" onClick={handleGoogleLogin} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
