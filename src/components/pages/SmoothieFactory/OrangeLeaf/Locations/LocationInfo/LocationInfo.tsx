/* eslint-disable @typescript-eslint/no-misused-promises */

'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  ClockIcon,
  WorkingHours,
} from '@components/pages/SmoothieFactory/OrangeLeaf/Locations/SearchResults/SearchResultItem.styles';
import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import {
  ImageWrapper,
  ImageSvg,
  ContentWrapper,
  LocationTitle,
  LocationAddress,
  WorkingHoursWrapper,
  Button,
  ButtonsWrapper,
  ButtonOutlined,
  InfoWrapper,
  InfoTitle,
  InfoContent,
  SocialIconSvg,
  BackImage,
  Column,
  BadgesWrapper,
} from './LocationInfo.styles';

import type { FC } from 'react';

import type { SingleLocation } from 'src/app/locations/[id]/page';

import Map from '../Map/Map';

import Badges from '../Badges/Badges';

export const convertTo12HourFormat = (time: string): string => {
  const [hour, minute] = time.split(':').map(Number);

  if (hour === 0) {
    return `12:${minute.toString().padStart(2, '0')} am`;
  }
  if (hour < 12) {
    return `${hour}:${minute.toString().padStart(2, '0')} am`;
  }
  if (hour === 12) {
    return `${hour}:${minute.toString().padStart(2, '0')} pm`;
  }
  const hour12 = hour % 12;
  return `${hour12}:${minute.toString().padStart(2, '0')} pm`;
};

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const LocationInfo: FC<{ location: SingleLocation }> = ({ location }) => {
  const { width } = useWindowSize();

  const {
    streetAndNumber,
    city,
    country,
    zip,
    openNow,
    nextOpen: { hour },
    openingHours,
    phone,
    socialProfiles,
    lat,
    lng,
    customFields,
  } = location;

  const openHoursString = openNow && hour ? `Open Until ${convertTo12HourFormat(hour)}` : 'Closed Now';

  const sameWorkingHoursForEachDay = openingHours.every(
    (item) => (item.from1 === openingHours[0].from1 && item.to1) === openingHours[0].to1,
  );

  const workingHoursContent = sameWorkingHoursForEachDay ? (
    <InfoContent>
      Mon - Sun {convertTo12HourFormat(openingHours[0].from1)} - {convertTo12HourFormat(openingHours[0].to1)}
    </InfoContent>
  ) : (
    openingHours.map((item) => (
      <InfoContent key={item.dayOfWeek}>
        {item.closed === true
          ? `${daysOfWeek[item.dayOfWeek - 1]} Closed`
          : `${daysOfWeek[item.dayOfWeek - 1]} ${convertTo12HourFormat(item.from1)} - ${convertTo12HourFormat(
              item.to1,
            )}`}
      </InfoContent>
    ))
  );

  const fbLink = socialProfiles.find((profile) => profile.type === 'FACEBOOK')?.url;

  return (
    <>
      <Column>
        <ImageWrapper>
          <Link href="/locations">
            <BackImage>
              <svg fill="none" height="20" viewBox="0 0 22 20" width="22" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.968749 11.0781C0.359374 10.5156 0.359374 9.53125 0.968749 8.96875L8.46875 1.46875C9.03125 0.859374 10.0156 0.859374 10.5781 1.46875C11.1875 2.03125 11.1875 3.01562 10.5781 3.57812L5.65625 8.5L20 8.5C20.8437 8.5 21.5 9.20312 21.5 10C21.5 10.8437 20.8437 11.5 20 11.5L5.65625 11.5L10.5781 16.4687C11.1875 17.0312 11.1875 18.0156 10.5781 18.5781C10.0156 19.1875 9.03125 19.1875 8.46875 18.5781L0.968749 11.0781Z"
                  fill="#ED6C32"
                />
              </svg>
            </BackImage>
          </Link>
          <ImageSvg fill="none" viewBox="0 0 77 79">
            <path
              d="M3.86059 70.7339C2.32611 67.4103 1.55406 61.1143 2.77081 61.0755C3.70515 61.0434 6.93197 65.8802 8.14185 67.9733C10.1107 71.3846 5.96742 75.2994 3.86059 70.7339ZM53.451 0.00528631C90.2955 0.390382 80.1803 64.3955 45.0646 77.16C17.8971 87.7805 -3.50576 47.1282 0.479028 25.8912C4.23975 5.88335 33.232 -0.20616 53.451 0.00528631Z"
              fill="#98C44A"
            />
            <path
              d="M20.8477 36.7798V52.9959C20.8477 53.3071 21.1 53.5594 21.4112 53.5594H53.3349C53.6462 53.5594 53.8985 53.3071 53.8985 52.9959V36.7798"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
            />
            <path
              d="M18.0508 30.932L22.7153 23.567C22.8187 23.4038 22.9983 23.3049 23.1914 23.3049H51.5542C51.7473 23.3049 51.927 23.4038 52.0303 23.567L56.6948 30.932"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
            />
            <path
              d="M18.3901 31.2714H24.8308V33.4748C24.8308 35.2534 23.389 36.6952 21.6104 36.6952C19.8319 36.6952 18.3901 35.2534 18.3901 33.4748V31.2714Z"
              fill="#23AA5D"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
            />
            <path
              d="M25.0004 31.2714H30.9327V33.7291C30.9327 35.3672 29.6047 36.6952 27.9665 36.6952C26.3284 36.6952 25.0004 35.3672 25.0004 33.7291V31.2714Z"
              fill="#23AA5D"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
            />
            <path
              d="M37.7124 31.2714H43.6446V33.7291C43.6446 35.3672 42.3166 36.6952 40.6785 36.6952C39.0403 36.6952 37.7124 35.3672 37.7124 33.7291V31.2714Z"
              fill="#23AA5D"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
            />
            <path
              d="M31.102 31.2714H37.0342V33.7291C37.0342 35.3672 35.7062 36.6952 34.0681 36.6952C32.43 36.6952 31.102 35.3672 31.102 33.7291V31.2714Z"
              fill="#23AA5D"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
            />
            <path
              d="M43.8139 31.2714H49.7461V33.7291C49.7461 35.3672 48.4182 36.6952 46.78 36.6952C45.1419 36.6952 43.8139 35.3672 43.8139 33.7291V31.2714Z"
              fill="#23AA5D"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
            />
            <path
              d="M49.9155 31.2714H56.3562V33.4748C56.3562 35.2534 54.9144 36.6952 53.1358 36.6952C51.3573 36.6952 49.9155 35.2534 49.9155 33.4748V31.2714Z"
              fill="#23AA5D"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
            />
            <path
              d="M26.017 42.3726C26.017 41.0153 27.1174 39.915 28.4747 39.915C29.832 39.915 30.9323 41.0153 30.9323 42.3726V44.4065V48.898H26.017V42.3726Z"
              fill="#23AA5D"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
            />
            <path
              d="M51.8646 53.5595V46.4408C51.8646 42.2285 48.4498 38.8137 44.2375 38.8137V38.8137C40.0251 38.8137 36.6104 42.2285 36.6104 46.4408V53.5595"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
            />
            <path d="M44.2373 38.8137V53.5595" stroke="white" stroke-width="1.18644" stroke-linecap="round" />
            <path d="M46.2715 46.1865V48.4739" stroke="white" stroke-width="1.18644" stroke-linecap="round" />
            <path d="M42.2031 46.1865V48.4739" stroke="white" stroke-width="1.18644" stroke-linecap="round" />
            <path
              d="M22.8818 22.7966V20L29.492 20M51.8649 22.7966V20H44.7462"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M44.7464 20.0001V20.0001C44.7464 17.4727 42.6976 15.4238 40.1702 15.4238H34.0685C31.5411 15.4238 29.4922 17.4727 29.4922 20.0001V20.0001"
              stroke="white"
              stroke-width="1.18644"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </ImageSvg>
          <Image alt="cover img" src="/images/location.jpg" style={{ objectFit: 'cover' }} fill />
        </ImageWrapper>
        <ContentWrapper>
          <LocationTitle>{streetAndNumber}</LocationTitle>
          {customFields && (
            <BadgesWrapper>
              <Badges customFields={customFields} />
            </BadgesWrapper>
          )}
          <LocationAddress>
            {city}, {country} {zip}
          </LocationAddress>
          <WorkingHoursWrapper>
            <ClockIcon fill="none" viewBox="0 0 18 20">
              <path
                d="M16.3125 10.25c0 2.6367-1.4063 5.0273-3.6563 6.3633-2.2851 1.3008-5.06245 1.3008-7.31245 0-2.28516-1.336-3.65625-3.7266-3.65625-6.3633 0-2.60156 1.37109-4.99219 3.65625-6.32812 2.25-1.30079 5.02735-1.30079 7.31245 0 2.25 1.33593 3.6563 3.72656 3.6563 6.32812ZM0 10.25c0 3.2344 1.6875 6.1875 4.5 7.8047 2.77734 1.6172 6.1875 1.6172 9 0 2.7773-1.6172 4.5-4.5703 4.5-7.8047 0-3.19922-1.7227-6.15234-4.5-7.76953-2.8125-1.617189-6.22266-1.617189-9 0C1.6875 4.09766 0 7.05078 0 10.25Zm8.15625-4.78125V10.25c0 .2812.14063.5625.35156.7031l3.37499 2.25c.3867.2813.9141.1758 1.1953-.2109.2461-.3867.1407-.9141-.2461-1.1953L9.84375 9.82812V5.46875c0-.45703-.38672-.84375-.84375-.84375-.49219 0-.84375.38672-.84375.84375Z"
                fill="#421B00"
              />
            </ClockIcon>
            <WorkingHours>{openHoursString}</WorkingHours>
          </WorkingHoursWrapper>
          <ButtonsWrapper>
            <a href={`https://www.google.com/maps/dir/Current+Location/${lat},${lng}`} target="_blank">
              <Button>Get directions</Button>
            </a>
            <Link href="/menu">
              <ButtonOutlined>See menu</ButtonOutlined>
            </Link>
          </ButtonsWrapper>
          <InfoWrapper>
            <InfoTitle>Open Hours</InfoTitle>
            {workingHoursContent}
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>Contact</InfoTitle>
            <InfoContent>{phone}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>Connect with us</InfoTitle>
            <a href={fbLink} target="_blank">
              <SocialIconSvg fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" fill="#F69F24" r="16" />
                <path
                  d="M19.7188 17L20.1562 14.125H17.375V12.25C17.375 11.4375 17.75 10.6875 19 10.6875H20.2812V8.21875C20.2812 8.21875 19.125 8 18.0312 8C15.75 8 14.25 9.40625 14.25 11.9062V14.125H11.6875V17H14.25V24H17.375V17H19.7188Z"
                  fill="white"
                />
              </SocialIconSvg>
            </a>
          </InfoWrapper>
        </ContentWrapper>
      </Column>
      {width && width <= theme.breakpoints.tablet ? null : (
        <Map
          center={{
            lat,
            lng,
          }}
          markers={[
            {
              id: location.id,
              lat: location.lat,
              lng: location.lng,
            },
          ]}
        />
      )}
    </>
  );
};

export default LocationInfo;
