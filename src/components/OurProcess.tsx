import React, { useEffect, useRef } from 'react';
import './OurProcess.css';

import step1Img from '../assets/vedano_fitting.png';
import step2Img from '../assets/vedano_suit_precision.png';
import step3Img from '../assets/vedano_fabric_selection.png';
import step4Img from '../assets/vedano_artisanal_craft.png';
import step5Img from '../assets/vedano_evening_wear.png';

const processSteps = [
  {
    num: '01',
    title: 'Initial Consultation',
    desc: 'First, you will be introduced to our expert-style consultants at the convenience of your home/office. They will spend some time with you to learn about your style preferences and show you what’s on offer. They will show you the different bespoke styles and the range of exclusive fabrics you can choose from.',
    img: step1Img
  },
  {
    num: '02',
    title: 'Design Your Bespoke',
    desc: 'You will then be introduced to the master cutter who will use his measuring methods to learn about your posture, looking to accentuate your best features. This will help him suggest the style, pattern and fit that will best suit you.',
    img: step2Img
  },
  {
    num: '03',
    title: 'Customise Your Details',
    desc: 'Be it your blazer, shirt, waistcoat, or trouser, this is the time when you can customise every little detail to your liking. You will be shown a variety of options such as thread colours, linings, buttons, designs, cuts, and a lot more. Conversations about these details can be as wide-ranging or as simple as you like.',
    img: step3Img
  },
  {
    num: '04',
    title: 'Made to measurements',
    desc: 'Our expert pattern makers will take your measurements as per your comfort and fit, for the best results. We promise the perfect fit – nothing less than excellence, be assured that your measurements will be saved for future requirements.',
    img: step4Img
  },
  {
    num: '05',
    title: 'Delivery & Judicious Follow up',
    desc: 'We hand deliver or even ship your garments to a location of your choosing. Our service doesn’t stop once the delivery is done. A team member will be in touch with you after a few weeks to ensure the suit is working well for you and if there are any further alterations required. Moreover, upon successful completion and delivery of your garments, your measurements and specifications are permanently stored in our system for future reference. This helps us minimise the lead time for repeat orders.',
    img: step5Img
  }
];

export const OurProcess: React.FC = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="process-page">
      <div className="process-hero">
        <h1 className="process-main-title fade-in-up">The Bespoke Experience</h1>
        <p className="process-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>How it works</p>
      </div>

      <div className="process-timeline">
        <div className="timeline-line"></div>
        {processSteps.map((step, idx) => (
          <div
            key={idx}
            className={`process-step ${idx % 2 === 0 ? 'left' : 'right'}`}
            ref={el => { stepRefs.current[idx] = el; }}
          >
            <div className="process-content-box">
              <span className="process-num">{step.num}</span>
              <h2 className="process-title">{step.title}</h2>
              <p className="process-desc">{step.desc}</p>
            </div>

            <div className="process-image-box">
              <div className="img-wrapper">
                <img src={step.img} alt={step.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="process-footer">
        <h2 className="fade-in-up">Experience the Journey</h2>
        <p className="fade-in-up" style={{ animationDelay: '0.2s' }}>Secure your entry into the world of Bespoke Vedano today.</p>
        <a href="/" className="back-home-btn fade-in-up" style={{ animationDelay: '0.4s' }}>Return Home</a>
      </div>
    </div>
  );
};
