import React from 'react';
import Header from '../Header/Header';
import Tournaments from '../Tournament/Tournament';
import News from '../News/News';
import TestimonialPreview from '../Testimonial/TestimonialPreview';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Tournaments />
      <News />
      <TestimonialPreview />
      <Footer />
    </>
  );
}

export default Home;