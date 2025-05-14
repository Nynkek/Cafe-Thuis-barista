import express, { Request, Response } from 'express';
import cors from 'cors';
import { DrinkType } from './models/DrinkType';
import { BrewMethod } from './models/BrewMethod';
import { Recipe } from './models/Recipe';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
const drinktType1 : DrinkType = {
    id: "drink-001",
    name: 'Coffee',
    priceAtHome: 0,
    priceAtCafe: 0,
    recipeId: 'recipe-001',
    iconUrl: '/icons/brewmethod02.png'
}

const drinktType2 : DrinkType = {
    id: "drink-002",
    name: 'Espresso Tonic',
    priceAtHome: 0,
    priceAtCafe: 0,
    recipeId: 'recipe-002',
    iconUrl: '/icons/brewmethod03.png'
}

const brewMethod1 : BrewMethod = {
    id: 'brew-001',
    name: 'V60',
    iconUrl: '/icons/brewmethod01.png'
}

const brewMethod2 : BrewMethod = {
    id: 'brew-002',
    name: 'Chemex',
    iconUrl: '/icons/brewmethod02.png'
}

const brewMethod3 : BrewMethod = {
    id: 'brew-003',
    name: 'Espresso',
    iconUrl: '/icons/brewmethod03.png'
}

const recipe01 : Recipe = {
    id: 'recipe-001',
    name: "Filter coffee V60",
    brewMethodId: 'brew-001',
    drinkTypeId: 'drink-001',
    steps: ["step 1:", "step 2:"],
    iconUrl: '#'
}

const coffeeTypes : string[] = ['Espresso', 'Latte', 'Cappuccino', 'Americano'];
const drinkTypes : DrinkType[] = [drinktType1, drinktType2];
const recipes : Recipe[] = [recipe01];
const brewMethods : BrewMethod[] = [brewMethod1, brewMethod2, brewMethod3];
 

app.get('/api/coffee', (_req: Request, res: Response) => {
  res.json(coffeeTypes);
});

app.get('/api/drinkTypes', (_req: Request, res: Response) => {
    res.json(drinkTypes);
});

app.get('/api/recipes', (_req: Request, res: Response) => {
    res.json(recipes);
});

app.get('/api/brewMethods', (_req: Request, res: Response) => {
    res.json(brewMethods);
});

app.listen(PORT, () => {
  console.log(`☕️ Coffee API draait op http://localhost:${PORT}`);
});

export default app; 
