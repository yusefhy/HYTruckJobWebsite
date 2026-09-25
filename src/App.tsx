import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobPage from './components/JobPage';
import type { Lang } from './translations';
import { langPaths } from './translations';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {(Object.entries(langPaths) as [Lang, string][]).map(([lang, path]) => (
          <Route key={lang} path={path} element={<JobPage lang={lang} />} />
        ))}
        <Route path="*" element={<JobPage lang="es" />} />
      </Routes>
    </BrowserRouter>
  );
}
