'use client';

import {
  Title,
  GalleryContentWrapper,
  GalleryItemTitle,
  GalleryItemLabels,
  Label,
  LabelText,
  GalleryText,
  GalleryButtons,
  GalleryContent,
  CtaButtonOutlined,
  RelativeWrapper,
  FloatingRightImage,
  FloatingLeftImage,
  OuterWrapper,
} from './AthletesFavourites.style';

import { MaxWidthWrapper } from '@styles/common';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

import type { FC } from 'react';

const AthletesFavourites: FC = () => (
  <>
    <OuterWrapper>
      <FloatingImage
        alt="kiwi"
        bottom="135%"
        height="clamp(261px,31.81vw, 481px)"
        hideUnder={1024}
        left="-23%"
        src="/images/cancer5443_single_slice_cucumber_on_a_white_background_top-down_1b140dba-f82e-4cae-8427-45eb082b770b (1).png"
        style={{ zIndex: -1 }}
        width="clamp(261px,31.81vw, 481px)"
      />
      <MaxWidthWrapper>
        <Title>Fan Favorites</Title>
        <RelativeWrapper data-reverse-layout="true" mb="clamp(290px,45.37vw, 686px)">
          <GalleryContent data-reverse-layout="true">
            <GalleryContentWrapper>
              <GalleryItemTitle>Smoothies</GalleryItemTitle>
              <GalleryItemLabels>
                <Label>
                  <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                    <path
                      d="M.21875 13.2188C.0625 13.375 0 13.5625 0 13.75c0 .2188.0625.4062.21875.5312 3.59375 3.625 9.4375 3.625 13.06245.0313 3.625-3.625 3.5938-9.46875 0-13.09375-.3124-.28125-.7812-.28125-1.0624 0L.21875 13.2188Zm12.00005.0312c-2.8438 2.8438-7.3438 3-10.4063.5l.71875-.7188C3.6875 13.9688 5.15625 14.5 6.75 14.5c3.7188 0 6.75-3 6.75-6.75 0-1.59375-.5625-3.03125-1.5-4.1875l.7188-.71875c2.5 3.0625 2.3437 7.56245-.5 10.40625Zm-1.2813-8.625c.4063.5625.7187 1.1875.9063 1.875H9.03125l1.90625-1.875ZM8.5 7.5h3.4688c0 .09375.0312.1875.0312.25 0 1.28125-.4688 2.4375-1.2188 3.3438L8.21875 8.53125C8.40625 8.21875 8.5 7.875 8.5 7.5Zm-1 1.75 2.5625 2.5625C9.15625 12.5625 8 13 6.75 13H6.5V9.5c.34375 0 .6875-.09375 1-.25Zm-3.90625 2.7188L5.5 10.0625v2.8125c-.71875-.1875-1.34375-.5-1.90625-.9062Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>freshly made</LabelText>
                </Label>
                <Label>
                  <svg fill="none" height="15" viewBox="0 0 16 15" width="16">
                    <path
                      d="M4.65625 7.34375C5.3125 7.125 6 7 6.75 7h2.5c.40625 0 .75.34375.75.75 0 .4375-.34375.75-.75.75h-2.5c-.8125 0-1.5625.1875-2.21875.5.21875 1.9688 1.90625 3.5 3.9375 3.5H8.5c3.0625 0 6-3.125 6-7.59375 0-.40625-.0312-.78125-.0938-1.15625-.75.46875-1.6874.75-2.6562.75H8.5c-1.8125 0-3.34375 1.21875-3.84375 2.84375ZM3 8.15625C3.1875 5.28125 5.5625 3 8.5 3h3.25c.875 0 1.6875-.3125 2.3125-.875.0313-.03125.0625-.03125.0625-.0625.2188-.1875.4062-.40625.5625-.65625.0313-.0625.0937-.15625.125-.25.125-.1875.4375-.1875.5 0 .0625.125.0937.21875.125.34375.0937.28125.1875.5625.25.84375 0 .0625.0313.125.0313.1875.1874.75.2812 1.5625.2812 2.375C16 9.9375 12.6562 14 8.53125 14H8.5c-2.5625 0-4.71875-1.7188-5.34375-4.09375C2.125 10.875 1.5 12.25 1.5 13.75v.5c0 .4375-.34375.75-.75.75-.4375 0-.75-.3125-.75-.75v-.5c0-2.3438 1.1875-4.40625 3-5.59375Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>all natural</LabelText>
                </Label>
              </GalleryItemLabels>
              <GalleryText>
                100% fruits and vegetables with unique and delicious beneficial ingredients blending nutrition with
                great taste.
              </GalleryText>
              <GalleryButtons>
                <a href="/SFK Menu Board_site.pdf" download>
                  <CtaButton>see our menu</CtaButton>
                </a>
                <a href="/SF+K Smoothie Nutrition Facts - 8.25.23.pdf" download>
                  <CtaButtonOutlined>Nutrition info</CtaButtonOutlined>
                </a>
              </GalleryButtons>
            </GalleryContentWrapper>
          </GalleryContent>
          <FloatingRightImage
            alt="smoothies"
            data-reverse-layout="true"
            height="clamp(369px,57.20vw, 865px)"
            right="0"
            src="/images/Group 116 (1).png"
            style={{ zIndex: -1 }}
            top="0"
            width="clamp(451px,57.07vw, 863px)"
          />
        </RelativeWrapper>
      </MaxWidthWrapper>
    </OuterWrapper>
    <OuterWrapper>
      <FloatingImage
        alt="beet"
        height="clamp(294px,34.65vw, 524px)"
        right="22%"
        src="/images/shutterstock_81063175 1.jpg"
        style={{ zIndex: -1 }}
        top="-100%"
        width="clamp(207px,24.33vw, 368px)"
      />
      <MaxWidthWrapper>
        <RelativeWrapper mb="clamp(170px,43.58vw, 659px)">
          <GalleryContent>
            <FloatingLeftImage
              alt="bowls"
              height="clamp(370px,57.24vw, 865.58px)"
              right="0"
              src="/images/Group 157.png"
              style={{ zIndex: -1 }}
              top="0"
              width="clamp(451px,57.13vw, 863.84px)"
            />
            <GalleryContentWrapper>
              <GalleryItemTitle>Power Bowls:</GalleryItemTitle>
              <GalleryItemLabels>
                <Label>
                  <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                    <path
                      d="M.21875 13.2188C.0625 13.375 0 13.5625 0 13.75c0 .2188.0625.4062.21875.5312 3.59375 3.625 9.4375 3.625 13.06245.0313 3.625-3.625 3.5938-9.46875 0-13.09375-.3124-.28125-.7812-.28125-1.0624 0L.21875 13.2188Zm12.00005.0312c-2.8438 2.8438-7.3438 3-10.4063.5l.71875-.7188C3.6875 13.9688 5.15625 14.5 6.75 14.5c3.7188 0 6.75-3 6.75-6.75 0-1.59375-.5625-3.03125-1.5-4.1875l.7188-.71875c2.5 3.0625 2.3437 7.56245-.5 10.40625Zm-1.2813-8.625c.4063.5625.7187 1.1875.9063 1.875H9.03125l1.90625-1.875ZM8.5 7.5h3.4688c0 .09375.0312.1875.0312.25 0 1.28125-.4688 2.4375-1.2188 3.3438L8.21875 8.53125C8.40625 8.21875 8.5 7.875 8.5 7.5Zm-1 1.75 2.5625 2.5625C9.15625 12.5625 8 13 6.75 13H6.5V9.5c.34375 0 .6875-.09375 1-.25Zm-3.90625 2.7188L5.5 10.0625v2.8125c-.71875-.1875-1.34375-.5-1.90625-.9062Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>freshly made</LabelText>
                </Label>
                <Label>
                  <svg fill="none" height="15" viewBox="0 0 16 15" width="16">
                    <path
                      d="M4.65625 7.34375C5.3125 7.125 6 7 6.75 7h2.5c.40625 0 .75.34375.75.75 0 .4375-.34375.75-.75.75h-2.5c-.8125 0-1.5625.1875-2.21875.5.21875 1.9688 1.90625 3.5 3.9375 3.5H8.5c3.0625 0 6-3.125 6-7.59375 0-.40625-.0312-.78125-.0938-1.15625-.75.46875-1.6874.75-2.6562.75H8.5c-1.8125 0-3.34375 1.21875-3.84375 2.84375ZM3 8.15625C3.1875 5.28125 5.5625 3 8.5 3h3.25c.875 0 1.6875-.3125 2.3125-.875.0313-.03125.0625-.03125.0625-.0625.2188-.1875.4062-.40625.5625-.65625.0313-.0625.0937-.15625.125-.25.125-.1875.4375-.1875.5 0 .0625.125.0937.21875.125.34375.0937.28125.1875.5625.25.84375 0 .0625.0313.125.0313.1875.1874.75.2812 1.5625.2812 2.375C16 9.9375 12.6562 14 8.53125 14H8.5c-2.5625 0-4.71875-1.7188-5.34375-4.09375C2.125 10.875 1.5 12.25 1.5 13.75v.5c0 .4375-.34375.75-.75.75-.4375 0-.75-.3125-.75-.75v-.5c0-2.3438 1.1875-4.40625 3-5.59375Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>all natural</LabelText>
                </Label>
              </GalleryItemLabels>
              <GalleryText>
                Prepared with nutrient-rich whole fruit and an array of your favorite toppings. A delicious alternative
                known for their health benefits that increase energy and vitality.
              </GalleryText>
              <GalleryButtons>
                <a href="/SFK Menu Board_site.pdf" download>
                  <CtaButton>see our menu</CtaButton>
                </a>
                <a href="/SF+K Smoothie Nutrition Facts - 8.25.23.pdf" download>
                  <CtaButtonOutlined>Nutrition info</CtaButtonOutlined>
                </a>
              </GalleryButtons>
            </GalleryContentWrapper>
          </GalleryContent>
        </RelativeWrapper>
      </MaxWidthWrapper>
    </OuterWrapper>
    <OuterWrapper>
      <FloatingImage
        alt="oranges"
        height="clamp(187px,22.02vw, 333px)"
        left="-31%"
        src="/images/oranges.jpg"
        style={{ zIndex: -1 }}
        top="-110%"
        width="clamp(281px,33.06vw, 500px)"
      />
      <MaxWidthWrapper>
        <RelativeWrapper data-reverse-layout="true" mb="clamp(170px,36.97vw, 559px)">
          <GalleryContent data-reverse-layout="true">
            <GalleryContentWrapper>
              <GalleryItemTitle>Fruit and Vegetable Juice:</GalleryItemTitle>
              <GalleryItemLabels>
                <Label>
                  <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                    <path
                      d="M.21875 13.2188C.0625 13.375 0 13.5625 0 13.75c0 .2188.0625.4062.21875.5312 3.59375 3.625 9.4375 3.625 13.06245.0313 3.625-3.625 3.5938-9.46875 0-13.09375-.3124-.28125-.7812-.28125-1.0624 0L.21875 13.2188Zm12.00005.0312c-2.8438 2.8438-7.3438 3-10.4063.5l.71875-.7188C3.6875 13.9688 5.15625 14.5 6.75 14.5c3.7188 0 6.75-3 6.75-6.75 0-1.59375-.5625-3.03125-1.5-4.1875l.7188-.71875c2.5 3.0625 2.3437 7.56245-.5 10.40625Zm-1.2813-8.625c.4063.5625.7187 1.1875.9063 1.875H9.03125l1.90625-1.875ZM8.5 7.5h3.4688c0 .09375.0312.1875.0312.25 0 1.28125-.4688 2.4375-1.2188 3.3438L8.21875 8.53125C8.40625 8.21875 8.5 7.875 8.5 7.5Zm-1 1.75 2.5625 2.5625C9.15625 12.5625 8 13 6.75 13H6.5V9.5c.34375 0 .6875-.09375 1-.25Zm-3.90625 2.7188L5.5 10.0625v2.8125c-.71875-.1875-1.34375-.5-1.90625-.9062Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>freshly made</LabelText>
                </Label>
                <Label>
                  <svg fill="none" height="15" viewBox="0 0 16 15" width="16">
                    <path
                      d="M4.65625 7.34375C5.3125 7.125 6 7 6.75 7h2.5c.40625 0 .75.34375.75.75 0 .4375-.34375.75-.75.75h-2.5c-.8125 0-1.5625.1875-2.21875.5.21875 1.9688 1.90625 3.5 3.9375 3.5H8.5c3.0625 0 6-3.125 6-7.59375 0-.40625-.0312-.78125-.0938-1.15625-.75.46875-1.6874.75-2.6562.75H8.5c-1.8125 0-3.34375 1.21875-3.84375 2.84375ZM3 8.15625C3.1875 5.28125 5.5625 3 8.5 3h3.25c.875 0 1.6875-.3125 2.3125-.875.0313-.03125.0625-.03125.0625-.0625.2188-.1875.4062-.40625.5625-.65625.0313-.0625.0937-.15625.125-.25.125-.1875.4375-.1875.5 0 .0625.125.0937.21875.125.34375.0937.28125.1875.5625.25.84375 0 .0625.0313.125.0313.1875.1874.75.2812 1.5625.2812 2.375C16 9.9375 12.6562 14 8.53125 14H8.5c-2.5625 0-4.71875-1.7188-5.34375-4.09375C2.125 10.875 1.5 12.25 1.5 13.75v.5c0 .4375-.34375.75-.75.75-.4375 0-.75-.3125-.75-.75v-.5c0-2.3438 1.1875-4.40625 3-5.59375Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>all natural</LabelText>
                </Label>
              </GalleryItemLabels>
              <GalleryText>
                All-natural fresh-squeezed juices loaded with vitamins and minerals designed to cleanse and nourish the
                body. Available in over 10 different varities.
              </GalleryText>
              <GalleryButtons>
                <a href="/SFK Menu Board_site.pdf" download>
                  <CtaButton>see our menu</CtaButton>
                </a>
                <a href="/SF+K Smoothie Nutrition Facts - 8.25.23.pdf" download>
                  <CtaButtonOutlined>Nutrition info</CtaButtonOutlined>
                </a>
              </GalleryButtons>
            </GalleryContentWrapper>
          </GalleryContent>
          <FloatingRightImage
            alt="fruit and vegetable juice"
            data-reverse-layout="true"
            height="clamp(401px, 56.41vw, 853px)"
            right="0"
            src="/images/Group 118 (1).png"
            style={{ zIndex: -1 }}
            top="0"
            width="clamp(451px, 55.75vw, 843px)"
          />
        </RelativeWrapper>
      </MaxWidthWrapper>
    </OuterWrapper>
    <OuterWrapper>
      <FloatingImage
        alt="blueberries"
        height="clamp(250px,21.56vw, 326px)"
        hideUnder={1068}
        right="18%"
        src="/images/shutterstock_59950918 2.png"
        style={{ zIndex: -1 }}
        top="-122%"
        width="clamp(376px,32.34vw, 489px)"
      />
      <FloatingImage
        alt="ginger"
        height="clamp(156px,21.16vw, 320px)"
        left="-13%"
        src="/images/shutterstock_88288009 1 1.png"
        style={{ zIndex: -1 }}
        top="-156%"
        width="clamp(180px,28.17vw, 426px)"
      />
      <MaxWidthWrapper>
        <RelativeWrapper mb="clamp(248px, 40.93vw, 619px)">
          <GalleryContent>
            <FloatingLeftImage
              alt="Toasts | Grilled Panini | Salads | Wraps | Soups"
              height="clamp(403px,47.42vw, 717px)"
              right="0"
              src="/images/Group 158.png"
              style={{ zIndex: -1 }}
              top="0"
              width="clamp(451px,53.04vw, 802px)"
            />
            <GalleryContentWrapper>
              <GalleryItemTitle>Toasts:</GalleryItemTitle>
              <GalleryItemLabels>
                <Label>
                  <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                    <path
                      d="M.21875 13.2188C.0625 13.375 0 13.5625 0 13.75c0 .2188.0625.4062.21875.5312 3.59375 3.625 9.4375 3.625 13.06245.0313 3.625-3.625 3.5938-9.46875 0-13.09375-.3124-.28125-.7812-.28125-1.0624 0L.21875 13.2188Zm12.00005.0312c-2.8438 2.8438-7.3438 3-10.4063.5l.71875-.7188C3.6875 13.9688 5.15625 14.5 6.75 14.5c3.7188 0 6.75-3 6.75-6.75 0-1.59375-.5625-3.03125-1.5-4.1875l.7188-.71875c2.5 3.0625 2.3437 7.56245-.5 10.40625Zm-1.2813-8.625c.4063.5625.7187 1.1875.9063 1.875H9.03125l1.90625-1.875ZM8.5 7.5h3.4688c0 .09375.0312.1875.0312.25 0 1.28125-.4688 2.4375-1.2188 3.3438L8.21875 8.53125C8.40625 8.21875 8.5 7.875 8.5 7.5Zm-1 1.75 2.5625 2.5625C9.15625 12.5625 8 13 6.75 13H6.5V9.5c.34375 0 .6875-.09375 1-.25Zm-3.90625 2.7188L5.5 10.0625v2.8125c-.71875-.1875-1.34375-.5-1.90625-.9062Z"
                      fill="#474747"
                    />{' '}
                    <OuterWrapper>
                      <FloatingImage
                        alt="blueberries"
                        height="clamp(250px,21.56vw, 326px)"
                        hideUnder={1068}
                        right="18%"
                        src="/images/shutterstock_59950918 2.png"
                        style={{ zIndex: -1 }}
                        top="-160%"
                        width="clamp(376px,32.34vw, 489px)"
                      />
                      <FloatingImage
                        alt="ginger"
                        height="clamp(156px,21.16vw, 320px)"
                        left="-13%"
                        src="/images/shutterstock_88288009 1 1.png"
                        style={{ zIndex: -1 }}
                        top="-156%"
                        width="clamp(180px,28.17vw, 426px)"
                      />
                      <MaxWidthWrapper>
                        <RelativeWrapper mb="clamp(170px, 33.26vw, 503px)">
                          <GalleryContent>
                            <FloatingLeftImage
                              alt="Toasts | Grilled Panini | Salads | Wraps | Soups"
                              height="clamp(403px,47.42vw, 717px)"
                              right="0"
                              src="/images/Group 158.png"
                              style={{ zIndex: -1 }}
                              top="0"
                              width="clamp(451px,53.04vw, 802px)"
                            />
                            <GalleryContentWrapper>
                              <GalleryItemTitle>Toasts:</GalleryItemTitle>
                              <GalleryItemLabels>
                                <Label>
                                  <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                                    <path
                                      d="M.21875 13.2188C.0625 13.375 0 13.5625 0 13.75c0 .2188.0625.4062.21875.5312 3.59375 3.625 9.4375 3.625 13.06245.0313 3.625-3.625 3.5938-9.46875 0-13.09375-.3124-.28125-.7812-.28125-1.0624 0L.21875 13.2188Zm12.00005.0312c-2.8438 2.8438-7.3438 3-10.4063.5l.71875-.7188C3.6875 13.9688 5.15625 14.5 6.75 14.5c3.7188 0 6.75-3 6.75-6.75 0-1.59375-.5625-3.03125-1.5-4.1875l.7188-.71875c2.5 3.0625 2.3437 7.56245-.5 10.40625Zm-1.2813-8.625c.4063.5625.7187 1.1875.9063 1.875H9.03125l1.90625-1.875ZM8.5 7.5h3.4688c0 .09375.0312.1875.0312.25 0 1.28125-.4688 2.4375-1.2188 3.3438L8.21875 8.53125C8.40625 8.21875 8.5 7.875 8.5 7.5Zm-1 1.75 2.5625 2.5625C9.15625 12.5625 8 13 6.75 13H6.5V9.5c.34375 0 .6875-.09375 1-.25Zm-3.90625 2.7188L5.5 10.0625v2.8125c-.71875-.1875-1.34375-.5-1.90625-.9062Z"
                                      fill="#474747"
                                    />
                                  </svg>
                                  <LabelText>freshly made</LabelText>
                                </Label>
                                <Label>
                                  <svg fill="none" height="15" viewBox="0 0 16 15" width="16">
                                    <path
                                      d="M4.65625 7.34375C5.3125 7.125 6 7 6.75 7h2.5c.40625 0 .75.34375.75.75 0 .4375-.34375.75-.75.75h-2.5c-.8125 0-1.5625.1875-2.21875.5.21875 1.9688 1.90625 3.5 3.9375 3.5H8.5c3.0625 0 6-3.125 6-7.59375 0-.40625-.0312-.78125-.0938-1.15625-.75.46875-1.6874.75-2.6562.75H8.5c-1.8125 0-3.34375 1.21875-3.84375 2.84375ZM3 8.15625C3.1875 5.28125 5.5625 3 8.5 3h3.25c.875 0 1.6875-.3125 2.3125-.875.0313-.03125.0625-.03125.0625-.0625.2188-.1875.4062-.40625.5625-.65625.0313-.0625.0937-.15625.125-.25.125-.1875.4375-.1875.5 0 .0625.125.0937.21875.125.34375.0937.28125.1875.5625.25.84375 0 .0625.0313.125.0313.1875.1874.75.2812 1.5625.2812 2.375C16 9.9375 12.6562 14 8.53125 14H8.5c-2.5625 0-4.71875-1.7188-5.34375-4.09375C2.125 10.875 1.5 12.25 1.5 13.75v.5c0 .4375-.34375.75-.75.75-.4375 0-.75-.3125-.75-.75v-.5c0-2.3438 1.1875-4.40625 3-5.59375Z"
                                      fill="#474747"
                                    />
                                  </svg>
                                  <LabelText>all natural</LabelText>
                                </Label>
                              </GalleryItemLabels>
                              <GalleryText>
                                Indulge in the world of delectable toasts, where each bite is a culinary work of art
                                designed to captivate your taste buds. Elevate your breakfast or snack time with these
                                delightful creations that transform ordinary moments into extraordinary pleasures.
                              </GalleryText>
                              <GalleryButtons>
                                <a href="/SFK Menu Board_site.pdf" download>
                                  <CtaButton>see our menu</CtaButton>
                                </a>
                                <a href="/SF+K Smoothie Nutrition Facts - 8.25.23.pdf" download>
                                  <CtaButtonOutlined>Nutrition info</CtaButtonOutlined>
                                </a>
                              </GalleryButtons>
                            </GalleryContentWrapper>
                          </GalleryContent>
                        </RelativeWrapper>
                      </MaxWidthWrapper>
                    </OuterWrapper>
                  </svg>
                  <LabelText>freshly made</LabelText>
                </Label>
                <Label>
                  <svg fill="none" height="15" viewBox="0 0 16 15" width="16">
                    <path
                      d="M4.65625 7.34375C5.3125 7.125 6 7 6.75 7h2.5c.40625 0 .75.34375.75.75 0 .4375-.34375.75-.75.75h-2.5c-.8125 0-1.5625.1875-2.21875.5.21875 1.9688 1.90625 3.5 3.9375 3.5H8.5c3.0625 0 6-3.125 6-7.59375 0-.40625-.0312-.78125-.0938-1.15625-.75.46875-1.6874.75-2.6562.75H8.5c-1.8125 0-3.34375 1.21875-3.84375 2.84375ZM3 8.15625C3.1875 5.28125 5.5625 3 8.5 3h3.25c.875 0 1.6875-.3125 2.3125-.875.0313-.03125.0625-.03125.0625-.0625.2188-.1875.4062-.40625.5625-.65625.0313-.0625.0937-.15625.125-.25.125-.1875.4375-.1875.5 0 .0625.125.0937.21875.125.34375.0937.28125.1875.5625.25.84375 0 .0625.0313.125.0313.1875.1874.75.2812 1.5625.2812 2.375C16 9.9375 12.6562 14 8.53125 14H8.5c-2.5625 0-4.71875-1.7188-5.34375-4.09375C2.125 10.875 1.5 12.25 1.5 13.75v.5c0 .4375-.34375.75-.75.75-.4375 0-.75-.3125-.75-.75v-.5c0-2.3438 1.1875-4.40625 3-5.59375Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>all natural</LabelText>
                </Label>
              </GalleryItemLabels>
              <GalleryText>
                Indulge in the world of delectable toasts, where each bite is a culinary work of art designed to
                captivate your taste buds. Elevate your breakfast or snack time with these delightful creations that
                transform ordinary moments into extraordinary pleasures.
              </GalleryText>
              <GalleryButtons>
                <a href="/SFK Menu Board_site.pdf" download>
                  <CtaButton>see our menu</CtaButton>
                </a>
                <a href="/SF+K Smoothie Nutrition Facts - 8.25.23.pdf" download>
                  <CtaButtonOutlined>Nutrition info</CtaButtonOutlined>
                </a>
              </GalleryButtons>
            </GalleryContentWrapper>
          </GalleryContent>
        </RelativeWrapper>
      </MaxWidthWrapper>
    </OuterWrapper>
    <OuterWrapper>
      <FloatingImage
        alt="grapefruit"
        height="clamp(187px,29.76vw, 450px)"
        left="-35%"
        src="/images/pexels-laura-tancredi-7065187.png"
        style={{ zIndex: -1 }}
        top="-100%"
        width="clamp(281px,31.15vw, 471px)"
      />
      <MaxWidthWrapper>
        <RelativeWrapper data-reverse-layout="true" mb="clamp(170px, 33.26vw, 503px)">
          <GalleryContent data-reverse-layout="true">
            <GalleryContentWrapper>
              <GalleryItemTitle>Salads:</GalleryItemTitle>
              <GalleryItemLabels>
                <Label>
                  <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                    <path
                      d="M.21875 13.2188C.0625 13.375 0 13.5625 0 13.75c0 .2188.0625.4062.21875.5312 3.59375 3.625 9.4375 3.625 13.06245.0313 3.625-3.625 3.5938-9.46875 0-13.09375-.3124-.28125-.7812-.28125-1.0624 0L.21875 13.2188Zm12.00005.0312c-2.8438 2.8438-7.3438 3-10.4063.5l.71875-.7188C3.6875 13.9688 5.15625 14.5 6.75 14.5c3.7188 0 6.75-3 6.75-6.75 0-1.59375-.5625-3.03125-1.5-4.1875l.7188-.71875c2.5 3.0625 2.3437 7.56245-.5 10.40625Zm-1.2813-8.625c.4063.5625.7187 1.1875.9063 1.875H9.03125l1.90625-1.875ZM8.5 7.5h3.4688c0 .09375.0312.1875.0312.25 0 1.28125-.4688 2.4375-1.2188 3.3438L8.21875 8.53125C8.40625 8.21875 8.5 7.875 8.5 7.5Zm-1 1.75 2.5625 2.5625C9.15625 12.5625 8 13 6.75 13H6.5V9.5c.34375 0 .6875-.09375 1-.25Zm-3.90625 2.7188L5.5 10.0625v2.8125c-.71875-.1875-1.34375-.5-1.90625-.9062Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>freshly made</LabelText>
                </Label>
                <Label>
                  <svg fill="none" height="15" viewBox="0 0 16 15" width="16">
                    <path
                      d="M4.65625 7.34375C5.3125 7.125 6 7 6.75 7h2.5c.40625 0 .75.34375.75.75 0 .4375-.34375.75-.75.75h-2.5c-.8125 0-1.5625.1875-2.21875.5.21875 1.9688 1.90625 3.5 3.9375 3.5H8.5c3.0625 0 6-3.125 6-7.59375 0-.40625-.0312-.78125-.0938-1.15625-.75.46875-1.6874.75-2.6562.75H8.5c-1.8125 0-3.34375 1.21875-3.84375 2.84375ZM3 8.15625C3.1875 5.28125 5.5625 3 8.5 3h3.25c.875 0 1.6875-.3125 2.3125-.875.0313-.03125.0625-.03125.0625-.0625.2188-.1875.4062-.40625.5625-.65625.0313-.0625.0937-.15625.125-.25.125-.1875.4375-.1875.5 0 .0625.125.0937.21875.125.34375.0937.28125.1875.5625.25.84375 0 .0625.0313.125.0313.1875.1874.75.2812 1.5625.2812 2.375C16 9.9375 12.6562 14 8.53125 14H8.5c-2.5625 0-4.71875-1.7188-5.34375-4.09375C2.125 10.875 1.5 12.25 1.5 13.75v.5c0 .4375-.34375.75-.75.75-.4375 0-.75-.3125-.75-.75v-.5c0-2.3438 1.1875-4.40625 3-5.59375Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>all natural</LabelText>
                </Label>
              </GalleryItemLabels>
              <GalleryText>
                Discover a vibrant assortment of farm-fresh salads, a colorful medley of seasonal ingredients artfully
                combined to delight your senses. Our diverse range offers something for every palate. Elevate your meals
                with these nutrient-rich creations that bring a burst of flavor and wholesome goodness to your table.
              </GalleryText>
              <GalleryButtons>
                <a href="/SFK Menu Board_site.pdf" download>
                  <CtaButton>see our menu</CtaButton>
                </a>
                <a href="/SF+K Smoothie Nutrition Facts - 8.25.23.pdf" download>
                  <CtaButtonOutlined>Nutrition info</CtaButtonOutlined>
                </a>
              </GalleryButtons>
            </GalleryContentWrapper>
          </GalleryContent>
          <FloatingRightImage
            alt="fruit and vegetable juice"
            data-reverse-layout="true"
            height="clamp(403px, 41.93vw, 634px)"
            right="0"
            src="/images/Group 160.png"
            style={{ zIndex: -1 }}
            top="0"
            width="clamp(451px, 49.00vw, 741px)"
          />
        </RelativeWrapper>
      </MaxWidthWrapper>
    </OuterWrapper>
    <OuterWrapper>
      <FloatingImage
        alt="rose hip"
        height="clamp(250px,32.20vw, 487px)"
        right="29%"
        src="/images/image 106.png"
        style={{ zIndex: -1 }}
        top="-100%"
        width="clamp(376px,32.20vw, 487px)"
      />
      <MaxWidthWrapper>
        <RelativeWrapper mb="clamp(188px, 23.47vw, 355px)">
          <GalleryContent>
            <FloatingLeftImage
              alt="Folds"
              height="clamp(403px, 40.60vw, 614px)"
              right="0"
              src="/images/Group 159.png"
              style={{ zIndex: -1 }}
              top="0"
              width="clamp(451px, 46.95vw, 710px)"
            />
            <GalleryContentWrapper>
              <GalleryItemTitle>Folds:</GalleryItemTitle>
              <GalleryItemLabels>
                <Label>
                  <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                    <path
                      d="M.21875 13.2188C.0625 13.375 0 13.5625 0 13.75c0 .2188.0625.4062.21875.5312 3.59375 3.625 9.4375 3.625 13.06245.0313 3.625-3.625 3.5938-9.46875 0-13.09375-.3124-.28125-.7812-.28125-1.0624 0L.21875 13.2188Zm12.00005.0312c-2.8438 2.8438-7.3438 3-10.4063.5l.71875-.7188C3.6875 13.9688 5.15625 14.5 6.75 14.5c3.7188 0 6.75-3 6.75-6.75 0-1.59375-.5625-3.03125-1.5-4.1875l.7188-.71875c2.5 3.0625 2.3437 7.56245-.5 10.40625Zm-1.2813-8.625c.4063.5625.7187 1.1875.9063 1.875H9.03125l1.90625-1.875ZM8.5 7.5h3.4688c0 .09375.0312.1875.0312.25 0 1.28125-.4688 2.4375-1.2188 3.3438L8.21875 8.53125C8.40625 8.21875 8.5 7.875 8.5 7.5Zm-1 1.75 2.5625 2.5625C9.15625 12.5625 8 13 6.75 13H6.5V9.5c.34375 0 .6875-.09375 1-.25Zm-3.90625 2.7188L5.5 10.0625v2.8125c-.71875-.1875-1.34375-.5-1.90625-.9062Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>freshly made</LabelText>
                </Label>
                <Label>
                  <svg fill="none" height="15" viewBox="0 0 16 15" width="16">
                    <path
                      d="M4.65625 7.34375C5.3125 7.125 6 7 6.75 7h2.5c.40625 0 .75.34375.75.75 0 .4375-.34375.75-.75.75h-2.5c-.8125 0-1.5625.1875-2.21875.5.21875 1.9688 1.90625 3.5 3.9375 3.5H8.5c3.0625 0 6-3.125 6-7.59375 0-.40625-.0312-.78125-.0938-1.15625-.75.46875-1.6874.75-2.6562.75H8.5c-1.8125 0-3.34375 1.21875-3.84375 2.84375ZM3 8.15625C3.1875 5.28125 5.5625 3 8.5 3h3.25c.875 0 1.6875-.3125 2.3125-.875.0313-.03125.0625-.03125.0625-.0625.2188-.1875.4062-.40625.5625-.65625.0313-.0625.0937-.15625.125-.25.125-.1875.4375-.1875.5 0 .0625.125.0937.21875.125.34375.0937.28125.1875.5625.25.84375 0 .0625.0313.125.0313.1875.1874.75.2812 1.5625.2812 2.375C16 9.9375 12.6562 14 8.53125 14H8.5c-2.5625 0-4.71875-1.7188-5.34375-4.09375C2.125 10.875 1.5 12.25 1.5 13.75v.5c0 .4375-.34375.75-.75.75-.4375 0-.75-.3125-.75-.75v-.5c0-2.3438 1.1875-4.40625 3-5.59375Z"
                      fill="#474747"
                    />
                  </svg>
                  <LabelText>all natural</LabelText>
                </Label>
              </GalleryItemLabels>
              <GalleryText>
                Unveil the world of culinary creativity with our artisanal folds. From classic combinations to
                innovative fusions, our menu offers a range of options that transcend the ordinary. With each expertly
                crafted to perfection, discover a variety of options that cater to your taste preferences, making every
                meal a delightful adventure.
              </GalleryText>
              <GalleryButtons>
                <a href="/SFK Menu Board_site.pdf" download>
                  <CtaButton>see our menu</CtaButton>
                </a>
                <a href="/SF+K Smoothie Nutrition Facts - 8.25.23.pdf" download>
                  <CtaButtonOutlined>Nutrition info</CtaButtonOutlined>
                </a>
              </GalleryButtons>
            </GalleryContentWrapper>
          </GalleryContent>
        </RelativeWrapper>
      </MaxWidthWrapper>
    </OuterWrapper>
  </>
);

export default AthletesFavourites;
