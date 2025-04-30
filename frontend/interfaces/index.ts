// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

// export type Coffee = {
//   name: string;
// };

export type Recipe = {
  id: string;
  name: string;
  brewMethodId: string;   
  drinkTypeId: string;    
  steps: string[];        
  iconUrl: string;
};

export type DrinkType = {
  id: string; 
  name: string;
  priceAtHome: number; // in centen
  priceAtCafe: number; // in centen
  recipeId: string;
  iconUrl: string;
};

export type BrewMethod = {
  id: string;        
  name: string;      
  iconUrl: string;   
};

// Je kan 1 drankje per keer bestellen
export type Order = {
  id: string;
  drinkTypeId: string;    
  brewMethodId: string;   
  tip: number;
  dateTimeOrder: number;
  comment: string;
};