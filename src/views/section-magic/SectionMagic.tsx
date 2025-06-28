import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-magic.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionMagic(): React.ReactElement {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.section-magic',
      start: 'top center',
      scrub: 0.5,
      onToggle: ({ isActive }) => {
        if (!isActive) {
          gsap.to('.section-magic .title', {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: 'power1.inOut'
          });
          return;
        }

        gsap.fromTo(
          '.section-magic .title',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power1.inOut' }
        );
      }
    });
    ScrollTrigger.create({
      trigger: '.section-magic',
      start: 'top 30%',
      scrub: 0.5,
      onToggle: ({ isActive }) => {
        if (!isActive) {
          gsap.to('.section-magic .list', {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: 'power1.inOut'
          });
          return;
        }

        gsap.fromTo(
          '.section-magic .list',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power1.inOut' }
        );
      }
    });
  });

  return (
    <section className="section-magic">
      <div className="section-wrapper">
        <h2 className="title">4大技术加持 共筑新体验</h2>
        <ul className="list">
          <li className="item">
            <img
              className="cover"
              src={getImageUrl('/src/assets/section-magic/magic-ring.svg')}
              alt=""
            />
            <h3 className="subtitle">MagicRing 信任环</h3>
            <p className="intro">跨系统可信互联</p>
          </li>
          <li className="item">
            <img
              className="cover"
              src={getImageUrl('/src/assets/section-magic/magic-ring.svg')}
              alt=""
            />
            <h3 className="subtitle">Magic Live 智慧引擎</h3>
            <p className="intro">平台级AI能力</p>
          </li>
          <li className="item">
            <img
              className="cover"
              src={getImageUrl('/src/assets/section-magic/magic-ring.svg')}
              alt=""
            />
            <h3 className="subtitle">Turbo X 系统引擎</h3>
            <p className="intro">内核级底层性能增强</p>
          </li>
          <li className="item">
            <img
              className="cover"
              src={getImageUrl('/src/assets/section-magic/magic-ring.svg')}
              alt=""
            />
            <h3 className="subtitle">MagicGuard 荣耀安全</h3>
            <p className="intro">三重安全防护体系</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SectionMagic;
