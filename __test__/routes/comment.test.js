const request = require("supertest");
const comment = require("../../routes/comment");

describe("Comment", () => {
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
    const response = await request(baseUrl).post(`/comment/65994d1416bc8780d677e366`).send({
        comment: "test comment",
        mbti: "ISTJ",
        enneagram: "2W3",
        zodiac: "Leo"
    });
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe("Profile not found");
  });

  it("should successfully add a comment", async () => {
    const response = await request(baseUrl).post(`/comment/${profile.body.data._id}`).send({
        comment: "test comment",
        mbti: "ISTJ",
        enneagram: "2W3",
        zodiac: "Leo"
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Comment added successfully");
    expect(response.body.data.comment).toBe("test comment");
    expect(response.body.data.mbtiVote).toBe("ISTJ");
    expect(response.body.data.enneagramVote).toBe("2W3");
    expect(response.body.data.zodiacVote).toBe("Leo");
    expect(response.body.data.profileId).toBe(profile.body.data._id);
  });

  it("should return an error if comment is missing", async () => {
    const response = await request(baseUrl).post(`/comment/${profile.body.data._id}`).send({
        mbti: "ISTJ",
        enneagram: "2W3",
        zodiac: "Leo"
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if mbti is missing", async () => {
    const response = await request(baseUrl).post(`/comment/${profile.body.data._id}`).send({
        comment: "test comment",
        enneagram: "2W3",
        zodiac: "Leo"
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if enneagram is missing", async () => {
    const response = await request(baseUrl).post(`/comment/${profile.body.data._id}`).send({
        comment: "test comment",
        mbti: "ISTJ",
        zodiac: "Leo"
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });

  it("should return an error if zodiac is missing", async () => {
    const response = await request(baseUrl).post(`/comment/${profile.body.data._id}`).send({
        comment: "test comment",
        mbti: "ISTJ",
        enneagram: "2W3"
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bad user input");
  });
});
