import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Hero } from "../../interfaces/types"

interface HeroState {
    heroes: Hero[];
    filteredHeroes: Hero[];
}

const initialState: HeroState = {
    heroes: [],
    filteredHeroes: []
}

const heroesSlice = createSlice({
    name: "heroes",
    initialState,
    reducers: {
        setHeroes(state, action: PayloadAction<Hero[]>) {
            state.heroes = action.payload;
            state.filteredHeroes = action.payload;
        },
        filterHeroes(state, action: PayloadAction<Hero[]>) {
            if (action.payload.length < 1) {
                state.heroes = state.heroes;
                state.filteredHeroes = [];
            } else {
                /*const filter = action.payload.toLowerCase();
                state.filteredHeroes = state.heroes.filter(hero => 
                    hero.name.toLowerCase().includes(filter) ||
                    hero.description.toLowerCase().includes(filter)
                ); */
                state.filteredHeroes = action.payload;
            }
        },
    }
})

export const { setHeroes, filterHeroes } = heroesSlice.actions
export default heroesSlice.reducer