'use client';

import { AnimatePresence } from 'framer-motion';

import {
  InnerWrapper,
  RelativeWrapper,
  ArrowsWrapper,
  Arrow,
  GalleryContent,
  GalleryItemTitle,
  GalleryItemLabels,
  Label,
  LabelText,
  FloatingItemImage,
  GalleryText,
  GalleryContentWrapper,
} from './Gallery.style';

import { CtaButton } from '../WhatIsNew/WhatIsNew.style';

import { useCallback, useEffect, useRef, useState } from 'react';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { MaxWidthWrapper } from '@styles/common';

import { Title } from '../common';

import type { FC } from 'react';

type Slider = {
  img: {
    height: string;
    src: string;
    width: string;
  };
  text: string;
  title: string;
};

type SliderWithImage = Slider & {
  bgImg: {
    bottom: string;
    height: string;
    right: string;
    src: string;
    width: string;
  };
};

function isSliderWithImage(slide: Slider | SliderWithImage): slide is SliderWithImage {
  return 'bgImg' in slide;
}

const sliders = [
  {
    bgImg: {
      bottom: '120%',
      height: 'clamp(171px ,115.07vw, 228px)',
      right: '-76%',
      src: '/images/mint.png',
      width: 'clamp(252px ,22.22vw, 336px)',
    },
    img: {
      height: 'clamp(279px ,43.51vw, 658px)',
      src: '/images/Citrus Greens Final.png',
      width: 'clamp(365px,58.20vw, 880px)',
    },
    text: '100% fruits and vegetables with unique and delicious beneficial ingredients blending nutrition with great taste. ',
    title: 'SMOOTHIES:',
  },
  {
    img: {
      height: 'clamp(282px ,33.46vw, 506px)',
      src: '/images/Group 118.png',
      width: 'clamp(359px,42.526vw, 643px)',
    },
    text: 'All-natural fresh-squeezed juices loaded with vitamins and minerals designed to cleanse and nourish the body.',
    title: 'Fruits and Vegetable Juice:',
  },
  {
    img: {
      height: 'clamp(282px ,33.59vw, 508px)',
      src: '/images/Group 154.png',
      width: 'clamp(290px,35.91vw, 543px)',
    },
    text: 'Prepared with nutrient-rich whole fruit and an array of your favorite toppings. A delicious alternative known for their health benefits that increase energy and vitality.',
    title: 'Power Bowls:',
  },
  {
    bgImg: {
      bottom: '100%',
      height: 'clamp(272px,25.72vw, 363px)',
      right: '-52%',
      src: '/images/image 104.png',
      width: 'clamp(272px,24vw, 363px)',
    },
    img: {
      height: 'clamp(172px ,20.50vw, 310px)',
      src: '/images/toast.png',
      width: 'clamp(344px,40.93vw, 619px)',
    },
    text: 'Indulge in the world of delectable toasts, where each bite is a culinary work of art designed to captivate your taste buds. Elevate your breakfast or snack time with these delightful creations that transform ordinary moments into extraordinary pleasures.',
    title: 'Toasts:',
  },
  {
    bgImg: {
      bottom: '56%',
      height: 'clamp(273px,25.72vw, 389px)',
      right: '-156%',
      src: '/images/radish-2.png',
      width: 'clamp(156px,14.81vw, 224px)',
    },
    img: {
      height: 'clamp(381px, 33.59vw, 508px)',
      src: '/images/salad.png',
      width: 'clamp(396px ,34.92vw, 528px)',
    },
    text: 'Discover a vibrant assortment of farm-fresh salads, a colorful medley of seasonal ingredients artfully combined to delight your senses. Our diverse range offers something for every palate. Elevate your meals with these nutrient-rich creations that bring a burst of flavor and wholesome goodness to your table.',
    title: 'Salads:',
  },
];

const sliderDefaultInterval = 100000;

const Gallery: FC = () => {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);
  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);

  const changeSlide = useCallback((goBackwards: boolean) => {
    setActiveSliderIndex((currentIndex) => {
      if (goBackwards) {
        if (currentIndex === 0) {
          return sliders.length - 1;
        }
        return currentIndex - 1;
      }

      if (currentIndex === sliders.length - 1) {
        return 0;
      }
      return currentIndex + 1;
    });
  }, []);

  const startSliderInterval = useCallback(() => {
    intervalReference.current = setInterval(() => {
      changeSlide(false);
      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }
      startSliderInterval();
    }, sliderDefaultInterval);
  }, [changeSlide]);

  useEffect(() => {
    startSliderInterval();

    return () => {
      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }
    };
  }, [startSliderInterval]);

  const onClick = (goBackwards: boolean): void => {
    if (intervalReference.current) {
      clearInterval(intervalReference.current);
    }
    startSliderInterval();
    changeSlide(goBackwards);
  };

  return (
    <RelativeWrapper>
      <FloatingImage
        alt="gallery bg"
        height="clamp(709px,62.56vw, 946px)"
        left="0"
        src="/images/wood-bg.png"
        style={{ zIndex: -1 }}
        top="0"
        width="clamp(884px,84.98vw, 1285px)"
      />
      <MaxWidthWrapper>
        <InnerWrapper>
          <Title mb="clamp(131px, 9.72vw, 147px)">Our best classics</Title>
          <ArrowsWrapper>
            <Arrow
              onClick={(): void => {
                onClick(true);
              }}
            >
              <svg fill="none" viewBox="0 0 15 14">
                <path
                  d="M.950583 7.51489c-.15625-.15625-.21875-.34375-.21875-.5625 0-.1875.0625-.375.21875-.53125l5.499997-5.25c.3125-.281247.78125-.281247 1.0625.03125.28125.28125.28125.78125-.03125 1.0625l-4.15625 3.9375H13.9818c.4063 0 .75.34375.75.75 0 .4375-.3437.75-.75.75H3.32558l4.15625 3.96871c.3125.2813.3125.75.03125 1.0625s-.75.3125-1.0625.0313L.950583 7.51489Z"
                  fill="#fff"
                />
              </svg>
            </Arrow>
            <Arrow
              onClick={(): void => {
                onClick(false);
              }}
            >
              <svg fill="none" viewBox="0 0 15 13">
                <path
                  d="M14.1117 7.41968c.1563-.15625.25-.34375.25-.5625 0-.1875-.0937-.375-.25-.53125l-5.49998-5.25c-.28125-.281252-.78125-.281252-1.0625.03125-.28125.28125-.28125.78125.03125 1.0625l4.15623 3.9375H1.11172c-.437502 0-.750002.34375-.750002.75 0 .4375.3125.75.750002.75H11.7367L7.58047 11.5759c-.3125.2813-.3125.75-.03125 1.0625s.75.3125 1.0625.0313l5.49998-5.25002Z"
                  fill="#fff"
                />
              </svg>
            </Arrow>
          </ArrowsWrapper>
          <AnimatePresence mode="popLayout">
            <GalleryContent
              key={activeSliderIndex}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
            >
              <GalleryContentWrapper>
                <GalleryItemTitle>{sliders[activeSliderIndex].title}</GalleryItemTitle>
                <GalleryItemLabels>
                  <Label>
                    <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                      <path
                        d="M.21875 13.2188C.0625 13.375 0 13.5625 0 13.75c0 .2188.0625.4062.21875.5312 3.59375 3.625 9.4375 3.625 13.06245.0313 3.625-3.625 3.5938-9.46875 0-13.09375-.3124-.28125-.7812-.28125-1.0624 0L.21875 13.2188Zm12.00005.0312c-2.8438 2.8438-7.3438 3-10.4063.5l.71875-.7188C3.6875 13.9688 5.15625 14.5 6.75 14.5c3.7188 0 6.75-3 6.75-6.75 0-1.59375-.5625-3.03125-1.5-4.1875l.7188-.71875c2.5 3.0625 2.3437 7.56245-.5 10.40625Zm-1.2813-8.625c.4063.5625.7187 1.1875.9063 1.875H9.03125l1.90625-1.875ZM8.5 7.5h3.4688c0 .09375.0312.1875.0312.25 0 1.28125-.4688 2.4375-1.2188 3.3438L8.21875 8.53125C8.40625 8.21875 8.5 7.875 8.5 7.5Zm-1 1.75 2.5625 2.5625C9.15625 12.5625 8 13 6.75 13H6.5V9.5c.34375 0 .6875-.09375 1-.25Zm-3.90625 2.7188L5.5 10.0625v2.8125c-.71875-.1875-1.34375-.5-1.90625-.9062Z"
                        fill="#fff"
                      />
                    </svg>
                    <LabelText>freshly made</LabelText>
                  </Label>
                  <Label>
                    <svg fill="none" height="15" viewBox="0 0 16 15" width="16">
                      <path
                        d="M4.65625 7.34375C5.3125 7.125 6 7 6.75 7h2.5c.40625 0 .75.34375.75.75 0 .4375-.34375.75-.75.75h-2.5c-.8125 0-1.5625.1875-2.21875.5.21875 1.9688 1.90625 3.5 3.9375 3.5H8.5c3.0625 0 6-3.125 6-7.59375 0-.40625-.0312-.78125-.0938-1.15625-.75.46875-1.6874.75-2.6562.75H8.5c-1.8125 0-3.34375 1.21875-3.84375 2.84375ZM3 8.15625C3.1875 5.28125 5.5625 3 8.5 3h3.25c.875 0 1.6875-.3125 2.3125-.875.0313-.03125.0625-.03125.0625-.0625.2188-.1875.4062-.40625.5625-.65625.0313-.0625.0937-.15625.125-.25.125-.1875.4375-.1875.5 0 .0625.125.0937.21875.125.34375.0937.28125.1875.5625.25.84375 0 .0625.0313.125.0313.1875.1874.75.2812 1.5625.2812 2.375C16 9.9375 12.6562 14 8.53125 14H8.5c-2.5625 0-4.71875-1.7188-5.34375-4.09375C2.125 10.875 1.5 12.25 1.5 13.75v.5c0 .4375-.34375.75-.75.75-.4375 0-.75-.3125-.75-.75v-.5c0-2.3438 1.1875-4.40625 3-5.59375Z"
                        fill="#fff"
                      />
                    </svg>
                    <LabelText>all natural</LabelText>
                  </Label>
                </GalleryItemLabels>
                <GalleryText>{sliders[activeSliderIndex].text}</GalleryText>
                <CtaButton>see our menu</CtaButton>
              </GalleryContentWrapper>

              <FloatingItemImage
                alt="item image"
                height={sliders[activeSliderIndex].img.height}
                right="0"
                src={sliders[activeSliderIndex].img.src}
                style={{ zIndex: -1 }}
                top="0"
                width={sliders[activeSliderIndex].img.width}
              />
              {isSliderWithImage(sliders[activeSliderIndex]) ? (
                <FloatingImage
                  alt="item bg image"
                  // @ts-expect-error Object is possibly 'undefined'
                  bottom={sliders[activeSliderIndex].bgImg.bottom}
                  // @ts-expect-error Object is possibly 'undefined'
                  height={sliders[activeSliderIndex].bgImg.height}
                  hideUnder={768}
                  // @ts-expect-error Object is possibly 'undefined'
                  right={sliders[activeSliderIndex].bgImg.right}
                  // @ts-expect-error Object is possibly 'undefined'
                  src={sliders[activeSliderIndex].bgImg.src}
                  style={{ zIndex: -1 }}
                  // @ts-expect-error Object is possibly 'undefined'
                  width={sliders[activeSliderIndex].bgImg.width}
                />
              ) : null}
            </GalleryContent>
          </AnimatePresence>
        </InnerWrapper>
      </MaxWidthWrapper>
    </RelativeWrapper>
  );
};

export default Gallery;
