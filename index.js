#!/usr/bin/env node
import Greeting from "./utils/greetings.js";
import CLI from "./utils/cli.js";
const main=async()=>{
    Greeting();
    await CLI();
}
main();