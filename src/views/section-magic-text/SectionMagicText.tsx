import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-magic-text.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionMagicText(): React.ReactElement {
  const stickyContentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const clientWidth = document.documentElement.clientWidth;
    const scrollWidth = stickyContentRef.current?.scrollWidth ?? 0;
    const offsetLeft = stickyContentRef.current?.offsetLeft ?? 0;

    gsap.to('.section-magic-text .sticky-content', {
      scrollTrigger: {
        trigger: '.section-magic-text',
        start: 'top 65px',
        end: `bottom +=${scrollWidth / 3}`,
        scrub: 0
      },
      x: -(scrollWidth + offsetLeft * 2 - clientWidth),
      ease: 'none'
    });

    gsap.to('.section-magic-text .card-blur-1 .card-content', {
      scrollTrigger: {
        trigger: '.section-magic-text',
        start: 'top 65px',
        end: 'center 100%',
        scrub: 0
      },
      filter: 'blur(0px)',
      scale: 1,
      ease: 'none'
    });

    gsap.to('.section-magic-text .card-blur-2 .card-content', {
      scrollTrigger: {
        trigger: '.section-magic-text',
        start: 'top -100%',
        end: 'bottom bottom',
        scrub: 0
      },
      filter: 'blur(0px)',
      scale: 1,
      ease: 'none'
    });
  });

  return (
    <section className="section-magic-text">
      <div className="section-wrapper">
        <h2 className="title">Magic 文本</h2>
        <div className="sticky-content" ref={stickyContentRef}>
          <div className="card">
            <div className="card-content">
              <div className="cover-info">
                <p className="subtitle">提取快 识别准</p>
                <p className="intro">
                  手机上任意界面的文字，用指关节圈选，
                  <br />
                  即可一步实现全局高精准提取。
                </p>
              </div>
              <img
                className="cover"
                src={getImageUrl('assets/section-magic-text/s6-01.jpg')}
                alt=""
              />
            </div>
          </div>
          <div className="card card-blur card-blur-1">
            <div className="card-content">
              <div className="cover-info">
                <p className="subtitle">生活服务 一点即达</p>
                <p className="intro">
                  智慧分析图片中的文本语义：电话座机、地址、快
                  <br />
                  递号、航班班次、身份证、邮箱、网址等信息，后
                  <br />
                  续操作一点即达。
                </p>
              </div>
              <img
                className="cover"
                src={getImageUrl('assets/section-magic-text/s6-02.jpg')}
                alt=""
              />
            </div>
          </div>
          <div className="card card-blur card-blur-2">
            <div className="card-content">
              <div className="cover-info">
                <p className="subtitle">翻页扫描</p>
                <p className="intro">
                  文档自动连拍扫描，超强去阴影，智能防止重复。
                  <br />
                  扫描导出的格式更丰富，支持图片、TXT、PDF。
                </p>
              </div>
              <img
                className="cover"
                src={getImageUrl('assets/section-magic-text/s6-02.jpg')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionMagicText;
