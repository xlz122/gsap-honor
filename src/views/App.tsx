import React from 'react';
import Header from './header/Header';
import SectionHero from './section-hero/SectionHero';
import SectionTvc from './section-tvc/SectionTvc';

function App(): React.ReactElement {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionTvc />
    </>
  );
}

export default App;
