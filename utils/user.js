import pkg from "enquirer";
const { prompt } = pkg;
import jsonFile from "jsonfile";
import process from "process";

const pwd = process.cwd();

async function getDetails() {
  const question = [
    {
      type: "input",
      name: "User_Name",
      message: "Your UserName : ",
    },
    {
      type: "input",
      name: "API_Key",
      message: "Your OpenWeather Map API key: ",
    },
    {
        type:"input",
        name:"Default_City",
        message:"Your current location: ",
    }
];
  try {
    const answer = await prompt(question);
    return answer;
  } catch (error) {
    console.log(error);
  }
}

export default async function user() {
  try {
    const apikey = await jsonFile.readFile("apikey.json");
    if (apikey) return apikey;
    else throw error;
    // const id = JSON.parse(apikey);
    // if (id.length > 1) {
    //   console.log("sg");
    //   return id;
    // }
  } catch (error) {
    const details = await getDetails();
    jsonFile.writeFile("apikey.json", details, (error) => {
      if (error) {
        console.log(error);
      }
    });
    console.log("");
    return details;
  }
}
