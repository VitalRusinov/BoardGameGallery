import { FC } from "react";
import { Gallery } from "widgets/Gallery";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import "./GalleryPage.scss";


export const GalleryPage: FC = () => {
  return (
    <div className="gallery-page">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
};

