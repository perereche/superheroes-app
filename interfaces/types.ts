export interface Hero {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    description: string;
    place: string;
}

export interface AddHero {
    name: string;
    firstName?: string;
    lastName?: string;
    description?: string;
    place?: string;
}

export interface SearchHero {
    name?: string;
    firstName?: string;
    lastName?: string;
    description?: string;
    place?: string;
}

export interface City {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    description: string;
    place: string;
}

export type RootStackParamList = {
    HeroesList: undefined;
    CreateHero: undefined;
    EditHero: HeroAddForm

}

export type RootStackParamListLogin = {
    HomeLogin: undefined;
    Login: undefined;
    Register: undefined
}

type HeroAddForm = {
    itemId?: number;
    itemName?: string;
    itemFirstName?: string;
    itemLastName?: string;
    itemDescription?: string;
    itemPlace?: string;
};

