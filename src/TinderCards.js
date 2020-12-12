import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import axios from './axios.js';


const TinderCards = () => {
  const [people, setPeople] = useState([]);

  //similar to componentDidMount, a hook needs to be imported from react
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axios.get('/tinder/cards');

        setPeople(req.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [])

  return (
    <div className='tinderCards'>
      <div className='tinderCards_cardContainer'>
        {people.map(person => (
          <TinderCard
          className='swipe'
          key={person.name}
          preventSwipe={['up', 'down']}
          // onSwipe={(dir) => swipe(dir, person.name)}
          // onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
            style={{ backgroundImage: `url(${person.url})` }}
            className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards;