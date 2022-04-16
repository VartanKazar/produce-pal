import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    recipes: []
}

export const plannerSlice = createSlice({
    name: 'planner',
    initialState,
    reducers: {
        addRecipe: (state, action) => {

            var itemFound = false
            for(var recipe of state.recipes){
                if(recipe.id === action.payload.id){
                    itemFound = true
                    recipe.numInPlanner += 1
                    break
                }
            }

            if(!itemFound){
                let item = {...action.payload}
                item.numInPlanner = 1
                state.recipes.push(item)
            }
        },

        removeRecipe: (state, action) => {

            var index = 0
            for(var recipe of state.recipes){
                if(recipe.id === action.payload.id){
                    if(recipe.numInPlanner === 1)
                        state.recipes.splice(index, 1)

                    else recipe.numInPlanner -= 1

                    break
                }
                index++
            }
        },
    }
});



export const { addRecipe, removeRecipe } = plannerSlice.actions;

export default plannerSlice.reducer;
