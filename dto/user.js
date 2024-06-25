class UserDTO {
    constructor (user){
        this._id = user._id;
        this.email = user._email;
        this.username = user.username;
        this.name = user.name;
    }
}

module.exports = UserDTO;