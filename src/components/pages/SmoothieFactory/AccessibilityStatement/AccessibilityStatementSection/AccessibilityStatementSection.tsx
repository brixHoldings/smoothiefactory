'use client';

import Image from 'next/image';

import { MaxWidthWrapper } from '@styles/common';

import {
  Container,
  Paper,
  Title,
  Text,
  RelativeWrapper,
  PageTitle,
  ListItem,
} from './AccessibilityStatementSection.style';

import type { FC } from 'react';
import Link from 'next/link';

import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

const AccessibilityStatementSection: FC = () => (
  <RelativeWrapper>
    <FloatingImage
      alt="green bubble"
      height="clamp(671px/1.3, 44.37vw, 671px)"
      hideUnder={650}
      right="67%"
      src="/images/green-bubble-bg.svg"
      top="168%"
      width="clamp(652px/1.3,43.12vw, 652px)"
    />
    <FloatingImage
      alt="orange"
      height="clamp(287px / 1.3, 18.98vw, 287px)"
      hideUnder={650}
      left="-57%"
      src="/images/orange-tos.png"
      top="861%"
      width="clamp(284px / 1.3, 18.78vw, 284px)"
    />
    <Container>
      <Image
        alt="background"
        src="/images/LegalBack 1.jpg"
        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        fill
      />
    </Container>
    <MaxWidthWrapper>
      <Paper>
        <FloatingImage
          alt="avocado"
          height="clamp(216px / 1.3, 14.28vw, 216px)"
          hideUnder={650}
          right="52%"
          src="/images/avocado-tos.png"
          style={{ zIndex: 1 }}
          top="56%"
          width="clamp(165px / 1.3 , 10.91vw, 165px)"
        />
        <PageTitle>Accessibility Statement</PageTitle>
        <Title>COMPLIANCE STATUS</Title>
        <Text>
          We firmly believe that the internet should be available and accessible to anyone, and are committed to
          providing a website that is accessible to the widest possible audience, regardless of circumstance and
          ability.
        </Text>
        <Text>
          To fulfill this, we aim to adhere as strictly as possible to the World Wide Web Consortium's (W3C) Web Content
          Accessibility Guidelines 2.1 (WCAG 2.1) at the AA level. These guidelines explain how to make web content
          accessible to people with a wide array of disabilities. Complying with those guidelines helps us ensure that
          the website is accessible to all people: blind people, people with motor impairments, visual impairment,
          cognitive disabilities, and more.
        </Text>
        <Text>
          This website utilizes various technologies that are meant to make it as accessible as possible at all times.
          We utilize an accessibility interface that allows persons with specific disabilities to adjust the website's
          UI (user interface) and design it to their personal needs.
        </Text>
        <Text>
          Additionally, the website utilizes an AI-based application that runs in the background and optimizes its
          accessibility level constantly. This application remediates the website's HTML, adapts its functionality and
          behavior for screen-readers used by blind users, and for keyboard functions used by individuals with motor
          impairments.
        </Text>
        <Text>
          If you wish to contact the website's owner please use the following email
          <a href="mailto:info@orangeleafyogurt.com">info@orangeleafyogurt.com</a> or call us at{' '}
          <a href="tel:214-302-5910">214-302-5910</a>
          and one of our team members will personally assist you.
        </Text>

        <Title>SCREEN-READER AND KEYBOARD NAVIGATION</Title>
        <Text>
          Our website implements the ARIA attributes (Accessible Rich Internet Applications) technique, alongside
          various different behavioral changes, to ensure blind users visiting with screen- readers are able to read,
          comprehend, and enjoy the website's functions. As soon as a user with a screen-reader enters your site, they
          immediately receive a prompt to enter the Screen- Reader Profile so they can browse and operate your site
          effectively. Here's how our website covers some of the most important screen-reader requirements, alongside
          console screenshots of code examples:
        </Text>
        <Text>
          Screen-reader optimization: we run a background process that learns the website's components from top to
          bottom, to ensure ongoing compliance even when updating the website. In this process, we provide
          screen-readers with meaningful data using the ARIA set of attributes. For example, we provide accurate form
          labels; descriptions for actionable icons (social media icons, search icons, cart icons, etc.); validation
          guidance for form inputs; element roles such as buttons, menus, modal dialogues (popups), and others.
        </Text>
        <Text>
          Additionally, the background process scans all of the website's images and provides an accurate and meaningful
          image-object-recognition-based description as an ALT (alternate text) tag for images that are not described.
          It will also extract texts that are embedded within the image, using an OCR (optical character recognition)
          technology. To turn on screen-reader adjustments at any time, users need only to press the Alt+1 keyboard
          combination. Screen- reader users also get automatic announcements to turn the Screen-reader mode on as soon
          as they enter the website.
        </Text>
        <Text>These adjustments are compatible with all popular screen readers, including JAWS and NVDA.</Text>
        <Text>
          Keyboard navigation optimization: The background process also adjusts the website's HTML, and adds various
          behaviors using JavaScript code to make the website operable by the keyboard. This includes the ability to
          navigate the website using the Tab and Shift+Tab keys, operate dropdowns with the arrow keys, close them with
          Esc, trigger buttons and links using the Enter key, navigate between radio and checkbox elements using the
          arrow keys, and fill them in with the Spacebar or Enter key. Additionally, keyboard users will find quick
          navigation and content-skip menus, available at any time by clicking Alt+1, or as the first element of the
          site while navigating with the keyboard. The background process also handles triggered popups by moving the
          keyboard focus towards them as soon as they appear, and not allow the focus to drift outside of it.
        </Text>
        <Text>
          Users can also use shortcuts such as "M" (menus), "H" (headings), "F" (forms), "B" (buttons), and "G"
          (graphics) to jump to specific elements.
        </Text>

        <Title>DISABILITY PROFILES SUPPORTED ON OUR WEBSITE</Title>
        <ul>
          <ListItem>
            <strong>Epilepsy Safe Profile:</strong> this profile enables people with epilepsy to use the website safely
            by eliminating the risk of seizures that result from flashing or blinking animations and risky color
            combinations.
          </ListItem>
          <ListItem>
            <strong>Vision Impaired Profile:</strong> this profile adjusts the website so that it is accessible to the
            majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others.
          </ListItem>
          <ListItem>
            <strong>Cognitive Disability Profile:</strong> this profile provides various assistive features to help
            users with cognitive disabilities such as Autism, Dyslexia, CVA, and others, to focus on the essential
            elements more easily.
          </ListItem>
          <ListItem>
            <strong>ADHD Friendly Profile:</strong> this profile significantly reduces distractions and noise, to help
            people with ADHD and Neurodevelopmental disorders browse, read, and focus on the essential elements more
            easily.
          </ListItem>
          <ListItem>
            <strong>Blind Users Profile (Screen-readers):</strong> this profile adjusts the website to be compatible
            with screen-readers such as JAWS, NVDA, VoiceOver, and TalkBack. A screen-reader is installed on the blind
            user's computer, and this site is compatible with it.
          </ListItem>
          <ListItem>
            <strong>Keyboard Navigation Profile (Motor-Impaired):</strong> this profile enables motor-impaired persons
            to operate the website using the keyboard Tab, Shift+Tab, and the Enter keys. Users can also use shortcuts
            such as "M" (menus), "H" (headings), "F" (forms), "B" (buttons), and "G" (graphics) to jump to specific
            elements.
          </ListItem>
        </ul>

        <Title>ADDITIONAL UI, DESIGN, AND READABILITY ADJUSTMENTS</Title>
        <ul>
          <ListItem>
            <strong>Font adjustments</strong> – users can increase and decrease its size, change its family (type),
            adjust the spacing, alignment, line height, and more.
          </ListItem>
          <ListItem>
            <strong>Color adjustments</strong> – users can select various color contrast profiles such as light, dark,
            inverted, and monochrome. Additionally, users can swap color schemes of titles, texts, and backgrounds, with
            over 7 different coloring options.
          </ListItem>
          <ListItem>
            <strong>Animations</strong> – epileptic users can stop all running animations with the click of a button.
            Animations controlled by the interface include videos, GIFs, and CSS flashing transitions.
          </ListItem>
          <ListItem>
            <strong>Content highlighting</strong> – users can choose to emphasize important elements such as links and
            titles. They can also choose to highlight focused or hovered elements only.
          </ListItem>
          <ListItem>
            <strong>Audio muting</strong> – users with hearing devices may experience headaches or other issues due to
            automatic audio playing. This option lets users mute the entire website instantly.
          </ListItem>
          <ListItem>
            <strong>Cognitive disorders</strong> – we utilize a search engine that is linked to Wikipedia and
            Wiktionary, allowing people with cognitive disorders to decipher meanings of phrases, initials, slang, and
            others.
          </ListItem>
          <ListItem>
            <strong>Additional functions</strong> – we provide users the option to change cursor color and size, use a
            printing mode, enable a virtual keyboard, and many other functions.
          </ListItem>
        </ul>

        <Title>ASSISTIVE TECHNOLOGY AND BROWSER COMPATIBILITY</Title>
        <Text>
          We aim to support the widest array of browsers and assistive technologies as possible, so our users can choose
          the best fitting tools for them, with as few limitations as possible. Therefore, we have worked very hard to
          be able to support all major systems that comprise over 95% of the user market share including Google Chrome,
          Mozilla Firefox, Apple Safari, Opera and Microsoft Edge, JAWS, and NVDA (screen readers), both for Windows and
          for MAC users.
        </Text>

        <Title>NOTES, COMMENTS, AND FEEDBACK</Title>
        <Text>
          Despite our very best efforts to allow anybody to adjust the website to their needs, there may still be pages
          or sections that are not fully accessible, are in the process of becoming accessible, or are lacking an
          adequate technological solution to make them accessible. Still, we are continually improving our
          accessibility, adding, updating, and improving its options and features, and developing and adopting new
          technologies. All this is meant to reach the optimal level of accessibility, following technological
          advancements. If you wish to contact the website's owner please use the following email{' '}
          <a href="mailto:info@orangeleafyogurt.com">info@orangeleafyogurt.com</a> or call us at{' '}
          <a href="tel:214-302-5910">214-302-5910</a>
          and one of our team members will personally assist you.
        </Text>
      </Paper>
    </MaxWidthWrapper>
  </RelativeWrapper>
);

export default AccessibilityStatementSection;
