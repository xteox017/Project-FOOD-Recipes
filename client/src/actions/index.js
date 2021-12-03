import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/recipes", {});
    return dispatch({
      type: "GET_RECIPES",
      payload: json.data,
    });
  };
}

export function filterRecipesByDiets(payload) {
  return {
    type: "FILTER_BY_DIETS",
    payload,
  };
}

export function filterScore(payload) {
  return {
    type: "ORDER_BY_SCORE",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function getNameRecipe(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
      return dispatch({
        type: "GET_NAME_RECIPES",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// export function filterRecipeCreated(payload){
//     return{
//         type: 'FILTER_RECIPE_CREATED',
//         payload
//     }

// }
