import React from 'react';
import './header.scss';

function Header(): React.ReactElement {
  return (
    <div className="header">
      <div className="header-wrapper">
        <i className="logo"></i>
        <ul className="nav-list">
          <li className="item">手机</li>
          <li className="item">笔记本</li>
          <li className="item">平板</li>
          <li className="item">穿戴</li>
          <li className="item">智慧屏</li>
          <li className="item">更多产品</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
