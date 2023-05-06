import welcome from "cli-welcome";

function Greet() {
    
  const now = new Date();
  const hour = now.getHours();
  var greeting = "";
  if (hour <= 11) {
    greeting = `Good Morning`;
  } else if (hour > 11 && hour < 4) {
    greeting = `Good Afternoon`;
  } else {
    greeting = `Good Evening`;
  }
  return greeting;
}

function init() {
  welcome({
    title: `Welcome to Weather CLI`,
    description: `${Greet()}`,
    bgColor: `#ADCCEA`,
    color: `#FFFFFF`,
    bold: true,
    clear: true,
    version:'1.0.0'
  });
}
export default function Greeting() {
  init();
}
