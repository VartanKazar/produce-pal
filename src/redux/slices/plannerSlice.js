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

    searchResults: [],
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
            state.recipes.push(action.payload)
        },

        removeRecipe: (state, action) => {
            let itemFound = false
            state.recipes = state.recipes.filter(recipe => {
                if(recipe.id === action.payload.id && !itemFound){
                    itemFound = true
                }

                else return recipe
            })
        },

        selectRoutine: (state, action) => {
            state.selectedRoutine = action.payload
        },

        clearSelectedRoutine: (state) => {
            state.selectedRoutine = undefined
        },


    },

    extraReducers: (builders) => {

    }
});



export const { addRecipe, removeRecipe, selectRoutine, clearSelectedRoutine } = plannerSlice.actions;

export default plannerSlice.reducer;
