const request = require("supertest");

describe("Profile", () => {
  const baseUrl = "http://localhost:3000";
  let profile;
  beforeAll(async () => {
     profile = await request(baseUrl).post("/").send({
        name: "A Martinez",
        description: "Adolph Larrue Martinez III.",
        mbti: "ISFJ",
        enneagram: "9w3",
        variant: "sp/so",
        tritype: 725,
        socionics: "SEE",
        sloan: "RCOEN",
        psyche: "FEVL",
        image: "https://soulverse.boo.world/images/1.png",
      });
      })

  it("should return an error if profile not found", async () => {
    const response = await request(baseUrl).get(`/65994d1416bc8780d677e366`);
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe("Profile not found");
  });


  it("should return html with a profile", async () => {
    const response = await request(baseUrl).get(`/${profile.body.data._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.text.length).toBeGreaterThan(0);
  });

  it("should create a new profile", async () => {
    const response = await request(baseUrl).post("/").send({
      name: "A Martinez",
      description: "Adolph Larrue Martinez III.",
      mbti: "ISFJ",
      enneagram: "9w3",
      variant: "sp/so",
      tritype: 725,
      socionics: "SEE",
      sloan: "RCOEN",
      psyche: "FEVL",
      image: "https://soulverse.boo.world/images/1.png",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Profile created successfully");
    expect(response.body.data.name).toBe("A Martinez");
    expect(response.body.data.description).toBe(
      "Adolph Larrue Martinez III."
    );
    expect(response.body.data.mbti).toBe("ISFJ");
    expect(response.body.data.enneagram).toBe("9w3");
    expect(response.body.data.variant).toBe("sp/so");
    expect(response.body.data.tritype).toBe(725);
    expect(response.body.data.socionics).toBe("SEE");
    expect(response.body.data.sloan).toBe("RCOEN");
    expect(response.body.data.psyche).toBe("FEVL");
    expect(response.body.data.image).toBe(
      "https://soulverse.boo.world/images/1.png"
    );
  });

  it("should return an error if name is missing", async () => {
    const response = await request(baseUrl).post("/").send({
      description: "Adolph Larrue Martinez III.",
      mbti: "ISFJ",
      enneagram: "9w3",
      variant: "sp/so",
      tritype: 725,
      socionics: "SEE",
      sloan: "RCOEN",
      psyche: "FEVL",
      image: "https://soulverse.boo.world/images/1.png",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if description is missing", async () => {
    const response = await request(baseUrl).post("/").send({
      name: "A Martinez",
      mbti: "ISFJ",
      enneagram: "9w3",
      variant: "sp/so",
      tritype: 725,
      socionics: "SEE",
      sloan: "RCOEN",
      psyche: "FEVL",
      image: "https://soulverse.boo.world/images/1.png",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if mbti is missing", async () => {
    const response = await request(baseUrl).post("/").send({
      name: "A Martinez",
      description: "Adolph Larrue Martinez III.",
      enneagram: "9w3",
      variant: "sp/so",
      tritype: 725,
      socionics: "SEE",
      sloan: "RCOEN",
      psyche: "FEVL",
      image: "https://soulverse.boo.world/images/1.png",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if enneagram is missing", async () => {
    const response = await request(baseUrl).post("/").send({
      name: "A Martinez",
      description: "Adolph Larrue Martinez III.",
      mbti: "ISFJ",
      variant: "sp/so",
      tritype: 725,
      socionics: "SEE",
      sloan: "RCOEN",
      psyche: "FEVL",
      image: "https://soulverse.boo.world/images/1.png",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if variant is missing", async () => {
    const response = await request(baseUrl).post("/").send({
      name: "A Martinez",
      description: "Adolph Larrue Martinez III.",
      mbti: "ISFJ",
      enneagram: "9w3",
      tritype: 725,
      socionics: "SEE",
      sloan: "RCOEN",
      psyche: "FEVL",
      image: "https://soulverse.boo.world/images/1.png",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if tritype is missing", async () => {
    const response = await request(baseUrl).post("/").send({
      name: "A Martinez",
      description: "Adolph Larrue Martinez III.",
      mbti: "ISFJ",
      enneagram: "9w3",
      variant: "sp/so",
      socionics: "SEE",
      sloan: "RCOEN",
      psyche: "FEVL",
      image: "https://soulverse.boo.world/images/1.png",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if socionics is missing", async () => {
    const response = await request(baseUrl).post("/").send({
      name: "A Martinez",
      description: "Adolph Larrue Martinez III.",
      mbti: "ISFJ",
      enneagram: "9w3",
      variant: "sp/so",
      tritype: 725,
      sloan: "RCOEN",
      psyche: "FEVL",
      image: "https://soulverse.boo.world/images/1.png",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if sloan is missing", async () => {
    const response = await request(baseUrl).post("/").send({
      name: "A Martinez",
      description: "Adolph Larrue Martinez III.",
      mbti: "ISFJ",
      enneagram: "9w3",
      variant: "sp/so",
      tritype: 725,
      socionics: "SEE",
      psyche: "FEVL",
      image: "https://soulverse.boo.world/images/1.png",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if psyche is missing", async () => {
    const response = await request(baseUrl).post("/").send({
      name: "A Martinez",
      description: "Adolph Larrue Martinez III.",
      mbti: "ISFJ",
      enneagram: "9w3",
      variant: "sp/so",
      tritype: 725,
      socionics: "SEE",
      sloan: "RCOEN",
      image: "https://soulverse.boo.world/images/1.png",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if image is missing", async () => {
    const response = await request(baseUrl).post("/").send({
      name: "A Martinez",
      description: "Adolph Larrue Martinez III.",
      mbti: "ISFJ",
      enneagram: "9w3",
      variant: "sp/so",
      tritype: 725,
      socionics: "SEE",
      sloan: "RCOEN",
      psyche: "FEVL",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });
});
