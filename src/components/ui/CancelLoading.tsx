"use client"

import { useConfigsStore } from "@/store/configs";
import { useEffect } from "react";

export const CancelLoading = () => {
  const { setIsLoading } = useConfigsStore();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return null
}
