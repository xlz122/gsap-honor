import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-hero.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionHero(): React.ReactElement {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-hero .section-wrapper',
        toggleClass: 'animated'
      }
    });
  });

  return (
    <section className="section-hero">
      <div className="section-wrapper">
        <img
          className="cover"
          src={getImageUrl('assets/section-hero/magic-kv.png')}
          alt=""
        />
        <div className="content">
          <img
            className="magic-os"
            src={getImageUrl('assets/section-hero/magic-os.svg')}
            alt=""
          />
          <h2 className="slogan">越用越好用 越用越懂你</h2>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
