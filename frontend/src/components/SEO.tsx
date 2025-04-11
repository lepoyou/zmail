import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = '嗟哉沮洳场，为我安乐国。',
  description = '朱铅退尽，潘妃却酒，昭君乍起',
  keywords = '红烛背，绣帘垂，梦长君不知',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
}) => {
  const location = useLocation();
  const url = `https://mail.mdzz.uk${location.pathname}`;
  const fullTitle = `${title} | 朝来有乡信，犹自寄寒衣`;

  useEffect(() => {
    // 更新页面标题
    document.title = fullTitle;
    
    // 更新元标签
    const metaTags = {
      'description': description,
      'keywords': keywords,
    };
    
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:url': url,
      'og:type': ogType,
      'og:image': ogImage,
    };
    
    const twitterTags = {
      'twitter:title': title,
      'twitter:description': description,
      'twitter:url': url,
      'twitter:card': twitterCard,
      'twitter:image': ogImage,
    };
    
    // 更新常规元标签
    Object.entries(metaTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      }
    });
    
    // 更新Open Graph标签
    Object.entries(ogTags).forEach(([property, content]) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (element) {
        element.setAttribute('content', content);
      }
    });
    
    // 更新Twitter标签
    Object.entries(twitterTags).forEach(([property, content]) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (element) {
        element.setAttribute('content', content);
      }
    });
    
    // 更新规范链接
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    }
  }, [fullTitle, description, keywords, url, title, ogType, ogImage, twitterCard]);

  return null; // 这个组件不渲染任何内容
};

export default SEO; 
