import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import S from './styled';

interface IImagesProps {
  imagesUrl: string[];
}

interface ChangePointsImageSlider {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const ImageSlider = ({ imagesUrl }: IImagesProps) => {
  const [ imageIndex, setImageIndex ] = useState(0);

  const changeAppointmentsActive = useRef((info: ChangePointsImageSlider) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  })

  return (
    <S.Container>
      <S.BoxImageIndex>
        {imagesUrl.map((_, index) => (
          <S.ImageIndex 
            key={index}
            active={index === imageIndex} 
          />
        ))}
      </S.BoxImageIndex>

      
        <FlatList 
          data={imagesUrl}
          keyExtractor={key => key}
          renderItem={({item}) => 
          <S.BoxCarImageWrapper>
            <S.ImageCar 
              source={{uri: item}}
              resizeMode="contain"
            />
          </S.BoxCarImageWrapper>
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={changeAppointmentsActive.current}
        />
      

    </S.Container>
  );
}

export { ImageSlider };