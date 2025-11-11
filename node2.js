import { createInterface } from "node:readline/promises";

import { stdin, stdout } from "node:process";
const rl = createInterface({
  input: stdin,
  output: stdout,
});

const getDate = async () => {
  let answer = await rl.question("masukan tanggal (DD-MM-YYYY): ");

  if (
    !answer.includes("-") ||
    answer.length !== 10 ||
    answer[2] !== "-" ||
    answer[5] !== "-"
  ) {
    console.log("format tanggal salah");
    return getDate();
  }

  const day = Number(answer.slice(0, 2));
  const month = Number(answer.slice(3, 5));
  const year = Number(answer.slice(6));

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year.toString().length !== 4
  ) {
    console.log("tanggal tidak valid");
    return getDate();
  }

  let newAnswer = "";
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "-") {
      newAnswer = newAnswer + "/";
    } else {
      newAnswer = newAnswer + answer[i];
    }
  }
  console.log(newAnswer);
  rl.close();
};
getDate();
