#!/usr/bin/env node
import Greeting from "./utils/greetings.js";
import CLI from "./utils/cli.js";
import welcome from "cli-welcome";

const main=async()=>{
    welcome({
        title: `Welcome to Weather CLI`,
        description: `Made by Sayantan`,
        bgColor: `#ADCCEA`,
        color: `#FFFFFF`,
        bold: true,
        clear: true,
        version:'1.0.0'
      });
    await CLI();
}
main();