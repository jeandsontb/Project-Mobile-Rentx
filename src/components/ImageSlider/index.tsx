import React from 'react';

import S from './styled';

interface IImagesProps {
  imagesUrl: string[];
}

const ImageSlider = ({ imagesUrl }: IImagesProps) => {
  return (
    <S.Container>
      <S.BoxImageIndex>
        <S.ImageIndex active={true} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
      </S.BoxImageIndex>

      <S.BoxCarImageWrapper>
        <S.ImageCar 
          source={{uri: imagesUrl[0]}}
          resizeMode="contain"
        />
      </S.BoxCarImageWrapper>

    </S.Container>
  );
}

export { ImageSlider };