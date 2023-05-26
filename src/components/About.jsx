import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { Tilt } from 'react-tilt';

import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

function ServiceCard({
  service, index, icon, title,
}) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450}}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

ServiceCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  service: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
       I have always been driven by curiosity and a refusal to shy away from unfamiliar territory. 
       Whenever faced with something I don&apos;t understand, I dive headfirst into the unknown. It was 
       during one of these ventures that I stumbled upon the captivating realm of programming. Its 
       infinite possibilities and constant evolution have fueled my passion and shaped me into the 
       determined full-stack engineer I am today. I embrace unfamiliar technologies without hesitation, 
       as they provide the perfect canvas for my insatiable thirst to explore the boundless world of programming.       
      </motion.p>

      <div className="mt-20 flex flex-wap gap-10 flex justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, 'about');
