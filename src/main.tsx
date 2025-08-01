import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ImageCategoryPage from './components/ImageCategoryPage';
import WorkPage from './components/WorkPage/index.tsx';
import { RootBootstrap } from './types.ts';
import NotFoundPage from './components/NotFoundPage/index.tsx';

async function getRootBootstrap(): Promise<RootBootstrap> {
  const response = await fetch(
    'https://personalwebsitebootstrap.shreym-tailor5734.workers.dev'
  );
  const json = await response.json();
  return json as RootBootstrap;
}

async function setup() {
  const { categories } = await getRootBootstrap();

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<WorkPage categories={categories} />}></Route>
          {categories.map((category, index) => (
            <Route
              key={index}
              path={category.path}
              element={<ImageCategoryPage category={category} />}
            ></Route>
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

setup();
