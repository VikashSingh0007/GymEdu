import React from 'react';
import About from '../components/home/About.jsx';
import FAQ from '../components/home/FAQ.jsx';
import FlashyComponent from '../components/home/FlashyComponent.jsx';
import SubscribeSection from '../components/home/SubscribeSection.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/home/ContactForm.jsx';
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
