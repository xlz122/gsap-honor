import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-suggest.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionSuggest(): React.ReactElement {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-suggest .section-wrapper',
        start: 'top 65px',
        pin: true,
        scrub: 0.5
      }
    });

    timeline.set('.section-suggest .card-list-1', { xPercent: -50 });
    timeline.set('.section-suggest .card-list-2', { xPercent: 0 });

    timeline.to('.section-suggest .card-list-1', { xPercent: 0 });
    timeline.to('.section-suggest .card-list-2', { xPercent: -50 }, '<');
  });

  return (
    <section className="section-suggest">
      <div className="section-wrapper">
        <div className="suggest-info">
          <h2 className="title">系统级卡片建议</h2>
          <p className="intro">基于运动场景智能推荐 300+个系统级卡片建议。</p>
        </div>
        <div className="suggest-content">
          <div className="card-list card-list-1">
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-01.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-02.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-03.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-04.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-05.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-06.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-07.png')}
              alt=""
            />
          </div>
          <div className="card-list card-list-2">
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-01.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-02.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-03.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-04.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-05.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-06.png')}
              alt=""
            />
            <img
              className="card"
              src={getImageUrl('assets/section-suggest/card-07.png')}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSuggest;
