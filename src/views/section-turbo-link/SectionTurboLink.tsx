import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-turbo-link.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTurboLink(): React.ReactElement {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-turbo-link .section-wrapper',
        start: 'top 65px',
        pin: true,
        scrub: 0.5
      }
    });

    const wrapperHeight = wrapperRef.current?.clientHeight ?? 0;
    const headlineHeight = headlineRef.current?.clientHeight ?? 0;
    const headlineOffsetTop = headlineRef.current?.offsetTop ?? 0;

    timeline.set('.section-turbo-link .headline', {
      y: wrapperHeight / 2 - headlineHeight / 2 - headlineOffsetTop
    });
    timeline.set('.section-turbo-link .section-content', {
      y: wrapperHeight - headlineOffsetTop
    });
    timeline.set('.section-turbo-link .headline-wrapper', { scale: 0.666667 });

    timeline.fromTo(
      '.section-turbo-link .headline-wrapper .mask',
      {
        '--gradient-left': '50%',
        '--gradient-right': '50%'
      },
      {
        '--gradient-left': '0%',
        '--gradient-right': '100%'
      }
    );

    timeline.from('.section-turbo-link .fill-top', { xPercent: 100 });
    timeline.from('.section-turbo-link .fill-bottom', { xPercent: -100 }, '<');
    timeline.fromTo(
      '.section-turbo-link .headline-wrapper .mask',
      { autoAlpha: 1 },
      { autoAlpha: 0 },
      '<'
    );

    timeline.to('.section-turbo-link .turbo-os', { scale: 0.4, opacity: 0.6 });
    timeline.to('.section-turbo-link .headline-wrapper', { scale: 1 }, '<');

    timeline.to('.section-turbo-link .headline', { y: 0, duration: 1.5 });
    timeline.to(
      '.section-turbo-link .section-content',
      { y: 0, duration: 1.5 },
      '<'
    );
  });

  return (
    <section className="section-turbo-link">
      <div className="section-wrapper" ref={wrapperRef}>
        <div className="headline" ref={headlineRef}>
          <div className="turbo-os">
            <div className="fill-top"></div>
            <div className="fill-bottom"></div>
            <img
              src={getImageUrl('assets/section-turbo-link/turbo-link.svg')}
              alt=""
            />
          </div>
          <div className="headline-wrapper">
            <div className="mask"></div>
            <div className="title">网络自主优选 通信稳定流畅</div>
          </div>
        </div>
        <div className="section-content">
          <img
            src={getImageUrl('assets/section-turbo-link/tower-white.svg')}
            alt=""
          />
          <div className="improved">
            <p className="subtitle">蜂窝网络数据卡顿率</p>
            <div className="ratio">
              <img
                src={getImageUrl('assets/section-turbo-link/arrow-down.svg')}
                alt=""
              />
              <p>83%</p>
            </div>
          </div>
          <img
            src={getImageUrl('assets/section-turbo-link/tower-blue.svg')}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default SectionTurboLink;
