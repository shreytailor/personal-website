import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhotoPage from './components/PhotoPage/index.tsx';
import ImageCarousel from './components/ImageCarousel/index.tsx';

async function setup() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ImageCarousel />} />
          <Route
            path="landscape"
            element={
              <PhotoPage
                images={[
                  'https://images.unsplash.com/photo-1712337646541-d0c6f85447f8?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  'https://images.unsplash.com/photo-1712222243447-6838646ceba2?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  'https://plus.unsplash.com/premium_photo-1697729958605-b27137644fbf?q=80&w=4142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                ]}
              />
            }
          />
          <Route
            path="street"
            element={
              <PhotoPage
                images={[
                  'https://images.unsplash.com/photo-1712337646541-d0c6f85447f8?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  'https://images.unsplash.com/photo-1712222243447-6838646ceba2?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  'https://plus.unsplash.com/premium_photo-1697729958605-b27137644fbf?q=80&w=4142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                ]}
              />
            }
          />
          <Route
            path="portrait"
            element={
              <PhotoPage
                images={[
                  'https://images.unsplash.com/photo-1712337646541-d0c6f85447f8?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  'https://images.unsplash.com/photo-1712222243447-6838646ceba2?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  'https://plus.unsplash.com/premium_photo-1697729958605-b27137644fbf?q=80&w=4142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                ]}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

setup();
