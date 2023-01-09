const { describe, expect, test } = require("@jest/globals");
const request = require("supertest");
const app = require("../app");

describe("Test GET /expenses", () => {
  test("It should response with 200", async () => {
    const response = await request(app)
      .get("/api/expenses")
      .set("Accept", "application/json");

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          date: "2022-06-24T21:00:00.000Z",
          category: "Clothes",
          shop: "Zalando",
          amount: 67.36,
          created: "2022-12-31T12:12:25.000Z",
        }),
        expect.objectContaining({
          id: 2,
          date: "2022-06-24T21:00:00.000Z",
          category: "carpart",
          shop: "motonet",
          amount: 500,
          created: "2022-12-31T12:12:26.000Z",
        }),
        expect.objectContaining({
          id: 3,
          date: "2022-01-14T22:00:00.000Z",
          category: "Records",
          shop: "Swampmusic",
          amount: 100,
          created: "2022-12-31T12:12:26.000Z",
        }),
        expect.objectContaining({
          id: 4,
          date: "2022-01-14T22:00:00.000Z",
          category: "Beer",
          shop: "Alko",
          amount: 55.6,
          created: "2022-12-31T12:12:26.000Z",
        }),
      ])
    );
  });

  test("should return 1 expense", async () => {
    const response = await request(app)
      .get("/api/expenses/3")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 3,
        date: "2022-01-14T22:00:00.000Z",
        category: "Records",
        shop: "Swampmusic",
        amount: 100,
        created: "2022-12-31T12:12:26.000Z",
      })
    );
  });

  test("should return 404 and Not Found", async () => {
    const response = await request(app).get("/api/expenses/501");

    expect(response.status).toEqual(404);
    expect(response.text).toContain("Not Found");
  });
});
