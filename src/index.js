import React from 'react';
// import 'react-bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './firebase/userContext';

import MachiMachi from './pages/work/machimachi';
import NyanJump from './pages/work/nyanjump';
import Rogers from './pages/work/rogers';
import Fabcycle from './pages/work/fabcycle';
import Spark from './pages/work/spark';

import Gallery from './pages/gallery';
import FourOhFour from './pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />

        <Route path="work">
          <Route path="machimachi" element={<MachiMachi />} />
          <Route path="nyanjump" element={<NyanJump />} />
          <Route path="rogers" element={<Rogers />} />
          {/* <Route path="fabcycle" element={<Fabcycle />} /> */}
          <Route path="spark" element={<Spark />} />
          {/* <Route path="website" element={<Website />} /> */}
          {/* <Route path="gallery" element={<Gallery />} /> */}
        </Route>
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
      
    </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);

