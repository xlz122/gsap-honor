import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-note.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionNote(): React.ReactElement {
  const stickyContentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const clientWidth = document.documentElement.clientWidth;
    const scrollWidth = stickyContentRef.current?.scrollWidth ?? 0;
    const offsetLeft = stickyContentRef.current?.offsetLeft ?? 0;

    gsap.to('.section-note .sticky-content', {
      scrollTrigger: {
        trigger: '.section-note',
        start: 'top 65px',
        end: 'bottom 100%',
        scrub: 0
      },
      x: -(scrollWidth + offsetLeft * 2 - clientWidth),
      ease: 'none'
    });

    gsap.to('.section-note .card-blur .card-content', {
      scrollTrigger: {
        trigger: '.section-note',
        start: 'top 65px',
        end: 'center 100%',
        scrub: 0
      },
      filter: 'blur(0px)',
      scale: 1,
      ease: 'none'
    });

    gsap.to('.section-note .card-offset', {
      scrollTrigger: {
        trigger: '.section-note',
        start: 'center center',
        end: 'bottom bottom',
        scrub: 0
      },
      x: -offsetLeft,
      ease: 'none'
    });
  });

  return (
    <section className="section-note">
      <div className="section-wrapper">
        <div className="sticky-content" ref={stickyContentRef}>
          <div className="card card-offset">
            <div className="card-content">
              <div className="cover-info">
                <h2 className="title">
                  精彩全收藏
                  <br />
                  兴趣永在线
                </h2>
                <p className="intro">
                  告诉你一个节省流量的妙招：
                  <br />
                  现在网页也能离线保存了。
                  <br />
                  把你的知识、视频永久收藏保存，
                  <br />
                  不论设备离线在线，
                  <br />
                  让你感兴趣的内容始终在线。
                </p>
              </div>
              <img
                className="cover"
                src={getImageUrl('assets/section-note/s2-01.jpg')}
                alt=""
              />
            </div>
          </div>
          <div className="card card-blur">
            <div className="card-content">
              <div className="cover-info">
                <h2 className="title">
                  知音笔记
                  <br />
                  一触即达
                </h2>
                <p className="intro">
                  录音关联笔记，点击笔记，
                  <br />
                  自动跳转到相应的录音片段。
                  <br />
                  回顾会议、复习课程、随心批注更高效。
                </p>
              </div>
              <img
                className="cover"
                src={getImageUrl('assets/section-note/s2-01.jpg')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionNote;
