import user from './user.js'

export default async function CLI(){
    const users=await user();
    console.log(users.User_Name)
}