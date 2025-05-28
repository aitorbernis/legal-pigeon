import { useState, useEffect, useCallback } from "react";
import { Property, CreateProperty } from "../types/Properties";

export const useProperties = () => {
  const apiBase = import.meta.env.VITE_API_BASE;
  const [properties, setProperties] = useState<Property[]>([]);

  const getProperties = useCallback(async () => {
    const res = await fetch(`${apiBase}/api/properties`);
    const data: Property[] = await res.json();
    setProperties(data);
  }, [apiBase]);

  const createProperty = useCallback(
    async (input: CreateProperty) => {
      const res = await fetch(`${apiBase}/api/properties`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (res.ok) getProperties();
    },
    [apiBase, getProperties]
  );

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  return { properties, createProperty };
};
