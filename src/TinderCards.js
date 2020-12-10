import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://cdnassets.hw.net/03/ac/c043ba6040ba9d8e1d22240825b7/elon-musk-the-summit-2013.jpg'
    },
    {
      name: 'Jeff Bezos',
      url: 'https://voicebot.ai/wp-content/uploads/2019/08/jeff-bezos-headshot.jpg'
    }
  ])
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