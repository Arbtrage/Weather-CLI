
function Greet(name,hour){
    if(hour<=11){
        console.log(`Good Morning ${name}`)
    }
    else if(hour>11 && hour<4){
        console.log(`Good Afternoon ${name}`)
    }
    else{
        console.log(`Good Evening ${name}`)
    }
}

export default function Greeting() {
  const now = new Date();
  const hours = now.getHours();
  Greet("Sayantan",hours);
}
