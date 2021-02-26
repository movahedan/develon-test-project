import React, { useState } from 'react';
import ProgressiveImage from 'react-progressive-image';
import { Lightbox } from 'react-modal-image';

import { S_Image } from './styled';

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
          <S_Image
            src={src}
            alt={image.url}
            className={className}
            onClick={() => {
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
