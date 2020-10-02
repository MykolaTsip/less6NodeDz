module.exports = (sequelize, Datatypes) => {
    const  User = sequelize.define('User', {
            id: {
                type: Datatypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Datatypes.STRING,
                allowNull: false
            },
            password: {
                type: Datatypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'users',
            timestamps: false
        })
    return User
}
