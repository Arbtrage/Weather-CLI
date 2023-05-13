import chalk from "chalk";
import pkg from "enquirer";
import boxen from "boxen";

const { prompt } = pkg;

const log = console.log;
const green=chalk.green;
const yellow=chalk.yellow;
const options = {
  title: "Hi There",
  titleAlignment: "center",
  padding: 1,
  margin: 1,
  borderColor: "#ADCCEA",
  borderStyle: "double",
};
const greet = {
  start: "Get Started with this awesome CLI",
  description: "Useful commands : ",
  commands:{
    'weather':'This will generate the weather of your current location',
    'weather <City Name>':'This will fetch the weather data for the mentioned city',
    'weather settings':'This will take to settings page where you can update your details',
  }
};

export default function Greeting() {
  log(
    boxen(
      `${chalk.bold(`${greet.start}`)} 
      \n${chalk.hex('#46b7d9')(`${greet.description}`)}
      \n${green('weather :')} ${yellow(`${greet.commands['weather']}`)}
      \n${green('weather <City Name> :')} ${yellow(`${greet.commands['weather <City Name>']}`)}
      \n${green('weather settings :')} ${yellow(`${greet.commands['weather settings']}`)}`      ,
      options
    )
  );
}
