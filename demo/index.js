import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-calendar-timeline-css';
import App from './app'

// const render = AppToRender => {
//   ReactDOM.render(<AppToRender />, document.getElementById('root'))
// }

// render(App)

// if (module.hot) {
//   module.hot.accept('./app', () => {
//     const NextApp = require('./app').default

//     render(NextApp)
//   })
// }

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
