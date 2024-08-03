import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getImageUrl } from '@/utils/utils';
import './section-connect.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  title: string[];
  intro: string[];
  videoURL: string;
};

function SectionConnect(props: Props): React.ReactElement {
  const connectRef = useRef<HTMLDivElement | null>(null);
  const videoInfoRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: connectRef.current,
      start: 'top 70%',
      onToggle: ({ isActive }) => {
        if (!isActive) {
          gsap.to(videoInfoRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5
          });
          return;
        }

        gsap.fromTo(
          videoInfoRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
      }
    });
    ScrollTrigger.create({
      trigger: connectRef.current,
      start: 'top center',
      onToggle: ({ isActive }) => {
        if (!isActive) {
          gsap.to(videoRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5
          });
          return;
        }

        gsap.fromTo(
          videoRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
      }
    });
  });

  return (
    <section className="section-connect" ref={connectRef}>
      <div className="section-wrapper">
        <div className="video-info" ref={videoInfoRef}>
          <h2
            className="title"
            dangerouslySetInnerHTML={{ __html: props.title?.join?.('<br />') }}
          ></h2>
          <h2
            className="intro"
            dangerouslySetInnerHTML={{ __html: props.intro?.join?.('<br />') }}
          ></h2>
        </div>
        <video className="video" autoPlay playsInline loop muted ref={videoRef}>
          <source src={getImageUrl(props.videoURL)} />
        </video>
      </div>
    </section>
  );
}

export default SectionConnect;
