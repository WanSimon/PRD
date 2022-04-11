import "./style.css";

import { filter } from "lodash-es";

const users = [
  { name: "wanSImon", age: 20 },
  { name: "zhang", age: 30 },
];

const filterUsers = filter(users, (user) => user.age >= 20);

console.log(filterUsers);

console.log("helle");
