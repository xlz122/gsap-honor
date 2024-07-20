import React from 'react';
import Header from './header/Header';
import SectionHero from './section-hero/SectionHero';
import SectionTvc from './section-tvc/SectionTvc';
import SectionMagic from './section-magic/SectionMagic';
import SectionMagicRing from './section-magic-ring/SectionMagicRing';

function App(): React.ReactElement {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionTvc />
      <SectionMagic />
      <SectionMagicRing />
    </>
  );
}

export default App;
