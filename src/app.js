require("./db/connection");
const yargs = require("yargs");
const { addMovie, readMovies, updateMovie, deleteMovie } = require("./movie/movie.functions");
const { addUser, readUsers, updateUser, deleteUser} = require("./user/user.functions");

const app = async (args) => {
    try {
        if (args.addMovie) {
            const movieObj = {title:args.title, actor: args.actor, rating: args.rating, UserId: args.UserId};
            await addMovie(movieObj);
            // run add movie functionality, passing a movieObj
        } else if (args.readMovie) {
            await readMovies();
            // run read movies logging all movies to the console
        } else if (args.updateMovie) {
            const updateObj = {targetKey: args.targetKey, targetValue: args.targetValue, updateKey: args.updateKey, updateValue: args.updateValue};
            await updateMovie(updateObj);
            //run update movie, passing an updateObj
        } else if (args.deleteMovie) {
            const movieObj = { deleteKey: args.deleteKey, deleteValue: args.deleteValue};
            await deleteMovie(movieObj);
            //run delete functionality, passing a movieObj
        } else if (args.addUser) {
            const userObj = {username: args.username};
            await addUser(userObj);
            // run add user functionality, passing a userObj
        } else if (args.readUser) {
            await readUsers();
            // run read users logging all users to the console
        } else if (args.updateUser) {
            const updateObj = {username: args.username, updateValue: args.updateValue};
            await updateUser(updateObj);
            //run update user, passing an updateObj
        } else if (args.deleteUser) {
            const userObj = { username: args.username};
            await deleteUser(userObj);
            //run delete functionality, passing a userObj
        } else {
            console.log("incorrect command");
        }
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);