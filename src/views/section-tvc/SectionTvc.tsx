import React from 'react';
import { getImageUrl } from '@/utils/utils';
import './section-tvc.scss';

function SectionTvc(): React.ReactElement {
  return (
    <section className="section-tvc">
      <div className="section-wrapper">
        <video className="video" autoPlay playsInline loop muted>
          <source src={getImageUrl('/src/assets/section-tvc/tvc-glance.mp4')} />
        </video>
      </div>
    </section>
  );
}

export default SectionTvc;
