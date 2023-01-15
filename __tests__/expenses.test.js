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
          date: "2022-08-12T21:00:00.000Z",
          category: "Testshoes",
          shop: "Testman",
          amount: 230.5,
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
    const response = await request(app).get("/api/expenses/101");

    expect(response.status).toEqual(404);
    expect(response.text).toContain("Id not found!");
  });
});

describe("POST expenses endpoint", () => {
  test("should create a new expense", async () => {
    const expense = {
      date: "2022-08-13",
      category: "Testshoes",
      shop: "Testman",
      amount: 230.5,
    };

    const response = await request(app)
      .post("/api/expenses")
      .set("Accept", "application/json")
      .send(expense);

    expect(response.status).toEqual(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.id).toBeTruthy();
    expect(response.body.date).toEqual("2022-08-13");
    expect(response.body.category).toEqual("Testshoes");
    expect(response.body.shop).toEqual("Testman");
    expect(response.body.amount).toEqual(230.5);
  });
});

describe("DELETE expenses endpoint", () => {
  test("should delete the expense by id", async () => {
    const expense = {
      date: "2022-08-13",
      category: "Testshoes",
      shop: "Testman",
      amount: 230.5,
    };
    const postResponse = await request(app)
      .post("/api/expenses")
      .set("Accept", "application/json")
      .send(expense);
    const postId = postResponse.body.id;

    const response = await request(app)
      .delete(`/api/expenses/${postId}`)
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("Expense deleted");
  });

  test("should check that expense with id exists", async () => {
    const response = await request(app)
      .delete("/api/expenses/100001")
      .set("Accept", "application/json");

    expect(response.status).toEqual(404);
    expect(response.text).toEqual("Id not found!");
  });
});

describe("PUT expenses endpoint", () => {
  let postId;
  beforeAll(async () => {
    const expense = {
      date: "2022-08-13",
      category: "Testshoes",
      shop: "Testman",
      amount: 230.5,
    };
    const postResponse = await request(app)
      .post("/api/expenses")
      .set("Accept", "application/json")
      .send(expense);
    postId = postResponse.body.id;
  });

  test("should update the expense with the id", async () => {
    const expense = {
      id: postId,
      date: "2022-08-13",
      category: "Testshoes",
      shop: "Testman",
      amount: 230.5,
    };
    const response = await request(app)
      .put("/api/expenses")
      .set("Accept", "application/json")
      .send(expense);
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(postId);
    expect(response.body.date).toEqual("2022-08-13");
    expect(response.body.category).toEqual("Testshoes");
    expect(response.body.shop).toEqual("Testman");
    expect(response.body.amount).toEqual(230.5);
  });

  test("should check that expense with id exists", async () => {
    const expense = {
      id: 100000000,
      date: "2022-08-13",
      category: "Testshoes",
      shop: "Testman",
      amount: 230.5,
    };
    const response = await request(app)
      .put("/api/expenses")
      .set("Accept", "application/json")
      .send(expense);
    expect(response.status).toEqual(404);
    expect(response.text).toEqual("Id not found!");
  });
});
