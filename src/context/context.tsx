'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

import api from "@/api/axios";
import { AxiosResponse } from "axios";

import { Data } from "@/types/data";

interface IContextProps {
  menu: boolean
  setMenu: Dispatch<SetStateAction<boolean>>
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  data: Data | null,
  setData: Dispatch<SetStateAction<Data | null>>
}

export const context = createContext({} as IContextProps);

function Context({ children }: { children: ReactNode }) {
    const [menu, setMenu] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<Data | null>(null);

    const fetchData = async () => {
      try {
        const response: AxiosResponse<Data[]> = await api.get('/');
        setData(response.data[0]);
        
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    useEffect(() => {
      fetchData();
    }, [])

  return (
    <context.Provider value={
      {
        menu,
        setMenu,
        isLoading,
        setIsLoading,
        data,
        setData,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default Context;