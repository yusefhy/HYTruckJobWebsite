import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobPage from './components/JobPage';
import PrivacyPage from './components/PrivacyPage';
import type { Lang } from './translations';
import { langPaths } from './translations';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/privacy" element={<PrivacyPage />} />
        {(Object.entries(langPaths) as [Lang, string][]).map(([lang, path]) => (
          <Route key={lang} path={path} element={<JobPage lang={lang} />} />
        ))}
        <Route path="*" element={<JobPage lang="es" />} />
      </Routes>
    </BrowserRouter>
  );
}
