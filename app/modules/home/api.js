import { database, storage } from "../../config/firebase";

//Create recipe object in realtime database
export function createRecipe(recipe, callback) {
  database.ref('recipes').child(recipe.rid).update({ ...recipe })
    .then(() => callback(true, null, null))
    .catch((error) => callback(false, null, { message: error }));
}

//Get the recipe object from the realtime database

//Google example
export function writeUserData(userId, name, newRecipes, newBookmarks, newLove) {
  database.ref('users/' + userId).set({
    username: name,
    recipes: newRecipes,
    bookmarks: newBookmarks,
    lovedRecipes: newLove,
  });
}