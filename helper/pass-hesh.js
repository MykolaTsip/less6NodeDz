const brypt = require('bcrypt')

module.exports =
    (password) => {
        return brypt.hash(password, 10)

    }
