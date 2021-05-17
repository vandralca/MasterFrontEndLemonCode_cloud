import React from "react";
import { PictureInfoVm } from "models/vm";

export interface MainContextProps {
    animalFamily: string;
    setAnimalFamily: (animal: string) => void;
    galleryElements: PictureInfoVm[];
    cartElements: PictureInfoVm[];
    addItemToCartById: (imageId: string) => void;
    removeItemFromCartById: (imageId: string) => void;
    clearCart: () => void;
}

export const MainContext = React.createContext<MainContextProps>({
    animalFamily: "",
    setAnimalFamily: (_value) => { },
    galleryElements: [],
    cartElements: [],
    addItemToCartById: (_value) => { },
    removeItemFromCartById: (_value) => { },
    clearCart: () => { },
});

export const MainContextProvider: React.FC<MainContextProps> = ({
    animalFamily,
    setAnimalFamily,
    galleryElements,
    cartElements,
    addItemToCartById,
    removeItemFromCartById,
    clearCart,
    children }) => {

    return (
        <MainContext.Provider value={{
            animalFamily,
            setAnimalFamily,
            galleryElements,
            cartElements,
            addItemToCartById,
            removeItemFromCartById,
            clearCart,
        }}>
            {children}
        </MainContext.Provider>
    );
}
