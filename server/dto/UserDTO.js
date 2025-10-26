const UserDTO = (user)=>{
    const newUser =  {
        username:user.username,
        email:user.email,
        age:user.age
    }
    return newUser;
}
module.exports = UserDTO;