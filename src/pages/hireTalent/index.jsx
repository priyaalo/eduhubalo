"use client";
import React, { Fragment, useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HireHeroSection from '@/sections/hireTalentSection/HeroSection/HireHeroSection';
import HubSection  from '@/sections/hireTalentSection/HubSection/HubSection';
import { ValueSection } from '@/sections/hireTalentSection/ValueSection/ValueSection';
import WhySection from '@/sections/hireTalentSection/WhySection/WhySection';
import HireTalentModal from "@/sections/hireTalentSection/HireTalentModal/HireTalentModal";

const HireTalent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Fragment>
      <HireHeroSection />
      <HubSection openModal={openModal} />
      <ValueSection />
      <WhySection openModal={openModal} />
      <HireTalentModal isOpen={isOpen} closeModal={closeModal} />
      <ToastContainer position="top-right" autoClose={1000} />
    </Fragment>
  )
}

export default HireTalent;
