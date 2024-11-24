import React from 'react';
import About from '../components/About';
import FAQ from '../components/FAQ';
import FlashyComponent from '../components/FlashyComponent.jsx';
import SubscribeSection from '../components/SubscribeSection.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
export default function Home() {
  return (
    <div>
        
        <FlashyComponent />
        
      {/* About Section */}
      <About />
      <ContactForm/>
      <SubscribeSection/>
      {/* FAQ Section */}
      <FAQ />
      <Footer/>
    </div>
  );
}
