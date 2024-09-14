import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './section-magic-ring.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionMagicRing(): React.ReactElement {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-magic-ring',
        start: 'top 65px',
        end: 'bottom 100%',
        scrub: 0.5
      }
    });

    timeline.set('.section-magic-ring .ring-svg', { yPercent: 80, scale: 5 });
    timeline.set('.section-magic-ring .ring-path', {
      stroke: '#d7a85b',
      strokeWidth: 2
    });

    timeline.to('.section-magic-ring .ring-path', {
      strokeDasharray: '0% 0% 220%',
      duration: 0.5
    });

    timeline.to('.section-magic-ring .ring-svg', {
      yPercent: 0,
      scale: 0.8,
      duration: 0.5
    });
    timeline.to(
      '.section-magic-ring .ring-path',
      { stroke: '#000000', strokeWidth: 8, duration: 0.5 },
      '<'
    );
    timeline.to(
      '.section-magic-ring .ring-circle',
      { opacity: 1, duration: 0.5 },
      '<'
    );

    timeline.to('.section-magic-ring .title', { opacity: 1, duration: 0.5 });

    timeline.fromTo(
      '.section-magic-ring .subtitle',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    timeline.to('.section-magic-ring .section-wrapper', {
      yPercent: -5,
      duration: 1
    });
    timeline.fromTo(
      '.section-magic-ring .intro',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '<'
    );
  });

  return (
    <section className="section-magic-ring">
      <div className="section-wrapper">
        <svg
          className="ring-svg"
          width="162px"
          height="146px"
          viewBox="0 0 162 146"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1536.000000, -479.000000)">
              <g transform="translate(1542.400000, 483.800000)">
                <ellipse
                  className="ring-path"
                  stroke="#000000"
                  strokeWidth="8"
                  strokeDasharray="0 220% 0"
                  transform="translate(74.844732, 68.400000) rotate(-240.000000) translate(-74.844732, -68.400000)"
                  cx="74.8447318"
                  cy="68.4"
                  rx="31.5406825"
                  ry="68.2132305"
                ></ellipse>
                <ellipse
                  className="ring-path"
                  stroke="#000000"
                  strokeWidth="8"
                  strokeDasharray="0 220% 0"
                  cx="74.8447318"
                  cy="68.4"
                  rx="31.4542843"
                  ry="68.4"
                ></ellipse>
                <ellipse
                  className="ring-path"
                  stroke="#000000"
                  strokeWidth="8"
                  strokeDasharray="0 220% 0"
                  transform="translate(74.844732, 68.400000) rotate(-300.000000) translate(-74.844732, -68.400000)"
                  cx="74.8447318"
                  cy="68.4"
                  rx="31.5406825"
                  ry="68.2132305"
                ></ellipse>
                <ellipse
                  className="ring-circle"
                  fill="#D7A85B"
                  cx="74.8447318"
                  cy="68.4"
                  rx="10.4847614"
                  ry="10.5230769"
                  opacity="0"
                ></ellipse>
              </g>
            </g>
          </g>
        </svg>
        <h2 className="title">MagicRing 信任环</h2>
        <p className="subtitle">智慧互联 再无界</p>
        <a className="intro" href="/">
          查看智慧互联产品适配列表
        </a>
      </div>
    </section>
  );
}

export default SectionMagicRing;
