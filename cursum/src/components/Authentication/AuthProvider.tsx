import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { encode } from "js-base64";
import { User, Password, Email, Token, RegistrationInfo } from "helpers/types";

const PRZEMEK_LOGIN = "http://10.130.51.97:8090/auth/login";
const BACKEND_ORIGIN = "http://207.154.246.164:8090";
const BACKEND_LOGIN = `${BACKEND_ORIGIN}/auth/login`;
const BACKEND_REGISTER = `${BACKEND_ORIGIN}/auth/register`;

type TokenResponse = { token: Token; userId: string };

interface authInfo {
  user: User | null;
  unsetUser: () => void;
  setLeague: (leagueId: string) => void;
  setUser: Dispatch<SetStateAction<User | null>>;
  loginAndSetUser: (email: Email, password: Password) => Promise<User>;
  registerAndSetUser: (registartionInfo: RegistrationInfo) => Promise<User>;
}

export const AuthContext = createContext<authInfo>({} as authInfo);

interface AuthProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | null>(null);

  const registerAndSetUser = async ({
    email,
    firstName,
    lastName,
    password,
  }: RegistrationInfo) => {
    const user: User = {
      email: email,
      score: 50,
      leagueId: null,
      id: "0",
    };
    const userJson = JSON.stringify(user);
    localStorage.setItem("user", userJson);
    setUser(user);
    return Promise.resolve(user);
    // return await fetch(BACKEND_REGISTER, {
    //   method: "POST",
    //   referrerPolicy: "origin",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     firstName,
    //     lastName,
    //     password,
    //   }),
    // })
    //   .then(async function (res) {
    //     console.log(res);
    //     // console.log(res.body);
    //     if (res.status == 200) return await res.json();
    //   })
    //   .then(function (data: { token: Token; userId: string }) {
    //     console.log(data);
    //     const user: User = {
    //       email: email,
    //       score: 0, // NEED THIS
    //       leagueId: null, // NEED THIS
    //       id: data.userId,
    //     };
    //     const userJson = JSON.stringify(user);
    //     localStorage.setItem("user", userJson);
    //     setUser(user);
    //     return data;
    //   });
  };

  const loginAndSetUser = async (email: Email, password: Password) => {
    const user: User = {
      email: email,
      score: 50,
      leagueId: null,
      id: "0",
    };
    const userJson = JSON.stringify(user);
    localStorage.setItem("user", userJson);
    setUser(user);
    return Promise.resolve(user);
    // return await fetch(BACKEND_LOGIN, {
    //   method: "POST",
    //   referrerPolicy: "origin",
    //   headers: {
    //     Authorization: "Basic " + encode(email + ":" + password),
    //   },
    // })
    //   .then(async function (res) {
    //     console.log(res);
    //     // console.log(res.body);
    //     if (res.status == 200) return await res.json();
    //   })
    //   .then(function (data: TokenResponse) {
    //     console.log(data);
    //     const user: User = {
    //       email: email,
    //       score: 0, // NEED THIS
    //       leagueId: null, // NEED THIS
    //       id: data.userId,
    //     };
    //     const userJson = JSON.stringify(user);
    //     localStorage.setItem("user", userJson);
    //     setUser(user);
    //     return data;
    //   });
  };

  const unsetUser = () => {
    localStorage.setItem("user", "null");
    setUser(null);
  };

  const setLeague = (leagueId: string) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ ...user!, leagueId: leagueId })
    );
    setUser({ ...user!, leagueId: leagueId });
  };

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      const user = JSON.parse(userJson);
      if (user) setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginAndSetUser,
        registerAndSetUser,
        unsetUser,
        setLeague,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
