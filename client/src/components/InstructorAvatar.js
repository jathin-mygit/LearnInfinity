import { useState } from 'react';

const InstructorAvatar = ({ src, alt, name }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [imageLoading, setImageLoading] = useState(true);
  const [fallbackAttempt, setFallbackAttempt] = useState(0);

  const generateFallbackUrl = (name) => {
    // Create a more reliable fallback with initials
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" fill="#5F9598"/>
        <text x="75" y="85" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="#F3F4F4">${initials}</text>
      </svg>
    `)}`;
  };

  const fallbackSources = [
    src, // Original source
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=5F9598&color=F3F4F4&size=150&font-size=0.6`,
    generateFallbackUrl(name) // SVG fallback
  ];

  const handleImageError = () => {
    const nextAttempt = fallbackAttempt + 1;
    if (nextAttempt < fallbackSources.length) {
      setFallbackAttempt(nextAttempt);
      setCurrentSrc(fallbackSources[nextAttempt]);
      setImageLoading(true);
    } else {
      setImageLoading(false);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <>
      {imageLoading && (
        <div className="avatar-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
      <img 
        src={currentSrc}
        alt={alt}
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{ opacity: imageLoading ? 0.5 : 1 }}
      />
    </>
  );
};

export default InstructorAvatar;