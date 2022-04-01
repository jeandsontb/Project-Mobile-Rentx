import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import S from './styled';

interface IImagesProps {
  imagesUrl: {
    id: string;
    photo: string;
  }[];
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
        {imagesUrl.map((item, index) => (
          <S.ImageIndex 
            key={item.id}
            active={index === imageIndex} 
          />
        ))}
      </S.BoxImageIndex>

      
        <FlatList 
          data={imagesUrl}
          keyExtractor={item => item.id}
          renderItem={({item}) => 
          <S.BoxCarImageWrapper>
            <S.ImageCar 
              source={{uri: item.photo}}
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
