import React from 'react';
import Header from '@/components/ui/header/Header';
import Form from '@/components/elements/home/Form';
import Services from '@/components/elements/home/Services';
import Advantages from '@/components/elements/home/Advantages';
import BestObjects from '@/components/elements/home/BestObjects';
import QuestionnaireForm from '@/components/elements/home/QuestionnaireForm';
import StepsProcess from '@/components/elements/home/StepsProcess';
import FAQ from '@/components/elements/home/FAQ';
import MapSection from '@/components/elements/home/MapSection';
import Footer from '@/components/ui/footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Form />
      <Services />
      <Advantages />
      <BestObjects />
      <QuestionnaireForm />
      <StepsProcess />
      <FAQ />
      <MapSection />
      <Footer />
    </div>
  );
};

export default HomePage;
