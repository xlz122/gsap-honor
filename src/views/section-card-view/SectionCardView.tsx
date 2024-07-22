import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-card-view.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionCardView(): React.ReactElement {
  const stickyContentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const clientWidth = document.documentElement.clientWidth;
    const scrollWidth = stickyContentRef.current?.scrollWidth ?? 0;
    const offsetLeft = stickyContentRef.current?.offsetLeft ?? 0;

    gsap.to('.section-card-view .sticky-content', {
      scrollTrigger: {
        trigger: '.section-card-view',
        start: 'top 65px',
        end: 'bottom 100%',
        scrub: 0
      },
      x: -(scrollWidth + offsetLeft * 2 - clientWidth),
      ease: 'none'
    });

    gsap.to('.section-card-view .card-offset', {
      scrollTrigger: {
        trigger: '.section-card-view',
        start: 'top top',
        end: 'bottom 100%',
        scrub: 0
      },
      x: -offsetLeft,
      ease: 'none'
    });

    gsap.to('.section-card-view .card-blur .card-content', {
      scrollTrigger: {
        trigger: '.section-card-view',
        start: 'top 65px',
        end: 'center 100%',
        scrub: 0
      },
      filter: 'blur(0px)',
      scale: 1,
      ease: 'none'
    });
  });

  return (
    <section className="section-card-view">
      <div className="section-wrapper">
        <div className="sticky-content" ref={stickyContentRef}>
          <div className="card card-offset">
            <div className="card-content">
              <div className="image-info">
                <h2 className="title">
                  重要不错过
                  <br />
                  重在不打扰
                </h2>
                <p className="intro">
                  直接在当前使用的荣耀设备上，
                  <br />
                  支持定制查看和回复所有手机通知消息。
                  <br />
                  重要信息不容错过，专注工作不被打扰1。
                </p>
              </div>
              <img
                className="cover"
                src={getImageUrl('assets/section-card-view/s4-01-poster.jpg')}
                alt="intro"
              />
            </div>
          </div>
          <div className="card card-blur">
            <div className="card-content card-content-blur">
              <div className="image-info">
                <h2 className="title">
                  来电不漏接
                  <br />
                  思考不中断
                </h2>
                <p className="intro">
                  在当前使用的荣耀设备上接打电话，
                  <br />
                  让重要来电不漏接，专注效率不中断1。
                </p>
              </div>
              <img
                className="cover"
                src={getImageUrl('assets/section-card-view/s4-02-poster.jpg')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionCardView;
