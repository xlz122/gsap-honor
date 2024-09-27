import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './section-magic-guard.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTurbo(): React.ReactElement {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-magic-guard .section-wrapper',
        start: 'top 65px',
        pin: true,
        scrub: 0.5
      }
    });

    timeline.set('.section-magic-guard .guard-svg', {
      yPercent: 50,
      scale: 3.6
    });
    timeline.set('.section-magic-guard .guard-path', { strokeWidth: 2 });
    timeline.set('.section-magic-guard .path-icon', { opacity: 0 });

    timeline.to('.section-magic-guard .path-line', {
      strokeDasharray: '0% 0% 260%',
      duration: 0.5
    });

    timeline.to('.section-magic-guard .path-line', {
      stroke: '#ffffff',
      duration: 0.5
    });
    timeline.to(
      '.section-magic-guard .path-icon',
      { opacity: 1, duration: 0.5 },
      '<'
    );

    timeline.to('.section-magic-guard .guard-svg', {
      yPercent: 0,
      scale: 0.8,
      duration: 0.5
    });
    timeline.to(
      '.section-magic-guard .guard-path',
      { strokeWidth: 9, duration: 0.5 },
      '<'
    );

    timeline.to('.section-magic-guard .title', { opacity: 1, duration: 0.5 });

    timeline.fromTo(
      '.section-magic-guard .subtitle',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    timeline.to('.section-magic-guard .section-wrapper', {
      yPercent: -5,
      duration: 1
    });
    timeline.fromTo(
      '.section-magic-guard .intro',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '<'
    );
  });

  return (
    <section className="section-magic-guard">
      <div className="section-wrapper">
        <svg
          className="guard-svg"
          width="180px"
          height="180px"
          viewBox="0 0 180 180"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2263.000000, -669.000000)">
              <g transform="translate(2263.000000, 669.000000)">
                <rect x="0" y="0" width="180" height="180"></rect>
                <path
                  className="guard-path path-line"
                  d="M151.182961,101.417221 C151.182961,75.6528841 151.182961,51.5672821 151.182961,29.1604146 L89.9829612,18.0391451 L28.7829612,29.1604146 C28.7829612,51.5672821 28.7829612,75.6528841 28.7829612,101.417221 C28.7829612,127.181557 49.1829612,147.388865 89.9829612,162.039145 C130.782961,147.388865 151.182961,127.181557 151.182961,101.417221 Z"
                  stroke="#d7a85b"
                  strokeWidth="9"
                  strokeDasharray="0 260% 0"
                ></path>
                <path
                  className="guard-path path-icon"
                  d="M68.4,85.1430969 L81.0472115,97.6305357 C81.8225916,98.3961204 83.0635635,98.4146531 83.8614592,97.6725636 L113.4,70.2 L113.4,70.2"
                  stroke="#DFB97C"
                  strokeWidth="9"
                  strokeLinecap="round"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <h2 className="title">MagicGuard 荣耀安全</h2>
        <p className="subtitle">科技有道 隐私至上</p>
        <a className="intro" href="/">
          了解更多
        </a>
      </div>
    </section>
  );
}

export default SectionTurbo;
