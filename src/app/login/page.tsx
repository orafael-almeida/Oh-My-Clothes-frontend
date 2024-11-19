"use client";

import {useWixClient} from "@/hooks/useWixClient";
import {LoginState} from "@wix/sdk";
import {usePathname, useRouter} from "next/navigation";
import {useState} from "react";
import Cookies from "js-cookie";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}

const LoginPage = () => {
  const wixClient = useWixClient();
  const router = useRouter();
  const isLoggedIn = wixClient.auth.loggedIn();

  if (isLoggedIn) {
    router.push("/");
  }

  const [mode, setMode] = useState(MODE.LOGIN);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const pathname = usePathname();

  const formTitle =
    mode === MODE.LOGIN
      ? "Fazer Login"
      : mode === MODE.REGISTER
      ? "Criar conta"
      : mode === MODE.RESET_PASSWORD
      ? "Resetar Senha"
      : "Verificação de Email";

  const buttonTitle =
    mode === MODE.LOGIN
      ? "Logar"
      : mode === MODE.REGISTER
      ? "Registrar"
      : mode === MODE.RESET_PASSWORD
      ? "Resetar"
      : "Verificar";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    let response;

    try {
      switch (mode) {
        case MODE.LOGIN:
          response = await wixClient.auth.login({
            email,
            password,
          });
          break;
        case MODE.REGISTER:
          response = await wixClient.auth.register({
            email,
            password,
            profile: {
              nickname: username,
            },
          });
          break;
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            pathname
          );
          setMessage(
            "E-mail de reset de senha enviado. Por favor, cheque seu e-mail."
          );
          break;
        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode,
          });
          break;
        default:
          break;
      }

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setMessage("Logado com sucesso! Você será redirecionado...");
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            response.data.sessionToken
          );
          console.log(tokens);
          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 2,
          });
          wixClient.auth.setTokens(tokens);
          router.push("/");
          break;
        case LoginState.FAILURE:
          if (response.errorCode === "invalidEmail" || "invalidPassword") {
            setError("E-mail ou senha inválidos");
          } else if (response.errorCode === "emailAlreadyExists") {
            setError("E-mail já cadastrado");
          } else if (response.errorCode === "resetPassword") {
            setError("E-mail de reset de senha enviado");
          } else {
            setError("Alguma coisa deu errado...");
          }
          break;
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);
          break;
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage("Sua conta precisa ser aprovada pelo administrador");
        default:
          break;
      }
    } catch (error) {
      console.error(error);
      setError("Alguma coisa deu errado...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Usuário</label>
            <input
              type="text"
              name="username"
              className="ring-2 ring-gray-300 rounded-md p-4"
              placeholder="Seu nome"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        ) : null}
        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              className="ring-2 ring-gray-300 rounded-md p-4"
              placeholder="seuemail@mail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">
              Código de Verificação
            </label>
            <input
              type="text"
              name="emailCode"
              className="ring-2 ring-gray-300 rounded-md p-4"
              placeholder="Código de Verificação"
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Senha</label>
            <input
              type="password"
              name="password"
              className="ring-2 ring-gray-300 rounded-md p-4"
              placeholder="Sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer "
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Esqueceu a senha?
          </div>
        )}
        <button
          className="bg-rosa text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Carregando..." : buttonTitle}
        </button>
        {error && <div className="text-red-600 ">{error}</div>}
        {mode === MODE.LOGIN && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.REGISTER)}
          >
            Não tem uma conta?
          </div>
        )}
        {mode === MODE.REGISTER && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Você tem uma conta?
          </div>
        )}
        {mode === MODE.RESET_PASSWORD && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Você tem uma conta?
          </div>
        )}
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
