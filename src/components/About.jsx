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
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
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
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.dev>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        I am a full-stack developer with a passion for building beautiful and
        I am a full-stack developer with a passion for building beautiful and
        I am a full-stack developer with a passion for building beautiful and
        I am a full-stack developer with a passion for building beautiful and
      </motion.p>

      <div className="mt-20 flex flex-wap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, 'about');