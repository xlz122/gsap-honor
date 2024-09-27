import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './section-flow-design.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionFlowDesign(): React.ReactElement {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-flow-design .section-wrapper',
        start: 'top 65px',
        pin: true,
        scrub: 0.5
      }
    });

    timeline.to('.section-flow-design .title', { opacity: 1 });

    timeline.fromTo(
      '.section-flow-design .subtitle',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  });

  return (
    <section className="section-flow-design">
      <div className="section-wrapper">
        <h2 className="title">Flow Design</h2>
        <p className="subtitle">自然交互 随心体验</p>
      </div>
    </section>
  );
}

export default SectionFlowDesign;
