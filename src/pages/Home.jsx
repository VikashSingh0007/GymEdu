import React from 'react';
import About from '../components/About';
import FAQ from '../components/FAQ';
import FlashyComponent from '../components/FlashyComponent.jsx';
export default function Home() {
  return (
    <div>
        
        <FlashyComponent />
      {/* About Section */}
      <About />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
