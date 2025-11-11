import { createInterface } from "node:readline/promises";
import moment from "moment";

import { stdin, stdout } from "node:process";
const rl = createInterface({
  input: stdin,
  output: stdout,
});

const momentDate = async () => {
  try {
    const answer = await rl.question("masukan tanggal, ex(DD-MM-YYYY): ");
    const formAwal = "DD-MM-YYYY";
    const parseInput = moment(answer, formAwal, true);

    if (parseInput.isValid()) {
      console.log("tanggal valid", parseInput.format("DD/MM/YYYY"));
    } else {
      console.log("format tanggal salah");
      return momentDate();
    }
  } catch (err) {
    console.log(err);
  }
  rl.close();
};

momentDate();
