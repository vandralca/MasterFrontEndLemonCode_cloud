import React from "react";
import { PictureInfoVm } from "models/vm";

export interface AppContextProps {
    cartElements: PictureInfoVm[];
    setCartElements: (elements: PictureInfoVm[]) => void;
}

export const AppContext = React.createContext<AppContextProps>({
    cartElements: [],
    setCartElements: (_elements: PictureInfoVm[]) => { }
});

export const AppContextProvider: React.FC<AppContextProps> = ({
    cartElements,
    setCartElements,
    children }) => {

    return (
        <AppContext.Provider value={{
            cartElements,
            setCartElements,
        }}>
            {children}
        </AppContext.Provider>
    );
}
