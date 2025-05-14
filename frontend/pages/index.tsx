'use client';

import { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import SliderItem from "../components/SliderItem";
import { DrinkType, BrewMethod } from "../interfaces";
import styles from '../styles/Home.module.css';
import { MailButton } from '../components/MailButton';


const IndexPage = () => {
  const [drinkTypes, setDrinkTypes] = useState<DrinkType[]>([]);
  const [brewMethods, setBrewMethods] = useState<BrewMethod[]>([]);
  const [selectedDrinkTypeId, setSelectedDrinkTypeId] = useState<string | null>(null);
  const [selectedBrewMethodId, setSelectedBrewMethodId] = useState<string | null>(null);
  const selectedDrinkType = drinkTypes.find(x => x.id === selectedDrinkTypeId);
  const selectedBrewMethod = brewMethods.find(x => x.id === selectedBrewMethodId);


  useEffect(() => {
    const fetchData = async () => {
      // TODO:  const drinksRes = await fetch('http://localhost:3001/api/drinkTypes');
      const drinksRes = await fetch('/drinkTypes');
      const brewRes = await fetch('/brewMethods');

      const drinks = await drinksRes.json();
      const brews = await brewRes.json();

      setDrinkTypes(drinks);
      setBrewMethods(brews);
    };

    fetchData();
  }, []);

  return (
    <Layout title="cafe Thuis">
      <h1>Home barista</h1>
      <p className="">Bestel hier je koffie bij PimNynke thuis!</p>



      <h2 className="slider-title">Kies je drankje</h2>
      <div className={styles.sliderContainer}>
        {drinkTypes.map((item) => (
          <SliderItem
            key={item.id}
            item={item}
            isSelected={selectedDrinkTypeId === item.id}
            onClick={() => setSelectedDrinkTypeId(item.id)}
          />
        ))}
      </div>

      <h2 className="slider-title">Zetmethode</h2>
      <div className={styles.sliderContainer}>
        {brewMethods.map((item) => (
          <SliderItem
            key={item.id}
            item={item}
            isSelected={selectedBrewMethodId === item.id}
            onClick={() => setSelectedBrewMethodId(item.id)}
          />
        ))}
      </div>
      
      {selectedDrinkType 
        && selectedBrewMethod 
        && (
          <MailButton
          drinkType={selectedDrinkType.name}
          brewMethod={selectedBrewMethod.name}
          />
        )  
      }
    </Layout>
  );
};

export default IndexPage;
