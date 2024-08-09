import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-turbo-os.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTurboOS(): React.ReactElement {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-turbo-os .section-wrapper',
        start: 'top 65px',
        pin: true,
        scrub: 0.5
      }
    });

    const wrapperHeight = wrapperRef.current?.clientHeight ?? 0;
    const headlineHeight = headlineRef.current?.clientHeight ?? 0;
    const headlineOffsetTop = headlineRef.current?.offsetTop ?? 0;

    timeline.set('.section-turbo-os .headline', {
      y: wrapperHeight / 2 - headlineHeight / 2 - headlineOffsetTop
    });
    timeline.set('.section-turbo-os .section-content', {
      y: wrapperHeight - headlineOffsetTop
    });
    timeline.set('.section-turbo-os .headline-wrapper', { scale: 0.666667 });

    timeline.fromTo(
      '.section-turbo-os .headline-wrapper .mask',
      {
        '--gradient-left': '50%',
        '--gradient-right': '50%'
      },
      {
        '--gradient-left': '0%',
        '--gradient-right': '100%'
      }
    );

    timeline.from('.section-turbo-os .fill-top', { xPercent: 100 });
    timeline.from('.section-turbo-os .fill-bottom', { xPercent: -100 }, '<');
    timeline.fromTo(
      '.section-turbo-os .headline-wrapper .mask',
      { autoAlpha: 1 },
      { autoAlpha: 0 },
      '<'
    );

    timeline.to('.section-turbo-os .turbo-os', { scale: 0.4, opacity: 0.6 });
    timeline.to('.section-turbo-os .headline-wrapper', { scale: 1 }, '<');

    timeline.to('.section-turbo-os .headline', { y: 0, duration: 1.5 });
    timeline.to(
      '.section-turbo-os .section-content',
      { y: 0, duration: 1.5 },
      '<'
    );
  });

  return (
    <section className="section-turbo-os">
      <div className="section-wrapper" ref={wrapperRef}>
        <div className="headline" ref={headlineRef}>
          <div className="turbo-os">
            <div className="fill-top"></div>
            <div className="fill-bottom"></div>
            <img
              src={getImageUrl('assets/section-turbo-os/turbo-os.svg')}
              alt=""
            />
          </div>
          <div className="headline-wrapper">
            <div className="mask"></div>
            <div className="title">流畅升级 功耗更优</div>
          </div>
        </div>
        <div className="section-content">
          <div className="performance">
            <h3 className="subtitle">系统更流畅</h3>
            <div className="improved">
              <div className="improved-item">
                <p className="intro">应用滑动卡顿率</p>
                <div className="ratio">
                  <img
                    src={getImageUrl('assets/section-turbo-os/arrow-down.svg')}
                    alt=""
                  />
                  <p>43%</p>
                </div>
              </div>
              <div className="improved-item">
                <p className="intro">应用启动响应时延</p>
                <div className="ratio">
                  <img
                    src={getImageUrl('assets/section-turbo-os/arrow-down.svg')}
                    alt=""
                  />
                  <p>29%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="performance">
            <h3 className="subtitle">续航更持久</h3>
            <div className="improved">
              <div className="improved-item">
                <p className="intro">视频聊天</p>
                <div className="ratio">
                  <img
                    src={getImageUrl('assets/section-turbo-os/arrow-up.svg')}
                    alt=""
                  />
                  <p>
                    20
                    <span> 分钟</span>
                  </p>
                </div>
              </div>
              <div className="improved-item">
                <p className="intro">刷短视频</p>
                <div className="ratio">
                  <img
                    src={getImageUrl('assets/section-turbo-os/arrow-up.svg')}
                    alt=""
                  />
                  <p>
                    30
                    <span> 分钟</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTurboOS;
