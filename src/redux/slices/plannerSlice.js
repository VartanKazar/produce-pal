import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    
    recipes: [],

    routines: [
        {
            id: 233567,
            name: "quick run",
            start: {
                zipCode: 23315,
                searchRadius: 10
            },

            shops: [
                {
                    name: "ralphs",
                    address: "12345 Gumdrop Road",
                    distance: 5.5
                },

                {
                    name: "Costco",
                    address: "16188 Swamp Drive",
                    distance: 1.2
                }
            ]
        },

        {
            id: 233569,
            name: "quick run 2",
            start: {
                zipCode: 23315,
                searchRadius: 10
            },

            shops: [
                {
                    name: "ralphs",
                    address: "12345 Gumdrop Road",
                    distance: 5.5
                }
            ]
        },
    ],

    selectedRoutine: {
        id: 233567,
        name: "quick run",
        start: {
            zipCode: 23315,
            searchRadius: 10
        },

        shops: [
            {
                name: "ralphs",
                address: "12345 Gumdrop Road",
                distance: 5.5
            },

            {
                name: "Costco",
                address: "16188 Swamp Drive",
                distance: 1.2
            }
        ]
    },

    searchResults: []
}

export const findStoresAsync = createAsyncThunk(
    'planner/findStores',
    async () => {

    }
);

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

        selectRoutine: (state, action) => {
            state.selectedRoutine = action.payload
        },

        clearSelectedRoutine: (state) => {
            state.selectedRoutine = undefined
        }
    },

    extraReducers: (builders) => {

    }
});



export const { addRecipe, removeRecipe, selectRoutine, clearSelectedRoutine } = plannerSlice.actions;

export default plannerSlice.reducer;
