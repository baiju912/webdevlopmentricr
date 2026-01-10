import User from "../models/userModel.js";

export const UserRegister =async (req, res ) => {
    try {
        const {fullName,email,phone,password} = req.body;

        if(!fullName || !email || !phone ||!password) {
            res.status(400).json({message: "All Fields Requried"})
            return;
        }

        const newUser = await User.create ({
            fullName,
            email,
            phone,
            password,
        });

        console.log(newUser);
        res.status(201).json({message: "User Created Successfully"});
        
        
    } catch (error) {

        console.log(error);
        res.status(500).json({message: "Internal Server error"});

        
        
    }
}

export const UserLogin =async (req, res ) => {
    try {
        const {email,password} = req.body;

        if( !email || !password) {
            res.status(400).json({message: "All Fields Requried"})
            return;
        }

        const exixtingUser = await User.find ({email});
        if(!exixtingUser)
        {
        res.status(404).json({message: "User not found"});
        return;
        }
      
        if(!password=== exixtingUser.password)
        {
            res.status(402).json({message: "User not Authorized"});
        return;
        }

        console.log(exixtingUser);
        
        res.status(200).json({message: "Welcome Back" , data: exixtingUser});
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server error"});
        
    }
}

export const UserLogout =async (req, res ) => {
    try {
         res.status(200).json({message: "Logout Successfull" });
        
    } catch (error) {

         console.log(error);
        res.status(500).json({message: "Internal Server error"});
        
    }
}