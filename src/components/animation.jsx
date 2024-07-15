import React, { useEffect } from 'react';
import lottie from 'lottie-web';
export const ReactAnimation = ()=>{
    useEffect(() => {
        // Load Lottie animation when component mounts
        const anim = lottie.loadAnimation({
          container: document.getElementById('lottie-container'), // Refers to a div with id lottie-container
          renderer: 'svg', // Use svg renderer
          loop: false,
          autoplay: true,
          path: 'https://lottie.host/492fa2c2-af46-43ff-afe7-afca96763063/Q4ymixhghl.json' // Replace with your Lottie animation JSON URL
        });
    
        return () => {
          // Clean up animation on component unmount
          anim.destroy();
        };
      }, []); // Empty dependency array ensures useEffect runs only once
    
      return (
        <div id="lottie-container" style={{ width: '550px', height: '550px' }}>
          {/* Placeholder for Lottie animation */}
        </div>
      );

  };
  