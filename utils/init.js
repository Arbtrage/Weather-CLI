import pkg from "enquirer";
const { prompt } = pkg;
import jsonFile from "jsonfile";
import Greeting from './greetings.js';

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
export async function init() {
  try {
    const apikey = await jsonFile.readFile("apikey.json");
    if (apikey) return apikey;
    else throw error;
  } catch (error) {
    Greeting(); 
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

export async function update(){
    const details = await getDetails();
    jsonFile.writeFile("apikey.json", details, (error) => {
      if (error) {
        console.log(error);
      }
    });
    console.log("");
}