import fs from "fs/promises";

const now = new Date();
const current_time = `${now.getFullYear()}-${
  now.getMonth() + 1
}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
const current_timeStamp = now.getTime().toString();

const createFile = () => {
  fs.writeFile(
    `./created_files/${current_time}.txt`,
    `current_timeStamp = ${current_timeStamp}`,
    (err) => {
      if (err) {
        console.log(err);
      }else console.log(current_time);
    }
  );
};

const showFiles = async () => {
  try {
    const files = await fs.readdir("./created_files");
    return files;
  } catch (error) {
    console.log(error);
    return ["Error"];
  }
};
export { createFile, showFiles };
