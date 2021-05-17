import React from "react";

export interface SplitScreenContextProps {
    isLayoutRightSideVisible: boolean;
    setLayoutAsDefault: () => void;
    setLayoutAsHideRightSide: () => void;
}

export const SplitScreenContext = React.createContext<SplitScreenContextProps>({
    isLayoutRightSideVisible: true,
    setLayoutAsDefault: () => { },
    setLayoutAsHideRightSide: () => { },
});

export const SplitScreenContextProvider: React.FC<SplitScreenContextProps> = ({
    isLayoutRightSideVisible,
    setLayoutAsDefault,
    setLayoutAsHideRightSide,
    children }) => {

    return (
        <SplitScreenContext.Provider value={{
            isLayoutRightSideVisible,
            setLayoutAsDefault,
            setLayoutAsHideRightSide,
        }}>
            {children}
        </SplitScreenContext.Provider>
    );
}
