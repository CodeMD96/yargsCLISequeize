const User = require("./user.table");

exports.addUser = async (userObj) => {
    try {
        await User.sync();
        await User.create(userObj);
        console.log(`Successfuly added ${userObj.username} to the database`);
    } catch (error) {
        console.log(error);
    }
};

exports.readUsers = async () => {
    try {
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
    } catch (error) {
        console.log(error);
    }  
}

exports.updateUser = async (updateObj) => {
    try {
        await User.update({ username: updateObj.updateValue }, {
            where: {
              username: updateObj.username
            }
        });
    } catch (error) {
        console.log(error);
    }  
}

exports.deleteUser = async (userObj) => {
    try {
        await User.destroy({
            where: {
              username: userObj.username
            }
          });
    } catch (error) {
        console.log(error);
    }    
}