'use client';

import { useCallback, useState, useRef, useEffect, MouseEventHandler } from 'react';
import { PrismicNextImage } from '@prismicio/next';

import {
  CircularImage,
  Container,
  CopyrightContainer,
  CopyrightTitle,
  SliderButton,
  SliderButtonsContainer,
  SliderContainer,
  SliderWrapper,
  SliderImage,
  SliderContent,
  SliderTitle,
  SliderText,
} from './MenuSection.styles';

import type { FC } from 'react';
import { FranchisingMenuSectionSlice } from 'prismicio-types';

const sliderDefaultInterval = 4000;
const sliderAfterClickInterval = 10000;

const MenuSection: FC<{ slice: FranchisingMenuSectionSlice }> = ({
  slice: {
    items,
    primary: { title },
  },
}) => {
  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  const changeSlide = useCallback(() => {
    setActiveSliderIndex((currentIndex) => {
      if (currentIndex === items.length - 1) {
        return 0;
      }

      return currentIndex + 1;
    });
  }, []);

  const startSliderInterval = useCallback(
    (timeout = sliderDefaultInterval) => {
      intervalReference.current = setInterval(() => {
        changeSlide();
        if (timeout === sliderAfterClickInterval) {
          if (intervalReference.current) {
            clearInterval(intervalReference.current);
          }
          startSliderInterval(sliderDefaultInterval);
        }
      }, timeout);
    },
    [changeSlide],
  );

  const handleSliderButtonClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      const { target } = event;
      const { id } = target as Element;

      if (id !== activeSliderIndex.toString()) {
        setActiveSliderIndex(Number(id));
      }

      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }

      startSliderInterval(sliderAfterClickInterval);
    },
    [activeSliderIndex, startSliderInterval],
  );

  useEffect(() => {
    startSliderInterval();

    return () => {
      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }
    };
  }, [startSliderInterval]);

  return (
    <Container>
      <CopyrightContainer>
        <CopyrightTitle dangerouslySetInnerHTML={{ __html: title as string }}></CopyrightTitle>
      </CopyrightContainer>
      <SliderContainer>
        <SliderWrapper>
          <SliderImage>
            <PrismicNextImage style={{ objectFit: 'cover' }} fill field={items[activeSliderIndex].image} />
          </SliderImage>
          <SliderContent>
            <SliderTitle dangerouslySetInnerHTML={{ __html: items[activeSliderIndex].title as string }}></SliderTitle>
            <SliderText dangerouslySetInnerHTML={{ __html: items[activeSliderIndex].text as string }}></SliderText>
          </SliderContent>
        </SliderWrapper>
        <SliderButtonsContainer>
          {items.map((_, index) => (
            <SliderButton
              key={index.toString()}
              isActive={index === activeSliderIndex}
              id={index.toString()}
              onClick={handleSliderButtonClick}
            />
          ))}
        </SliderButtonsContainer>
      </SliderContainer>

      <CircularImage alt="main-content-image" src="/images/SmoothieFactorySliderBackground.png" />
    </Container>
  );
};

export default MenuSection;
