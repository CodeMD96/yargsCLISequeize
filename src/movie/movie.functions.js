const Movie = require("./movie.table");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.create(movieObj);
        console.log(`Successfuly added ${movieObj.title} to the database`);
    } catch (error) {
        console.log(error);
    }
};

exports.readMovies = async () => {
    try {
        const movies = await Movie.findAll();
        console.log(movies.every(movie => movie instanceof Movie)); // true
        console.log("All movies:", JSON.stringify(movies, null, 2));
    } catch (error) {
        console.log(error);
    }  
}

exports.updateMovie = async (updateObj) => {
    try {
        await Movie.update({ [updateObj.updateKey]: updateObj.updateValue }, {
            where: {
              [updateObj.targetKey]: updateObj.targetValue
            }
        });
    } catch (error) {
        console.log(error);
    }  
}

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy({
            where: {
              [movieObj.deleteKey]: movieObj.deleteValue
            }
          });
    } catch (error) {
        console.log(error);
    }    
}