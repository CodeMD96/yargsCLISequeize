require("./db/connection");
const yargs = require("yargs");
const { addMovie, readMovies, readMovie, updateMovie, deleteMovie } = require("./movie/movie.functions");

const app = async (args) => {
    try {
        if (args.add) {
            const movieObj = {title:args.title, actor: args.actor, rating: args.rating};
            await addMovie(movieObj);
            // run add movie functionality, passing a movieObj
        } else if (args.read) {
            await readMovies();
            // run read movies logging all movies to the console
        } else if (args.update) {
            const updateObj = {targetKey: args.targetKey, targetValue: args.targetValue, updateKey: args.updateKey, updateValue: args.updateValue};
            await updateMovie(updateObj);
            //run update movie, passing an updateObj
        } else if (args.delete) {
            const movieObj = { deleteKey: args.deleteKey, deleteValue: args.deleteValue};
            await deleteMovie(movieObj);
            //run delete functionality, passing a movieObj
        } else {
            console.log("incorrect command");
        }
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);