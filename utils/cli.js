import { init, update } from "./init.js";
import sp from 'spinnies';
import axios from "axios";


export default async function CLI() {
    const spinnies=new sp();
    const arg = process.argv[2];
    if(arg==="settings"){
        try {
            await update();
            spinnies.succeed('spinner-1', { text: 'Success!' });
        } catch (error) {
            spinnies.fail('spinner-1', { text: 'Fail :(' });
        }
    }
    if(!arg){
        try {
            // spinnies.add('spinner-1', { text: 'Getting your weather' });
            const {API_Key,Default_City} = await init();
            console.log(API_Key,Default_City)
            const url=`https://api.openweathermap.org/data/2.5/weather?q={${Default_City}}&appid=#{${API_Key}}`;
            const {data}=await axios.get(url);
            console.log(data);
            spinnies.succeed('spinner-1', { text: 'Success!' });
        } catch (error) {
            
        }
    }
}
