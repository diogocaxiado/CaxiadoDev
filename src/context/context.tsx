'use client'

import { Data } from "@/types/data";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IContextProps {
  menu: boolean
  setMenu: Dispatch<SetStateAction<boolean>>
  toggleMenu (): void,
  openMenu: boolean,
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  data: Data | null,
  setData: Dispatch<SetStateAction<Data | null>>
}

export const context = createContext({} as IContextProps);

function Context({ children }: { children: ReactNode }) {
    const [menu, setMenu] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [data, setData] = useState<Data | null>(null);

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
        setOpenMenu,
        data,
        setData,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default Context;