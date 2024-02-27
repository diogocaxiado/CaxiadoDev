'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IContextProps {
  menu: boolean
  setMenu: Dispatch<SetStateAction<boolean>>
  toggleMenu (): void
}

export const context = createContext({} as IContextProps);

function Context({ children }: { children: ReactNode }) {
    const [menu, setMenu] = useState<boolean>(false);

    const toggleMenu = (): void => {
    setMenu(!menu);
  }

  return (
    <context.Provider value={
      {
        menu,
        setMenu,
        toggleMenu
      }}
    >
      {children}
    </context.Provider>
  )
}

export default Context;