import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-device.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTvc(): React.ReactElement {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.section-device',
      start: 'top 85%',
      onToggle: ({ isActive }) => {
        if (!isActive) {
          return;
        }

        const timeline = gsap.timeline();

        timeline.fromTo(
          '.section-device .title',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power1.inOut' }
        );
        timeline.fromTo(
          '.section-device .intro',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power1.inOut' }
        );

        timeline.fromTo(
          '.section-device .device-pc',
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power1.inOut' },
          0
        );
        timeline.fromTo(
          '.section-device .device-ipad',
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power1.inOut' },
          0.5
        );
        timeline.fromTo(
          '.section-device .device-mobile',
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: 'power1.inOut' },
          1
        );
      }
    });
  });

  return (
    <section className="section-device">
      <div className="section-wrapper">
        <div className="device-info">
          <h2 className="title">
            多端同步
            <br />
            随处可见
          </h2>
          <p className="intro">
            首发电脑版荣耀笔记，帮你更高效的笔记整理，更快速的笔记编辑。在荣耀手机、平板、电脑设备上，随时随处查看修改笔记。
          </p>
        </div>
        <div className="device">
          <img
            className="device-pc"
            src={getImageUrl('assets/section-device/s5-01.png')}
            alt=""
          />
          <img
            className="device-ipad"
            src={getImageUrl('assets/section-device/s5-02.png')}
            alt=""
          />
          <img
            className="device-mobile"
            src={getImageUrl('assets/section-device/s5-03.png')}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default SectionTvc;
