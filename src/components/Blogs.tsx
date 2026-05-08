import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Blogs.css';
import blog1Img from '../assets/vedano_fabric_selection.png';
import blog2Img from '../assets/vedano_evening_wear.png';
import blog3Img from '../assets/vedano_bespoke_detail.png';
import blog4Img from '../assets/bespoke_suit_blog.png';

export const Blogs = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.blog-reveal-item');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const BLOGS = [
    {
      id: 1,
      image: blog1Img,
      category: t('blogs.items.1.category'),
      title: t('blogs.items.1.title'),
      excerpt: t('blogs.items.1.excerpt'),
      date: t('blogs.items.1.date')
    },
    {
      id: 2,
      image: blog2Img,
      category: t('blogs.items.2.category'),
      title: t('blogs.items.2.title'),
      excerpt: t('blogs.items.2.excerpt'),
      date: t('blogs.items.2.date')
    },
    {
      id: 3,
      image: blog3Img,
      category: t('blogs.items.3.category'),
      title: t('blogs.items.3.title'),
      excerpt: t('blogs.items.3.excerpt'),
      date: t('blogs.items.3.date')
    },
    {
      id: 4,
      image: blog4Img,
      category: t('blogs.items.4.category'),
      title: t('blogs.items.4.title'),
      excerpt: t('blogs.items.4.excerpt'),
      date: t('blogs.items.4.date')
    }
  ];

  return (
    <section className="blogs-section" ref={sectionRef}>
      <div className="blogs-container">
        <div className="blogs-header blog-reveal-item">
          <span className="blogs-subtitle">{t('blogs.subtitle')}</span>
          <h1 className="blogs-main-title">{t('blogs.mainTitle')}</h1>
        </div>

        <div className="blogs-grid">
          {BLOGS.map((blog, index) => (
            <article 
              key={blog.id} 
              className={`blog-card blog-reveal-item delay-${index + 1}`}
            >
              <div className="blog-img-wrap">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-date">{blog.date}</div>
              </div>
              <div className="blog-content">
                <span className="blog-category">{blog.category}</span>
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <a href={`/blogs/${blog.id}`} className="blog-read-more">
                  {t('blogs.readMore')}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
