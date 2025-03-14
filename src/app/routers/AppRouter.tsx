import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { pagesPaths } from 'shared/paths';
import { GalleryPage } from 'pages/GalleryPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={pagesPaths.gallery} replace />} />
        <Route path={pagesPaths.gallery} element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
};
