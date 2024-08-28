import { User } from "../models/userModel";
import bcrypt from 'bcryptjs'

export const register =  async (req, res) =>{
    try{
        const {fullname, username, password, confirmPassword, gender} = req.body;
        if(!fullname, !username, !password, !confirmPassword, !gender){
            return res.status(400).json({message:"All fields are required"});
        };
        if (password === confirmPassword){
            res.status(400).json({message:"Password and confirm Password must be same"});
        };

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message: "username already in use"});
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            username,
            fullName,
            password: hashedPassword,
            profilePhoto,
            gender
        })
    }catch(error){

    }

}