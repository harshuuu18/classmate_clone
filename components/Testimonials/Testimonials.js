import React from "react";
import TestimonialCard from "./TestimonialCard";


function Testimonials() {
  return (
    <div className="testimonials">
      <i class="ri-arrow-left-s-fill" style={{ fontSize: "80px" }}></i>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <i class="ri-arrow-right-s-fill" style={{ fontSize: "80px" }}></i>
    </div>
  );
}

export default Testimonials;
