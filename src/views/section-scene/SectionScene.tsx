import React from 'react';
import { getImageUrl } from '@/utils/utils';
import './section-scene.scss';

function SectionScene(): React.ReactElement {
  return (
    <section className="section-scene">
      <div className="section-wrapper">
        <div className="cover-info">
          <h2 className="title">YOYO建议 场景倍增</h2>
          <p className="intro">
            YOYO建议的服务场景更多，成为您出行、工作生活、娱乐等多个场景的贴心助理：
            <br />
            替您管理
            地铁通勤、无忧打卡、健康码、付款码、惬意观影、快递提醒、充电提醒等多个场景。
          </p>
        </div>
        <img
          className="cover"
          src={getImageUrl('assets/section-scene/s5-01.png')}
          alt=""
        />
      </div>
    </section>
  );
}

export default SectionScene;
