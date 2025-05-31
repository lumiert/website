import React from 'react';

interface EmbedProps {
  type: 'soundcloud' | 'spotify' | 'youtube';
  src: string;
  title: string;
  className?: string;
}

const Embed: React.FC<EmbedProps> = ({
  type,
  src,
  title,
  className = '',
}) => {
  const getEmbedCode = () => {
    switch (type) {
      case 'soundcloud':
        return (
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={src}
            title={title}
            className="w-full"
          ></iframe>
        );
      case 'spotify':
        return (
          <iframe
            src={src}
            width="100%"
            height="352"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media"
            title={title}
            className="w-full"
          ></iframe>
        );
      case 'youtube':
        return (
          <iframe
            width="100%"
            height="315"
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          ></iframe>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`embed-container ${className}`}>
      {getEmbedCode()}
    </div>
  );
};

export default Embed;
