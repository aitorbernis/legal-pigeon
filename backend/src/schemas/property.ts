import { z } from "zod";

export const PropertySchema = z.object({
  title: z.string().min(1),
  address: z.string().min(1),
  price: z.number().gt(0),
  status: z.enum(["available", "reserved", "sold"]).default("available"),
});
