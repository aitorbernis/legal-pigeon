import React from "react";
import { PropertyForm } from "./components/Forms/PropertyForm";
import { PropertiesList } from "./components/PropertiesList";
import { useProperties } from "./hooks/useProperties";

export default function App() {
  const { properties, createProperty } = useProperties();

  return (
    <div>
      <h1>Gestión de Propiedades</h1>
      <PropertyForm onCreate={createProperty} />
      <PropertiesList properties={properties} />
    </div>
  );
}
