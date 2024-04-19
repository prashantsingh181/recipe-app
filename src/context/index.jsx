import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {
    const [searchParams, setSearchParams] = useState("");
    <GlobalContext.Provider value={{ searchParams, setSearchParams }}>
        {children}
    </GlobalContext.Provider>
}