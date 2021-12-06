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

export function getDiets() {
  return async function (dispatch) {
    try {
      var info = await axios.get("http://localhost:3001/types");
      return dispatch({
        type: "GET_DIETS",
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postRecipe (payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/recipe", payload)
        console.log(response)
        return response;
    }
}

export function getDetail (id){
    return async function(dispatch){
        try{
            var json = await axios.get(`http://localhost:3001/recipes/${id}`);
            return dispatch({
                type: "GET_DETAIL",
                payload: json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}
// export function filterRecipeCreated(payload){
//     return{
//         type: 'FILTER_RECIPE_CREATED',
//         payload
//     }

// }
