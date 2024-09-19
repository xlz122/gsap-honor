import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-service.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionService(): React.ReactElement {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-service',
        start: 'top 50%',
        end: 'bottom 100%',
        scrub: 0.5
      }
    });

    timeline.from('.section-service .image-content', { scale: 0.9 });

    timeline.to('.section-service .plan', { scale: 1.35 });
    timeline.to('.section-service .schedule', { scale: 1.35 }, '<');

    timeline.to('.section-service .left-info', { autoAlpha: 1 });
    timeline.to('.section-service .left-info', { autoAlpha: 0 });

    timeline.to('.section-service .right-info', { autoAlpha: 1 });
    timeline.to('.section-service .plan', { autoAlpha: 0 }, '<');
    timeline.to('.section-service .schedule', { autoAlpha: 1 }, '<');
  });

  return (
    <section className="section-service">
      <div className="service-info">
        <h2 className="title">
          YOYO建议
          <br />
          多服务组合推荐 更懂你
        </h2>
        <p className="intro">
          YOYO 个人化服务场景更丰富，同时提供多场景下多个并行服务的组合推荐；
          <br />
          你需要的精准服务，一键直达，无需在APP内频繁操作。
        </p>
      </div>
      <div className="section-wrapper">
        <div className="sticky-content">
          <div className="image-info left-info">
            <h2 className="title">人因优化 顺畅出行</h2>
            <p className="intro">
              YOYO
              建议综合考虑你的当前位置、出发地天气、实时路况以及个人航旅习惯等多个因素，
              为你提供最适合的航旅出行建议，让航班出票、出发提醒、值机、登机等信息适时呈现。
            </p>
          </div>
          <div className="image-info right-info">
            <h2 className="title">安排不错 出行不错过</h2>
            <p className="intro">
              YOYO 在你出行前提示重要日程，
              <br />
              为你做好行程规划。
            </p>
          </div>
          <div className="image-content">
            <img
              className="mobile"
              src={getImageUrl('assets/section-service/s4-01.png')}
              alt=""
            />
            <img
              className="plan"
              src={getImageUrl('assets/section-service/s4-02.png')}
              alt=""
            />
            <img
              className="schedule"
              src={getImageUrl('assets/section-service/s4-03.png')}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionService;
