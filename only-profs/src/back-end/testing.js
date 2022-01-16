import * as functions from "./functions.js";

// Do testing here
export async function testSignup() {
  await functions.signUp("etst@gmail.com", "TestPassword"); // Sample user
};

export async function testGetProfessorInfo() {
    const data = await functions.getProfessorInfo("Koopa");
};

export async function testGetProfessorVideos() {
    const data = await functions.getProfessorVideos("ddlHL0FYUpSwJsLtBCk2PD2ctJe2");
    console.log(data);
};