// import React from 'react';
// import App from './App';
// import ReactDOM from 'react-dom/client';
// //import ReactDom from 'react-dom';
// //import { BrowserRouter as Router } from 'react-router-dom';

// // ReactDOM.render(
// //   <Router>
// //     <App></App>
// //   </Router>,
// //   document.getElementById('root')
// // );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';// eslint-disable-next-line
import { Provider } from 'react-redux';

import App from './App';
import 'antd/dist/reset.css';// eslint-disable-next-line
import store from './app/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>     
        <App></App>
      </Provider>
      {/* here Provider and store is used because of everything inside the app have acess to the store. */}
    </Router>
  </React.StrictMode>
);
