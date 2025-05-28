import { Request, Response, NextFunction } from "express";
import Property from "../models/property";
import { PropertySchema } from "../schemas/property";

export const getProperties = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    next(err);
  }
};

export const createProperty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body: propertyData } = req;

  try {
    const data = PropertySchema.parse(propertyData);
    const property = await Property.create(data);
    res.status(201).json(property);
  } catch (err) {
    next(err);
  }
};
