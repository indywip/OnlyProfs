import * as Auth from "./firebase-files/Auth";
import * as Create from "./firebase-files/create";
import * as Read from "./firebase-files/read";
import * as Remove from "./firebase-files/remove";
import * as Update from "./firebase-files/update";

// All functions that front-end will call (Keep it simple)


const signUp = async (email, password, username, title, description) => {
    await Auth.signUpProfessor(email, password, username, title, description);
    // Could also be for signing up a student
};

const signIn = async (email, password) => {
    const user = await Auth.signIn(email, password);
    return user;
};

export {signUp, signIn}
