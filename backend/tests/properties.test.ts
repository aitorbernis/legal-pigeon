import mongoose from "mongoose";
import request from "supertest";
import app from "../src/app";
import Property from "../src/models/property";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI!);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Properties test", () => {
  beforeEach(async () => {
    await Property.deleteMany({});
  });

  it("Create and get properties", async () => {
    const newProperty = {
      title: "Demo property",
      address: "Demo road",
      price: 100000,
    };

    await request(app).post("/api/properties").send(newProperty).expect(201);
    const res = await request(app).get("/api/properties").expect(200);

    expect(res.body).toHaveLength(1);
    expect(res.body[0].title).toBe(newProperty.title);
  });
});
