import React, { useState } from 'react';
import ProgressiveImage from 'react-progressive-image';
import { Lightbox } from 'react-modal-image';
import classnames from 'classnames';

import './style.css';

export const Image = ({ image, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ProgressiveImage
        delay={500}
        src={image.url}
        placeholder="/svg/loading.svg"
      >
        {(src, loading) => (
          <img
            src={src}
            alt={image.url}
            className={classnames(
              'w-full h-full max-h-96',
              loading ? 'object-contain' : 'object-cover',
              className
            )}
            onClick={() => {
              console.log('yoyo');
              setIsModalOpen(true);
            }}
          />
        )}
      </ProgressiveImage>
      {isModalOpen && (
        <Lightbox
          large={image.url}
          alt={image.url}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
