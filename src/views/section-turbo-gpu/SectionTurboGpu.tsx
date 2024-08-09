import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-turbo-gpu.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTurboGpu(): React.ReactElement {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-turbo-gpu .section-wrapper',
        start: 'top 65px',
        pin: true,
        scrub: 0.5
      }
    });

    const wrapperHeight = wrapperRef.current?.clientHeight ?? 0;
    const headlineHeight = headlineRef.current?.clientHeight ?? 0;
    const headlineOffsetTop = headlineRef.current?.offsetTop ?? 0;

    timeline.set('.section-turbo-gpu .headline', {
      y: wrapperHeight / 2 - headlineHeight / 2 - headlineOffsetTop
    });
    timeline.set('.section-turbo-gpu .section-content', {
      y: wrapperHeight - headlineOffsetTop
    });
    timeline.set('.section-turbo-gpu .headline-wrapper', { scale: 0.666667 });

    timeline.fromTo(
      '.section-turbo-gpu .headline-wrapper .mask',
      {
        '--gradient-left': '50%',
        '--gradient-right': '50%'
      },
      {
        '--gradient-left': '0%',
        '--gradient-right': '100%'
      }
    );

    timeline.from('.section-turbo-gpu .fill-top', { xPercent: 100 });
    timeline.from('.section-turbo-gpu .fill-bottom', { xPercent: -100 }, '<');
    timeline.fromTo(
      '.section-turbo-gpu .headline-wrapper .mask',
      { autoAlpha: 1 },
      { autoAlpha: 0 },
      '<'
    );

    timeline.to('.section-turbo-gpu .turbo-os', { scale: 0.4, opacity: 0.6 });
    timeline.to('.section-turbo-gpu .headline-wrapper', { scale: 1 }, '<');

    timeline.to('.section-turbo-gpu .headline', { y: 0, duration: 1.5 });
    timeline.to(
      '.section-turbo-gpu .section-content',
      { y: 0, duration: 1.5 },
      '<'
    );
  });

  return (
    <section className="section-turbo-gpu">
      <div className="section-wrapper" ref={wrapperRef}>
        <div className="headline" ref={headlineRef}>
          <div className="turbo-os">
            <div className="fill-top"></div>
            <div className="fill-bottom"></div>
            <img
              src={getImageUrl('assets/section-turbo-gpu/turbo-gpu.svg')}
              alt=""
            />
          </div>
          <div className="headline-wrapper">
            <div className="mask"></div>
            <div className="title">帧率更高更稳定</div>
          </div>
        </div>
        <div className="section-content">
          <img src={getImageUrl('assets/section-turbo-gpu/s7-01.png')} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SectionTurboGpu;
