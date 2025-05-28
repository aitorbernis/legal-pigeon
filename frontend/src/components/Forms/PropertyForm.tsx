import React, { useState } from "react";
import { CreateProperty } from "../../types/Properties";

interface PropertyFormProps {
  onCreate: (input: CreateProperty) => void;
}

export const PropertyForm: React.FC<PropertyFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !address.trim() || isNaN(Number(price))) return;
    onCreate({
      title: title.trim(),
      address: address.trim(),
      price: Number(price),
    });
    setTitle("");
    setAddress("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Dirección:</label>
        <br />
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Precio (€):</label>
        <br />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Crear propiedad</button>
    </form>
  );
};
