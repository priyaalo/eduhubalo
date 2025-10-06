"use client";
import React, { useState, useEffect } from "react";
import { getTestimonials } from "@/api/serviceapi"; 
import styles from "./HomeFifthSection.module.css";

const HomeFifthSection = () => {
  const MAX_VISIBLE = 4; 
  const [testimonials, setTestimonials] = useState([]);
  const [visibleCount, setVisibleCount] = useState(MAX_VISIBLE);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonials(); 
        const dataArray = Array.isArray(response.data) 
            ? response.data 
            : (Array.isArray(response.data?.data) ? response.data.data : []); 
            
        setTestimonials(dataArray); 
        
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials([]); 
        
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []); 

 
  const visibleTestimonials = testimonials.slice(0, visibleCount);


  const handleShowMore = () => {
    setVisibleCount((prev) => prev + MAX_VISIBLE);
  };

  return (
    <div className={styles.fifth}>
      <div className={styles.top}>
        <h1>Curious about what our students think?</h1>
        <p className={styles.top1}>
          Discover why Students Value our Supportive Learning Community.
          Experience the ALO Educational Hub and See the Difference Yourself.
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.card}>
          {loading ? (
            
            <p>Loading testimonials...</p>
          ) : (
          
            visibleTestimonials.map((item, index) => (
              <div className={styles.card1} key={index}>
                <video
                  src={item.videoURL} 
                  muted
                  loop 
                  playsInline 
                  className={styles.video}

                  onMouseEnter={(e) => e.target.play()} 
                poster={item.thumbnail}
                  onMouseLeave={(e) => e.target.pause()} 
                />
                
                <h3>{item.alumniName}</h3>
                <p>{item.position}</p>
                <p>{item.companyName}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {!loading && visibleCount < testimonials.length && (
        <div className={styles.button}>
          <button className={styles.more} onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeFifthSection;