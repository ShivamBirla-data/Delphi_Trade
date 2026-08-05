const Account=require("../model/Account");
const User=require("../model/userModel");
exports.openAccount=async(req,res)=>{

    const account=new Account(req.body);

    await account.save();

    res.json({

        success:true,

        message:"Account Created"

    });

}