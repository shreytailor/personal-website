import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FeaturedImageProps } from './components/FeaturedImage/index.tsx';

interface Bootstrap {
  featuredImage: FeaturedImageProps;
}

async function setup() {
  const request = await fetch(
    'https://personalwebsitebootstrap.shreym-tailor5734.workers.dev/'
  );
  const bootstrap = (await request.json()) as Bootstrap;

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App featuredImage={bootstrap.featuredImage} />
    </React.StrictMode>
  );
}

setup();
