import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './BlogDetail.css';

interface BlogDetailProps {
  id: string;
}

export const BlogDetail = ({ id }: BlogDetailProps) => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch from locales, fallback if it doesn't exist
  const category = t(`blogs.items.${id}.category`);
  const title = t(`blogs.items.${id}.title`);
  const date = t(`blogs.items.${id}.date`);
  // Content might be an array of strings
  const content = t(`blogs.items.${id}.content`, { returnObjects: true }) as string[] | string;

  // If content is just the fallback key name, we'll display a coming soon message
  const isMissingContent = !content || typeof content === 'string' && content.startsWith('blogs.items');

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-header">
        <span className="blog-detail-category">{category !== `blogs.items.${id}.category` ? category : ''}</span>
        <h1 className="blog-detail-title">{title !== `blogs.items.${id}.title` ? title : 'Blog Not Found'}</h1>
        <div className="blog-detail-date">{date !== `blogs.items.${id}.date` ? date : ''}</div>
      </div>
      
      <div className="blog-detail-content">
        {isMissingContent ? (
          <p className="blog-detail-coming-soon">Full article coming soon.</p>
        ) : (
          Array.isArray(content) ? (
            content.map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
              }
              return <p key={index}>{paragraph}</p>;
            })
          ) : (
            <p>{content}</p>
          )
        )}
      </div>

      <div className="blog-detail-footer">
        <a href="/blogs" className="back-to-blogs-btn">Back to Journal</a>
      </div>
    </div>
  );
};
