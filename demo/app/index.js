import './styles.scss'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Routes,
  Link,
  Navigate,
 } from 'react-router-dom'

 import Main from './demo-main/index.js';
import Performance from './demo-performance';
import TreeGroups from './demo-tree-groups';
import LinkedTimelines from './demo-linked-timelines';
import ElementResize from './demo-element-resize';
import Renderers from './demo-renderers';
import VerticalClasses from './demo-vertical-classes';
import CustomItems from './demo-custom-items';
import CustomHeaders from './demo-headers';
import CustomInfoLabel from './demo-custom-info-label';
import ControlledSelect from './demo-controlled-select';
import ControlledScrolling from './demo-controlled-scrolling';

const demos = {
  Main: <Main />,
  Performance: <Performance />,
  TreeGroups: <TreeGroups />,
  LinkedTimelines: <LinkedTimelines />,
  ElementResize: <ElementResize />,
  Renderers: <Renderers />,
  VerticalClasses: <VerticalClasses />,
  CustomItems: <CustomItems />,
  CustomHeaders: <CustomHeaders />,
  CustomInfoLabel: <CustomInfoLabel />,
  ControlledSelect: <ControlledSelect />,
  ControlledScrolling: <ControlledScrolling />,
}

function App() {
  return (
    <div>
      <div
        className={`demo-row${
          window.location.pathname.indexOf('sticky') >= 0 ? ' sticky' : ''
        }`}
      >
        Choose the demo:
        {Object.keys(demos).map(key => {
          return (
          <Link
            key={key}
            className={(window.location.pathname || '') === `${key}` ? 'selected' : ''}
            to={`${key}`}
          >
            {key}
          </Link>
        )
          })}
      </div>
      <div className="demo-demo">
        <Routes>
          {Object.keys(demos).map(key => (
            <Route key={`${key}`} path={`${key}`}  element={demos[key]} />
          ))}
          <Route path="*" element={<Navigate replace to={'Main'} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
