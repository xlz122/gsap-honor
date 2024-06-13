import React from 'react';
import { getImageUrl } from '@/utils/utils';
import './section-tvc.scss';

function SectionTvc(): React.ReactElement {
  return (
    <section className="section-tvc">
      <div className="section-wrapper">
        <video autoPlay loop muted playsInline>
          <source
            type="video/mp4"
            src={getImageUrl('assets/section-tvc/tvc-glance.mp4')}
          />
        </video>
      </div>
    </section>
  );
}

export default SectionTvc;
