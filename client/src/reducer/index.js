const initialState = {
  recipes: [],
  allRecipes: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };
    case "GET_NAME_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };
    case "FILTER_BY_DIETS":
      const allRecipes = state.allRecipes;
      const mp = allRecipes.map((d) => {
        if (typeof d.diets[0] === "object") {
          return {
            ...d,
            diets: d.diets.map((r) => r.name),
          };
        }
        return d;
      });
      const dietsFiltered =
        action.payload === "all"
          ? mp
          : mp.filter((el) => el.diets.includes(action.payload));
      return {
        ...state,
        recipes: dietsFiltered,
      };
    case "ORDER_BY_SCORE":
      let todas = state.allRecipes;
      let order =
        action.payload === "asc"
          ? todas.sort(function (a, b) {
              if (a.spoonacularScore > b.spoonacularScore) {
                return 1;
              }
              if (b.spoonacularScore > a.spoonacularScore) {
                return -1;
              }
              return 0;
            })
          : todas.sort(function (a, b) {
              if (a.spoonacularScore > b.spoonacularScore) {
                return -1;
              }
              if (b.spoonacularScore > a.spoonacularScore) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: order,
      };
    case "ORDER_BY_NAME":
      let all = state.recipes;
      let sort =
        action.payload === "asc"
          ? all.sort(function (a, b) {
              if (a.title > b.title) {
                return 1;
              }
              if (b.title > a.title) {
                return -1;
              }
              return 0;
            })
          : all.sort(function (a, b) {
              if (a.title > b.title) {
                return -1;
              }
              if (b.title > a.title) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: sort,
      };

    default:
      return state;
  }
}

export default rootReducer;
