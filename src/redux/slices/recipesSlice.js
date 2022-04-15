import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    recipes: [
        {
            id: 1,
            name: "Chicken Porto De Lacartesozou La Mounge",
            description: "The best chicken dish out there.",
            rating: 3.35,
            categories: ["italian", "chicken", "dairy"], 
            calories: 1500,
            reviews: [
                {
                    user: "Davey in the Navey",
                    title: "Its kinda meh",
                    review: "Not that bad, but not that great.  Claudia has better recipes.",
                    rating: 3
                },

                {
                    user: "Torbjorn Svorgennsen",
                    title: "explicabo nemo ab sunt odit voluptas provident magni eligendi odit qui quod.",
                    review: "quo omnis esse Veritatis explicabo culpa quo nemo eligendi. culpa at voluptates molestiae similique molestias eius ab. sunt tenetur reprehenderit fugit culpa exercitationem suscipit pariatur exercitationem laborum doloremque aut.",
                    rating: 5
                }
            ],
            ingredients: [
                {
                    ingredient: "Chicken Breast",
                    measurementUnits: "pieces",
                    measurementAmount: "5"
                },

                {
                    ingredient: "Linguini",
                    measurementUnits: "large boxes",
                    measurementAmount: "2"
                }
        
            ],
            instructions: [
                [   "eveniet quisquam vel aliquam harum molestiae aut consequuntur architecto dolorem non. iure eos cumque quibusdam quo dolorum quis quod quo eos. qui molestias eveniet tempora alias fugit eius non.",
                    "esse officia hic voluptas officia laborum hic corporis maiores quis aut placeat.",
                    "suscipit aliquam fuga fugit fugit expedita provident voluptate consectetur laborum. Ipsa libero pariatur accusantium veniam doloremque eos suscipit officia eius sit quod."
                ],
    
                [
                    "optio labore dolorum maxime omnis eos totam Voluptatem maxime. tenetur eos at eos harum repudiandae quibusdam eos. omnis doloribus quasi cumque tenetur Sed autem cumque. fuga neque excepturi eveniet earum aut aliquam eius culpa at error quasi temporibus.",
                    "autem sint minima aliquid doloremque Provident quas esse aliquam labore adipisci."
                ],
    
                [
                    "Sed fugit consequuntur alias quia sed expedita eius at sit at velit rerum. quia velit ratione sit Officiis temporibus debitis quas recusandae ad numquam."
                ],
    
                [
                    "non veniam a harum sed officiis sit ratione alias at saepe."
                ]
            ],
            uploadedBy: "Lorremmius Ippsummus",
            editedBy: "Savvarosa Zephelliasi",
            imgUrl: "abcd.com"
        }
    ]
}

export const recipesSlice = createSlice({
    name: "recipes",
    initialState: initialState,
    reducers: {

    }
})

export default recipesSlice.reducer;