import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards.js';
import SwipeButtons from './SwipeButtons.js';

function App() {
  return (
    <div className="app">
      {/* HEADER / TOP*/}
      <Header />
      {/* INDER CARDS / MIDDLE*/}
      <TinderCards />
      <SwipeButtons />
      {/* SWIPE BUTTONS / BOTTOM */}
    </div>
  );
}

export default App;
