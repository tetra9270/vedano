const fs = require('fs');

let content = fs.readFileSync('src/components/AboutUs.tsx', 'utf-8');

// Imports
content = content.replace("import { useState, useEffect, useRef } from 'react';", "import { useState, useEffect, useRef } from 'react';\nimport { useLanguage } from '../context/LanguageContext';");
content = content.replace("export const AboutUs = () => {", "export const AboutUs = () => {\n  const { t } = useLanguage();");

// Replace strings
content = content.replace('<span className="section-subtitle">ABOUT VEDANO</span>', '<span className="section-subtitle">{t(\'about.subtitle\')}</span>');
content = content.replace('<h1 className="section-main-title">Bespoke, Made Accessible</h1>', '<h1 className="section-main-title">{t(\'about.mainTitle\')}</h1>');
content = content.replace('<h2 className="journey-h2">The Idea</h2>', '<h2 className="journey-h2">{t(\'about.ideaTitle\')}</h2>');

content = content.replace(/<p>\s*Bespoke tailoring has always carried a certain distance\. Not because of quality,\s*but because of how it’s been built—slow, layered, and often priced in a way that places it out of reach\.\s*<\/p>/g, '<p>{t(\'about.ideaP1\')}</p>');

content = content.replace(/<p>\s*At Vedano, we chose to question that structure\. What if the experience remained personal,\s*the fit remained precise, and the materials remained exceptional, but the system behind it became smarter\?\s*<\/p>/g, '<p>{t(\'about.ideaP2\')}</p>');

content = content.replace('<h2 className="journey-h2">THE HANDS BEHIND VEDANO</h2>', '<h2 className="journey-h2">{t(\'about.handsTitle\')}</h2>');
content = content.replace(/<p>\s*Behind every garment at Vedano is a level of experience that doesn’t come from training;\s*it comes from years of repetition, correction, and refinement\.\s*<\/p>/g, '<p>{t(\'about.handsP1\')}</p>');
content = content.replace(/<p>\s*Our craftsmen have spent decades in the discipline of tailoring\. Not just producing garments,\s*but understanding bodies, posture, movement, and the small adjustments most people never notice, but always feel\.\s*<\/p>/g, '<p>{t(\'about.handsP2\')}</p>');


content = content.replace('<h3 className="section-h3">Built Across Generations of Style</h3>', '<h3 className="section-h3">{t(\'about.generationsTitle\')}</h3>');
content = content.replace('<p>Their work isn’t limited to one school of tailoring. They’ve worked across:</p>', '<p>{t(\'about.generationsP1\')}</p>');
content = content.replace('<li>Traditional constructions</li>', '<li>{t(\'about.generationsL1\')}</li>');
content = content.replace('<li>Modern silhouettes</li>', '<li>{t(\'about.generationsL2\')}</li>');
content = content.replace('<li>Contemporary fits</li>', '<li>{t(\'about.generationsL3\')}</li>');
content = content.replace('<li>Classic proportions</li>', '<li>{t(\'about.generationsL4\')}</li>');
content = content.replace('<p>And more importantly, they understand how to bring these together, depending on the person wearing it.</p>', '<p>{t(\'about.generationsP2\')}</p>');
content = content.replace('<p>Because no single style works for everyone.</p>', '<p>{t(\'about.generationsP3\')}</p>');


content = content.replace('<h3 className="section-h3">Precision That Comes From Volume</h3>', '<h3 className="section-h3">{t(\'about.volumeTitle\')}</h3>');
content = content.replace('<p>When someone has worked on thousands of garments, their judgment changes.</p>', '<p>{t(\'about.volumeP1\')}</p>');
content = content.replace('<p>They don’t rely on templates.</p>', '<p>{t(\'about.volumeP2\')}</p>');
content = content.replace('<p>They don’t guess.</p>', '<p>{t(\'about.volumeP3\')}</p>');
content = content.replace('<p>They see what needs to be done almost immediately, where to adjust, where to hold structure, and where to let the fabric move.</p>', '<p>{t(\'about.volumeP4\')}</p>');
content = content.replace('<p>That level of instinct is what shapes the final result.</p>', '<p>{t(\'about.volumeP5\')}</p>');

content = content.replace('<h2 className="journey-h2">Why This Matters</h2>', '<h2 className="journey-h2">{t(\'about.whyMattersTitle\')}</h2>');
content = content.replace('<p>Accessible pricing means nothing without consistency.</p>', '<p>{t(\'about.whyMattersP1\')}</p>');
content = content.replace('<p>What makes Vedano work is not just the system, but the people behind it.</p>', '<p>{t(\'about.whyMattersP2\')}</p>');
content = content.replace('<p>The same hands that have delivered high-level tailoring for years are the ones shaping every piece here.</p>', '<p>{t(\'about.whyMattersP3\')}</p>');

content = content.replace('<h2 className="journey-h2 mt-60">The Result</h2>', '<h2 className="journey-h2 mt-60">{t(\'about.resultTitle\')}</h2>');
content = content.replace(/<p className="result-text">\s*Garments that feel considered from the first fitting\.<br \/>\s*Balanced\. Natural\. Precise\.<br \/>\s*Not because they were rushed, but because they were made by people who have done this long enough to get it right without excess\.\s*<\/p>/g, '<p className="result-text">{t(\'about.resultText1\')}<br />{t(\'about.resultText2\')}<br />{t(\'about.resultText3\')}</p>');

content = content.replace('<h2 className="journey-h2">What We Do Differently</h2>', '<h2 className="journey-h2">{t(\'about.doDiffTitle\')}</h2>');
content = content.replace('<p className="lead-text">We don’t dilute craftsmanship. We refine the way it’s delivered.</p>', '<p className="lead-text">{t(\'about.doDiffLead\')}</p>');

content = content.replace('<li>We work with a variety of elegant fabrics, including Italian fabrics known for their structure, breathability, and longevity</li>', '<li>{t(\'about.doDiffL1\')}</li>');
content = content.replace('<li>We focus on precision where it actually impacts fit, movement, and presence</li>', '<li>{t(\'about.doDiffL2\')}</li>');
content = content.replace('<li>We remove unnecessary layers that traditionally inflate cost without improving the outcome</li>', '<li>{t(\'about.doDiffL3\')}</li>');
content = content.replace(/<p className="highlight-text">\s*The result is simple\.<br \/>\s*You experience bespoke as it should be, considered, personal, and exact, without it becoming excessive\.\s*<\/p>/g, '<p className="highlight-text">{t(\'about.doDiffHigh1\')}<br />{t(\'about.doDiffHigh2\')}</p>');

content = content.replace('<h2 className="journey-h2">Why It Matters in Dubai</h2>', '<h2 className="journey-h2">{t(\'about.dubaiTitle\')}</h2>');
content = content.replace(/<p>\s*In a city where people move fast, attend often, and are constantly seen, what you wear isn’t occasional;\s*it’s daily language\. But traditional bespoke hasn’t adapted to that rhythm\. It remains slow, expensive,\s*and often inaccessible\.\s*<\/p>/g, '<p>{t(\'about.dubaiP1\')}</p>');

content = content.replace(/<p className="philosophy-bridge">\s*Vedano is built for this reality\. Clothing that keeps up with your life, holds its structure in the climate,\s*and feels natural across long days and late evenings\.\s*<\/p>/g, '<p className="philosophy-bridge">{t(\'about.dubaiP2\')}</p>');

content = content.replace('<span className="phil-heading">Precision is non-negotiable.</span>', '<span className="phil-heading">{t(\'about.phil1\')}</span>');
content = content.replace('<span className="phil-heading">Quality is non-negotiable.</span>', '<span className="phil-heading">{t(\'about.phil2\')}</span>');
content = content.replace('<span className="phil-heading">Price doesn’t have to be.</span>', '<span className="phil-heading">{t(\'about.phil3\')}</span>');
content = content.replace(/<p className="phil-summary reveal-item delay-4">\s*We believe more people should experience what it feels like to wear something built for them, not adjusted to them\.\s*<\/p>/g, '<p className="phil-summary reveal-item delay-4">{t(\'about.philSummary\')}</p>');

content = content.replace('<h2 className="journey-h2">Book an Appointment Now</h2>', '<h2 className="journey-h2">{t(\'about.bookTitle\')}</h2>');
content = content.replace('<p>Experience the art of accessible bespoke tailoring in Dubai.</p>', '<p>{t(\'about.bookDesc\')}</p>');
content = content.replace('placeholder="NAME"', 'placeholder={t(\'about.formName\')}');
content = content.replace('placeholder="EMAIL"', 'placeholder={t(\'about.formEmail\')}');
content = content.replace('placeholder="MESSAGE BOX"', 'placeholder={t(\'about.formMessage\')}');
content = content.replace('<span>SCHEDULE CONSULTATION</span>', '<span>{t(\'about.formSubmit\')}</span>');
content = content.replace("alert('Thank you for your interest. We will contact you shortly.');", "alert(t('about.alert'));");

fs.writeFileSync('src/components/AboutUs.tsx', content);
