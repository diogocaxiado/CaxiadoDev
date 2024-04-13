'use client'

import { useContext } from "react";
import { context } from "../context/context";

function useDataContext() {
  return useContext(context);
}

export default useDataContext;