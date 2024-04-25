const request = require("supertest");
const app = require("../src/app");
const properties = require("../src/properties.json");

describe("app", () => {
  it("should get a single property", async () => {
    await request(app)
      .get("/properties/1")
      .expect((res) => {
        expect(res.body).toEqual(properties[0]);
      })
      .expect(200);
  });

  it("should get a list of properties", async () => {
    await request(app)
      .get("/properties")
      .expect((res) => {
        expect(res.body).toEqual(properties);
      })
      .expect(200);
  });
});
