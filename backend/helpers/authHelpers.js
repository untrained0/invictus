const bcrypt = require("bcrypt");

const hashpassword = async(password) =>{
    try{
    const saltRounds = 3;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword
    }catch(error){
        console.log(error)
    }
};

const comparePassword = async(password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}

module.exports = { hashpassword, comparePassword }