import React from "react";
import { Property } from "../types/Properties";

interface PropertiesListProps {
  properties: Property[];
}

export const PropertiesList: React.FC<PropertiesListProps> = ({
  properties,
}) => (
  <ul>
    {properties.map((p) => (
      <li key={p.id}>
        <strong>{p.title}</strong> — {p.address} — €{p.price}
      </li>
    ))}
  </ul>
);
