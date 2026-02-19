import { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
    const [name, setName] = useState("Abhinash");

    return (
        <NavbarContext.Provider value={{ name, setName }}>
            {children}
        </NavbarContext.Provider>
    );
};

export default NavbarProvider;
