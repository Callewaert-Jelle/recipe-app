interface JsonRecipe {
    name: string;
    ingredients: string[];
    dateAdded: string;
}

export class Recipe {
    constructor(
        private _name: string,
        private _ingredients = new Array<string>(),
        private _dateAdded = new Date()
    ) {}

    addIngredient(name: string, amount?: number, unit?: string) {
        this._ingredients.push(`${amount || 1} ${unit || ''} ${name}`);
    }

    get name() { return this._name };
    get ingredients() { return this._ingredients };
    get dateAdded() { return this._dateAdded };

    static fromJson(json: JsonRecipe): Recipe {
        const recipe = new Recipe(json.name, json.ingredients, new Date(json.dateAdded));
        return recipe;
    }
}