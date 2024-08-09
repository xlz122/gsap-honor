import React from 'react';
import Header from './header/Header';
import SectionHero from './section-hero/SectionHero';
import SectionTvc from './section-tvc/SectionTvc';
import SectionMagic from './section-magic/SectionMagic';
import SectionMagicRing from './section-magic-ring/SectionMagicRing';
import SectionConnect from './section-connect/SectionConnect';
import SectionNotice from './section-notice/SectionNotice';
import SectionDevice from './section-device/SectionDevice';
import SectionNote from './section-note/SectionNote';
// 第十一屏
import SectionMagicLive from './section-magic-live/SectionMagicLive';
import SectionService from './section-service/SectionService';
import SectionScene from './section-scene/SectionScene';
import SectionMagicText from './section-magic-text/SectionMagicText';
import SectionTurbo from './section-turbo/SectionTurbo';
import SectionTurboOS from './section-turbo-os/SectionTurboOS';
import SectionTurboGpu from './section-turbo-gpu/SectionTurboGpu';

function App(): React.ReactElement {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionTvc />
      <SectionMagic />
      <SectionMagicRing />
      <SectionConnect
        title={['三指上滑', '万物互联']}
        intro={[
          '进入控制中心，三指上滑，拖动图标触碰周围的荣耀设备，一步开展多设备协同；',
          '在App里，以上述相同操作，还可实现应用数据流转。'
        ]}
        videoURL={'assets/section-connect/s1.mp4'}
      />
      <SectionConnect
        title={['跨设备接续', '思路畅通无阻']}
        intro={[
          '在一台荣耀设备上已经展开的工作，',
          '能随着你切换到附近的荣耀设备上继续，',
          '让工作衔接无缝，思路畅通无阻。'
        ]}
        videoURL={'assets/section-connect/s2.mp4'}
      />
      <SectionConnect
        title={['一套键鼠', '多设备自成一套']}
        intro={[
          '在荣耀电脑管家中，可以发现周围五台荣耀设备；',
          '使用一套键鼠，同时控制其中任意三台，',
          '多设备协同无间，多资源跨屏拖拽。'
        ]}
        videoURL={'assets/section-connect/s3.mp4'}
      />
      <SectionNotice />
      <SectionDevice />
      <SectionNote />
      <SectionMagicLive />
      <SectionService />
      <SectionScene />
      <SectionMagicText />
      <SectionTurbo />
      <SectionTurboOS />
      <SectionTurboGpu />
    </>
  );
}

export default App;
