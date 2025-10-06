"use client";
import React, { useState, useEffect } from 'react';
import { getAlumni } from "@/api/serviceapi"; 
import styles from './HomeSeventhSection.module.css';



const HomeSeventhSection = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAlumniData = async () => {
      
      try {
   
        const response = await getAlumni();
      
        const dataArray = Array.isArray(response.data) 
            ? response.data 
            : (Array.isArray(response.data?.data) ? response.data.data : []); 
            
        setAlumniData(dataArray);

      } catch (error) {
        console.error("Error fetching alumni data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumniData();
  }, []);
  const repeataluminiData = alumniData.length > 0 
    ? [...alumniData, ...alumniData]
    : [];


  if (loading) {
    return <div className={styles.seventh}><p>Loading alumni...</p></div>;
  }

  if (alumniData.length === 0) {
     return <div className={styles.seventh}><p>No alumni data available.</p></div>;
  }
  
  return (
    <div className={styles.seventh}>
      <div className={styles.top}>
        <h2>Our Alumni</h2>
        <p>
          See why Students Value our Friendly Learning Community. Become part of ALO Educational Hub and Experience the Difference Directly.
        </p>
      </div>

      <div className={styles.homePageCarousal}>
        <div className={styles.track}>
          {repeataluminiData.map((item, index) => (
            <div key={index} className={styles.homePageCarousalSplit}>
              <div className={styles.imageContainer}>
                <img
                
                  src={item.alumniImage} 
                  alt={item.alumniName}
                  className={styles.alumniImage}
                />
              </div>
              <div className={styles.cardContent}>
              
                <h5 className={styles.name}>{item.alumniName}</h5>
                <p className={styles.role}>{item.position}</p>
                <img
                  
                  src={item.companyLogo}
                  alt={item.companyName || "Company logo"}
                  className={styles.companyLogo}
                />
             
                <p className={styles.companyName}>{item.companyName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSeventhSection;