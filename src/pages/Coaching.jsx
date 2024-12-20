import React from "react";
import CoachingHero from "../components/coaching/CoachingHero";
import CoachingPlans from "../components/coaching/CoachingPlans";
import CoachingFeatures from "../components/coaching/CoachingFeatures";
import CoachingTestimonials from "../components/coaching/CoachingTestimonials";
import Footer from "../components/Footer";
const Coaching = () => {
  return (
    <div>
      <CoachingHero />
      <CoachingPlans />
      <CoachingFeatures />
      <CoachingTestimonials />
      <Footer/>
    </div>
  );
};

export default Coaching;
