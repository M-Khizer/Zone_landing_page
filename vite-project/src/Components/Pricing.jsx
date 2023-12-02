import React from 'react';

const PricingColumns = () => {
  return (
    <>
        <div className='price-head'>
            <h1>The Right Plan For Your Business</h1>
            <p>Choose the perfect plan for your needs. Always flexible to grow</p>
        </div>
    <div className="pricing-container">
      {/* Pricing Column 1 - Left Side */}
      <div className="pricing-column left">
        <div>
            <h3>Standard</h3>
            <p>$59.99</p>
        </div>
       
        <ul>
         
        <li><span class="material-symbols-outlined">check_circle</span>One end products</li>
          <li><span class="material-symbols-outlined">check_circle</span>12 months updates </li>
          <li><span class="material-symbols-outlined">check_circle</span>6 months of support</li>
          <li><span class="material-symbols-outlined">check_circle</span>JavaScript version</li>
          <li><span class="material-symbols-outlined">check_circle</span>TypeScript version</li>
          <li><span class="material-symbols-outlined">check_circle</span>Design resources</li>
          <li><span class="material-symbols-outlined">check_circle</span>Commercial applications</li>
         
        
        </ul>

        <button>Choose Package</button>
      </div>

      {/* Pricing Column 2 - Middle (Front) */}
      <div className="pricing-column middle">
        <div>
            <h3>Plus</h3>
            <p>$39.99</p>
        </div>
       
        <ul>
        <li><span class="material-symbols-outlined">check_circle</span>One end products</li>
          <li><span class="material-symbols-outlined">check_circle</span>12 months updates </li>
          <li><span class="material-symbols-outlined">check_circle</span>6 months of support</li>
          <li><span class="material-symbols-outlined">check_circle</span>JavaScript version</li>
          <li><span class="material-symbols-outlined">check_circle</span>TypeScript version</li>
          <li><span class="material-symbols-outlined">check_circle</span>Design resources</li>
          <li><span class="material-symbols-outlined">check_circle</span>Commercial applications</li>
         </ul>
        <button>Choose Package</button>
      </div>

      {/* Pricing Column 3 - Right Side */}
      <div className="pricing-column right">
        <div>
            <h3>Extended</h3>
            <p>$59.99</p>
        </div>
       
        <ul>
            <li><span class="material-symbols-outlined">check_circle</span>One end products</li>
          <li><span class="material-symbols-outlined">check_circle</span>12 months updates </li>
          <li><span class="material-symbols-outlined">check_circle</span>6 months of support</li>
          <li><span class="material-symbols-outlined">check_circle</span>JavaScript version</li>
          <li><span class="material-symbols-outlined">check_circle</span>TypeScript version</li>
          <li><span class="material-symbols-outlined">check_circle</span>Design resources</li>
          <li><span class="material-symbols-outlined">check_circle</span>Commercial applications</li>
          </ul>
        <button>Choose Package</button>
      </div>
    </div>
    </>
  );
};

export default PricingColumns;
