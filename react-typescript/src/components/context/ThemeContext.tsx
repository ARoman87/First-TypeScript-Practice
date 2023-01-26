import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({
    children,
}: ThemeContextProviderProps) => {
    return <ThemeContextProvider>{children}</ThemeContextProvider>
}