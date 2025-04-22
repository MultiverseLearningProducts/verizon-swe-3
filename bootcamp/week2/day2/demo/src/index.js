// create an object
const user = {
    username: "v1p3r",
    email: 'viper@coldmail.com',
    password: 'Fanged123',

    changeEmail(newEmail) {
        if (!newEmail.includes('@')) {
            throw 'must be a valid email'
        }
        this.email = newEmail
    },

    changePassword(oldPassword, newPassword, confirmPassword) {
        if (oldPassword != this.password) {
            throw 'password invalid'
        }
        if (newPassword != confirmPassword) {
            throw "confirm new password - don't match"
        }
        if (newPassword.length < 7) {
            throw "password must be at least 7 characters"
        }
        this.password = newPassword
    }
}

console.log(user.username);
console.log(user.password);

// user.changeEmail('hello')
user.changeEmail('viper@pear.com')
console.log(user)
console.log(user.email)
console.log(user["email"])

// change the password
// user.changePassword('fanged321', 'Coil89', 'Coil98')
// user.changePassword('Fanged123', 'Coil89', 'Coil98')
// user.changePassword('Fanged123', 'Coil89', 'Coil89')
user.changePassword('Fanged123', 'Coiled89', 'Coiled89')
console.log(user)

console.log(Object.keys(user))
// NOT console.log(user.keys())
console.log(Object.values(user))

user.email = "haha@hacked.com"
console.log(user)

Object.freeze(user)
user.email = "better@now.com"
console.log(user)

