import { USER } from "../const";

let parse = JSON.parse(localStorage.getItem(USER))?.role;
let parseId = JSON.parse(localStorage.getItem(USER))?._id;
let parseFirstName = JSON.parse(localStorage.getItem(USER))?.firstName;
let parseLastName = JSON.parse(localStorage.getItem(USER))?.lastName;

export const ROLE = parse;
export const USER_ID = parseId;
export const USER_FIRSTNAME = parseFirstName;
export const USER_LASTNAME = parseLastName;


// import Cookies from "js-cookie";
// import { TOKEN, USER } from "../const";

// export function getToken() {
//   return Cookies.get(TOKEN);
// }

// export function getUser() {
//   const userCookie = Cookies.get(USER);
//   return userCookie ? JSON.parse(userCookie) : null;
// }

// export function isAuthorized(user) {
//   return user && user.role == "admin";
// }