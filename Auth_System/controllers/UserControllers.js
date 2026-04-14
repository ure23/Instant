import * as userModels from '../models/UserModels.js';

export const register = async (req, res) => {
    const {
        name, 
        birthdate,
        address,
        program,
        studentStatus,
        email, 
        password} = req.body;


    try {
        const userProfile = {name, birthdate, address, program, studentStatus};
        const user = await userModels.createUser(userProfile, email, password);
        res.status(201).json({success: true, message: user});
    }catch(err){
        console.log(err);
        res.status(400).json({success: false, message: err})
    }   
}

export const login = async (req, res) => {
    const {email, password} = req.body;


    try {
        const token = await userModels.login(email, password);
        res.status(201).json({
            success: true, 
            message: [
                { result: "Login successful" },
                { token: token }
            ]
        });
    }catch(err){
        console.log(err);
        res.status(400).json({success: false, message: err.message})
    }   
}