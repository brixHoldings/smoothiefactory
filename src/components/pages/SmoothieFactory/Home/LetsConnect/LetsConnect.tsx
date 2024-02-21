'use client';

import Image from 'next/image';

import {
  BgWrapper,
  Glass,
  Column,
  Row,
  Card,
  Hashtag,
  Thumbnail,
  CardContent,
  CardTitle,
  CardText,
  FollowUs,
  SocialLink,
  FollowUsTitle,
  SocialLinksWrapper,
  Carousel,
  CardColumn,
  CarouselWrapper,
} from './LetsConnect.style';

import { MaxWidthWrapper } from '@styles/common';
import { Title } from '../common';

import type { FC } from 'react';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { LetsConnectSlice } from 'prismicio-types';

const cards = [
  {
    img: '/images/369549353_833149948473467_303796760336600321_n.jpg',
    text: `Something exciting is headed your way👀

    October is gonna be extra sweet!`,
  },
  {
    img: '/images/367967433_1295040494482764_3248498840847116572_n.jpg',
    text: `Nothing like variety!
    .
    .
    .
    #smoothie #smoothies #smoothiebowl #smoothierecipe #smoothierecipes #smoothietime #smoothieoftheday #smoothielover #smoothiegoals #smoothiefitness`,
  },
  {
    img: '/images/367512133_1319785625294210_8591209512781027914_n.jpg',
    text: `Start your week with a juice and make it your "Detox Day!"
    .
    .
    .
    #smoothie #smoothies #smoothiebowl #smoothierecipe #smoothierecipes #smoothietime #smoothieoftheday #smoothielover #smoothiegoals #smoothiefitness`,
  },
  {
    img: '/images/363502479_971814467457485_5331856129117082468_n.jpg',
    text: `You're one in a melon.....WATERMELON! 😂🍉
    .
    .
    .
    #smoothie #smoothies #smoothiebowl #smoothierecipe #smoothierecipes #smoothietime #smoothieoftheday #smoothielover #smoothiegoals #smoothiefitness`,
  },
  {
    img: '/images/358166711_3090498604590622_8207255071518734600_n.jpg',
    text: `Use fruits to help you build a better you!
    .
    .
    .
    #smoothie #smoothies #smoothiebowl #smoothierecipe #smoothierecipes #smoothietime #smoothieoftheday#smoothielover #smoothiegoals #smoothiefitness`,
  },
  {
    img: '/images/353863818_722491956552842_8497124112272804272_n.jpg',
    text: `You're not just a dad, you're a hero. Happy Father's Day to all the best dad's in the world! 🌎
    .
    .
    .
    #smoothie #smoothies #smoothiebowl #smoothierecipe #smoothierecipes #smoothietime #smoothieoftheday#smoothielover #smoothiegoals #smoothiefitness`,
  },
];

const LetsConnect: FC<{ slice: LetsConnectSlice }> = ({
  slice: {
    primary: { title, hashtag },
  },
}) => {
  return (
    <>
      <BgWrapper>
        <FloatingImage
          alt="orange"
          height="clamp(119px, 14.02vw, 212px)"
          right="-89%"
          src="/images/orange-2.png"
          style={{ zIndex: 1 }}
          top="-47%"
          width="clamp(131px, 15.47vw, 234px)"
        />
        <FloatingImage
          alt="orange"
          height="clamp(161px, 18.98vw, 287px)"
          right="3%"
          src="/images/orange-3.png"
          style={{ zIndex: 1 }}
          top="-65%"
          width="clamp(159px, 18.78vw, 284px)"
        />
        <Image alt="bg" src="/images/bg-wrapper-2.jpg" style={{ objectFit: 'cover' }} fill />
        <Glass>
          <MaxWidthWrapper>
            <Row>
              <Column>
                <Title mb="8px" dangerouslySetInnerHTML={{ __html: title as string }}></Title>
                <Hashtag dangerouslySetInnerHTML={{ __html: hashtag as string }}></Hashtag>
              </Column>
              <CarouselWrapper>
                <Carousel>
                  {cards.map((card) => (
                    <CardColumn key={card.text}>
                      <Card>
                        <Thumbnail>
                          <Image alt="bg" src={card.img} style={{ objectFit: 'cover', pointerEvents: 'none' }} fill />
                        </Thumbnail>
                        <CardContent>
                          <CardTitle>@SmoothieFactory</CardTitle>
                          <CardText>{card.text}</CardText>
                        </CardContent>
                      </Card>
                    </CardColumn>
                  ))}
                </Carousel>
              </CarouselWrapper>
            </Row>
          </MaxWidthWrapper>
        </Glass>
      </BgWrapper>
      <MaxWidthWrapper>
        <FollowUs>
          <FollowUsTitle>.... follow us on:</FollowUsTitle>
          <SocialLinksWrapper>
            <SocialLink href="https://www.facebook.com/smoothiefactorypluskitchen" target="_blank">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#98C44A" />
                <path
                  d="M23.7188 21L24.1562 18.125H21.375V16.25C21.375 15.4375 21.75 14.6875 23 14.6875H24.2812V12.2188C24.2812 12.2188 23.125 12 22.0312 12C19.75 12 18.25 13.4062 18.25 15.9062V18.125H15.6875V21H18.25V28H21.375V21H23.7188Z"
                  fill="white"
                />
              </svg>
            </SocialLink>
            <SocialLink href="https://www.instagram.com/smoothiefactorykitchen" target="_blank">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#98C44A" />
                <path
                  d="M20 16.4062C18 16.4062 16.4062 18.0312 16.4062 20C16.4062 22 18 23.5938 20 23.5938C21.9688 23.5938 23.5938 22 23.5938 20C23.5938 18.0312 21.9688 16.4062 20 16.4062ZM20 22.3438C18.7188 22.3438 17.6562 21.3125 17.6562 20C17.6562 18.7188 18.6875 17.6875 20 17.6875C21.2812 17.6875 22.3125 18.7188 22.3125 20C22.3125 21.3125 21.2812 22.3438 20 22.3438ZM24.5625 16.2812C24.5625 15.8125 24.1875 15.4375 23.7188 15.4375C23.25 15.4375 22.875 15.8125 22.875 16.2812C22.875 16.75 23.25 17.125 23.7188 17.125C24.1875 17.125 24.5625 16.75 24.5625 16.2812ZM26.9375 17.125C26.875 16 26.625 15 25.8125 14.1875C25 13.375 24 13.125 22.875 13.0625C21.7188 13 18.25 13 17.0938 13.0625C15.9688 13.125 15 13.375 14.1562 14.1875C13.3438 15 13.0938 16 13.0312 17.125C12.9688 18.2812 12.9688 21.75 13.0312 22.9062C13.0938 24.0312 13.3438 25 14.1562 25.8438C15 26.6562 15.9688 26.9062 17.0938 26.9688C18.25 27.0312 21.7188 27.0312 22.875 26.9688C24 26.9062 25 26.6562 25.8125 25.8438C26.625 25 26.875 24.0312 26.9375 22.9062C27 21.75 27 18.2812 26.9375 17.125ZM25.4375 24.125C25.2188 24.75 24.7188 25.2188 24.125 25.4688C23.1875 25.8438 21 25.75 20 25.75C18.9688 25.75 16.7812 25.8438 15.875 25.4688C15.25 25.2188 14.7812 24.75 14.5312 24.125C14.1562 23.2188 14.25 21.0312 14.25 20C14.25 19 14.1562 16.8125 14.5312 15.875C14.7812 15.2812 15.25 14.8125 15.875 14.5625C16.7812 14.1875 18.9688 14.2812 20 14.2812C21 14.2812 23.1875 14.1875 24.125 14.5625C24.7188 14.7812 25.1875 15.2812 25.4375 15.875C25.8125 16.8125 25.7188 19 25.7188 20C25.7188 21.0312 25.8125 23.2188 25.4375 24.125Z"
                  fill="white"
                />
              </svg>
            </SocialLink>
            <SocialLink href="https://twitter.com/smoothiefactory?lang=en" target="_blank">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#98C44A" />
                <path
                  d="M24.1629 12.5H26.3691L21.5504 18.0062L27.2191 25.5H22.7816L19.3035 20.9563L15.3285 25.5H13.1191L18.2723 19.6094L12.8379 12.5H17.3879L20.5285 16.6531L24.1629 12.5ZM23.3879 24.1812H24.6098L16.7223 13.75H15.4098L23.3879 24.1812Z"
                  fill="white"
                />
              </svg>
            </SocialLink>
          </SocialLinksWrapper>
        </FollowUs>
      </MaxWidthWrapper>
    </>
  );
};

export default LetsConnect;
