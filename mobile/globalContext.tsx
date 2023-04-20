import { createContext, useContext, useState } from "react";

interface GlobalProviderProps {
  children: React.ReactNode;
}

interface CurrentLoggedUserData {
  isUserLogged: boolean;
  id: string;
  email: string;
  name: string;
}

interface CurrentLoggedUserDataType extends CurrentLoggedUserData {
  setIsUserLogged: (value: boolean) => void;
  setId: (value: string) => void;
  setEmail: (value: string) => void;
  setName: (value: string) => void;
}

const initialState: CurrentLoggedUserData = {
  isUserLogged: false,
  id: "",
  email: "",
  name: "",
};

const GlobalLoggedUserContext = createContext<
  CurrentLoggedUserDataType | undefined
>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalLoggedUserContext);
  if (!context) {
    throw new Error("useGlobalContext must be used inside a GlobalProvider");
  }
  return context;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isUserLogged, setIsUserLogged] = useState(initialState.isUserLogged);
  const [id, setId] = useState(initialState.id);
  const [name, setName] = useState(initialState.name);
  const [email, setEmail] = useState(initialState.email);

  return (
    <GlobalLoggedUserContext.Provider
      value={{
        isUserLogged,
        id,
        name,
        email,
        setIsUserLogged,
        setId,
        setName,
        setEmail,
      }}
    >
      {children}
    </GlobalLoggedUserContext.Provider>
  );
};
