// import { login } from "react-dom";

// // Construct and save your BASE_URL
// const BASE_URL = `https://fakestoreapi.com`;

// // POST /users/login function
// export async function login(username, password) {
//   console.log(username, password);
//   try {
//     const response = await fetch("https://fakestoreapi.com/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//     });
//     // const result = await response.json();
//     // console.log(json);
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// // Get all users
// export async function getAllUsers() {
//   // console.log(response);
//   const response = await fetch("https://fakestoreapi.com/users");
//   const result = await response.json();
//   console.log(result);
//   // .then((res) => res.json())
//   // .then((json) => console.log(json));
// }
