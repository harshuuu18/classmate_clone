import React from "react";


function TestimonialCard() {
  return (
    <div className="testimonialCard">
      <div className="upper">
        <p className="testimonial-content">
          <span className="quotes">"</span>
          "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nos trud exerci tation
          ullamcorper.
          <span className="quotes">"</span>
        </p>
      </div>
      <div className="testimonial-image">
      </div>
      <div className="lower">
        <div className="stars">
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
        </div>
        <h5 className="testimonial-name">David Miller</h5>
        <em><h6 className="testimonial-subname">Customer</h6></em>
      </div>
    </div>
  );
}

export default TestimonialCard;
