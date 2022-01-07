const { DataTypes} = require("sequelize");
const sequelize = require("../db/connection");
const Movie = require("../movie/movie.table");

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.hasMany(Movie, {as: "Movies"});
sequelize.sync();

module.exports = User;