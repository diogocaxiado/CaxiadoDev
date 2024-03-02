'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IContextProps {
  menu: boolean
  setMenu: Dispatch<SetStateAction<boolean>>
  toggleMenu (): void,
  openMenu: boolean,
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const context = createContext({} as IContextProps);

function Context({ children }: { children: ReactNode }) {
    const [menu, setMenu] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const toggleMenu = (): void => {
      if (!menu) {
        setOpenMenu(true)
        setMenu(true);
        return
      }
      setOpenMenu(false)

      setTimeout(() => {
        setMenu(false);
      }, 250)
    }

  return (
    <context.Provider value={
      {
        menu,
        setMenu,
        toggleMenu,
        openMenu,
        setOpenMenu
      }}
    >
      {children}
    </context.Provider>
  )
}

export default Context;