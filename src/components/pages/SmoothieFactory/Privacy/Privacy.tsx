'use client';

import Image from 'next/image';

import { MaxWidthWrapper } from '@styles/common';

import { Container, Paper, Title, Text, RelativeWrapper, PageTitle } from './Privacy.style';

import type { FC } from 'react';

import FloatingImage from '../OrangeLeaf/common/FloatingImage/FloatingImage';

const Privacy: FC = () => (
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
      alt="background"
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
        <PageTitle>Privacy Policy</PageTitle>
        <Title>OUR PRIVACY COMMITMENT TO YOU</Title>
        <Text>
          Smoothie Holdings, LLC and its subsidiaries and affiliated companies (collectively, “Smoothie Factory
          <sup>®</sup>,” “we,” or “us”), operates a variety of websites or mobile applications, including
          smoothiefactory.com, the Smoothie Factory mobile application (“Application”), and any other site, mobile
          application, or online service where Smoothie Factory<sup>®</sup> Terms and Conditions of Use are posted
          (collectively, the “Sites”), and is committed to protecting the privacy of our Site users (“Users”) and
          Factory Rewards® members (“Members”) [when available]. This notice applies only to information collected or
          submitted on the Sites. To that end, we offer this privacy policy to inform our Members and Users (referred to
          individually, or collectively, as “you”) of how we collect, use and disclose your personal information
          (“Privacy Policy”). Smoothie Factory<sup>®</sup> strives to take reasonable steps to protect your personal
          information in accordance with this Privacy Policy and applicable laws. By using the Sites, you agree to the
          collection and use of your information as described herein regardless of whether or not you have read this
          Privacy Policy. If you do not agree to this Privacy Policy, do not access the Sites. We reserve the right to
          change the terms of this Privacy Policy and will post any changes on this page so that you are aware of what
          information we collect and how we use it. We encourage you to check this page regularly. Your continued use of
          any of the Sites following any changes will constitute your acceptance of such changes.
        </Text>
        <Title>THE INFORMATION WE COLLECT</Title>
        <Text>
          There are several types of information we collect on the Sites. On some pages, you can voluntarily provide
          personally identifiable information such as your name, e-mail address and phone number when you contact us
          with an inquiry, request, or suggestion, provide feedback on our products, participate in a marketing program,
          sweepstake, contest or survey, respond to an offer, or register to receive promotional materials. If you are
          interested in applying for a job at Smoothie Factory<sup>®</sup>, we may collect your resume. Holders of any
          Factory Rewards<sup>®</sup> loyalty and Smoothie Factory<sup>®</sup>® gift card may voluntarily register their
          cards on the Sites. When you purchase, register or reload (as applicable) your Factory Rewards loyalty and
          Smoothie Factory<sup>®</sup> gift card, we may collect the personally identifiable information listed above,
          financial information (credit card numbers, credit card expiration dates, etc.), and user profile and
          preferences information. After you have registered your e-mail address on the Sites and if you have signed
          into the Sites with your email address and password, or with other shared methods of authentication such as
          your Facebook® account, Smoothie Factory<sup>®</sup> may collect Site behavior and browser information as you
          navigate through the Sites. This information may be used to create a profile that we keep on individual Users
          that details their preferences, personal information and behavior. Consequently, collected information may be
          tied to the User’s personally identifiable information and may be used to provide offers and improve the
          content of the Sites for the User. This profile may also be used to tailor a User’s visit to our Sites, and to
          direct pertinent marketing promotions to the User.
        </Text>
        <Text>
          We may also collect personal information from other sources. For example, we may purchase third party
          marketing data and add it to our existing databases of User and Member information to better target our
          advertising and provide pertinent offers we think our Users and Members would be interested in. We use this
          information to enhance or overlay the ‘profile’ of individual Users. This aggregate marketing data may
          therefore be tied to the User’s or Member’s personally identifiable information.
        </Text>
        <Text>
          We do not knowingly collect personally identifiable information from visitors to the Sites who are under 13
          years of age.
        </Text>
        <Title>INTELLECTUAL PROPERTY, COPYRIGHT AND TRADEMARK NOTICE</Title>
        <Text>
          The Sites and its contents, including but not limited to, all Site software, design, text, editorial
          materials, information, data, photographs, visual interfaces, user interfaces, images, graphics,
          illustrations, video, sound, games, clips, artwork, hyperlinks, displays, and other materials, (all such
          content collectively referred to as “Content”), and the design, structure, selection, coordination,
          expression, look and feel and arrangement of such Content, are protected under United States and international
          copyright laws and are the property of Smoothie Factory<sup>®</sup> or its third party licensors. All rights
          are reserved by Smoothie Factory<sup>®</sup>. The Smoothie Factory<sup>®</sup> name, design and related marks
          are registered trademarks of Smoothie Holdings, LLC. All other names, logos, splash screens, page headers,
          custom graphics and button icons, or other indicia of origin displayed on the Sites are either service marks,
          names, logos, trademarks, service marks, trade dress, or are otherwise the property (collectively, “Marks”) of
          Smoothie Factory<sup>®</sup> or its third party licensors.
        </Text>
        <Title>
          HOW DOES Smoothie Factory<sup>®</sup> HANDLE INFORMATION FROM CHILDREN?
        </Title>
        <Text>
          Please note that Smoothie Factory<sup>®</sup> has no intention of collecting personal information from
          individuals under the age of 13 (“children”). We are committed to protecting children’s privacy on the
          Internet and we comply fully with the Children’s Online Privacy Protection Act (COPPA). Where appropriate, we
          will instruct children not to provide such information to us. If a parent becomes aware that a child has
          provided us with personal information, we ask that the parent or legal guardian of the child contact us via
          the Contact Us section of the Sites, or in writing to Smoothie Holdings, LLC, Attn: Online Privacy, 14860
          Montfort Drive, Suite 150 PMB 34, Dallas, TX 75254, to request that this information be deleted from our
          records.
        </Text>
        <Title>
          DOES Smoothie Factory<sup>®</sup> USE COOKIE TECHNOLOGY?
        </Title>
        <Text>
          Smoothie Factory<sup>®</sup> may use cookie technology to make your use of the Sites more convenient and to
          support our internal business purposes. A cookie is a piece of information that is transferred to a User’s
          hard drive for record-keeping purposes. For example, our Sites may use cookies to remember your e-mail address
          so that you will not have to re-enter this information each time you visit the Site. Smoothie Factory
          <sup>®</sup> may also use cookies to help track referrals from third party web sites. Most browsers are
          initially set up to accept cookies, but you can set up your browser to alert you every time a cookie is
          offered, letting you decide whether or not to accept it. You can use and visit the Site with cookies disabled,
          but you will not automatically be recognized by the Site upon re-visiting. However, cookies allow you to take
          full advantage of some of our Sites’ best features, so we recommend that you leave them turned on.
        </Text>
        <Text>
          Some of our business partners may use cookies on our Sites (for example, advertising partners). However, we
          have no access to or control over these cookies, once we have given permission for them to set cookies.
        </Text>
        <Title>
          WHAT OTHER MECHANISMS DOES Smoothie Factory<sup>®</sup> USE TO TRACK USER BEHAVIOR?
        </Title>
        <Text>
          Some Site web pages and HTML-formatted e-mails and e-newsletters may use web beacons to compile statistics
          about Web Site usage. A web beacon is an electronic image, called a single-pixel (1×1) or clear GIF. Web
          beacons can recognize certain types of information on a visitor’s computer, such as a visitor’s cookie number,
          time and date of a page view, and a description of the page where the Web beacon is placed. You may render
          some web beacons unusable by rejecting their associated cookies.
        </Text>
        <Text>
          Smoothie Factory<sup>®</sup> and its third party vendors may use web beacons to track and analyze
          non-personally identifiable usage information and to compile statistical information about Users in order to
          improve the Sites’ quality and to support our business. All data collected on behalf of Smoothie Factory
          <sup>®</sup> is owned and used by Smoothie Factory<sup>®</sup>. Smoothie Factory<sup>®</sup> reserves the
          right to publish non-personally identifiable, summary information regarding its Users for promotional purposes
          and as a representative audience for business partners.
        </Text>
        <Text>
          We may also collect information in log files that include data such as internet protocol (IP) addresses,
          browser type, internet service provider (ISP), referring/exit pages, platform type, date/time stamp, and
          number of clicks. We and our business partners may use this information to analyze trends, administer the
          Site, track User’s movement in the aggregate, and gather broad demographic information for aggregate use. IP
          addresses, etc. are not linked to personally identifiable information.
        </Text>
        <Title>THE WAY WE USE INFORMATION</Title>
        <Text>
          We may sell or disclose your personally identifiable information to third parties for direct marketing
          purposes without providing you an opportunity to opt out or otherwise prohibit such use. Smoothie Factory
          <sup>®</sup> uses the personal information you provide for the purposes for which it was provided, for
          example, to support a Factory Rewards<sup>®</sup> program; to notify you that you have won a contest or
          sweepstakes; to respond to your inquiries or complaints; or to contact you or send you information about your
          membership. In addition, Smoothie Factory<sup>®</sup>, its subsidiaries and their franchisees may share and
          use information collected through the Sites to administer and manage our business, including, for example, to
          address customer complaints; for account maintenance purposes; in connection with information technology
          services; to detect, prevent, or investigate security breaches or fraud; and to maintain appropriate records
          for internal administrative purposes. Personal information may also be used to create a profile that we keep
          on individual Users that details their preferences and behavior. This profile may be used to develop and
          improve the products, benefits and services that Smoothie Factory<sup>®</sup>, its subsidiaries and their
          franchisees, and business partners offer to our Members or Users, to operate, improve, service and maintain
          the Sites and the associated user experience, and to develop pertinent marketing promotions to Users and
          Members. Further, we may access, use or disclose your personally identifiable information to provide targeted
          e-mails, text messages, surveys, or promotional offers to you; analyze the Sites to make it more effective; or
          for other general internal business purposes. If you opt in, we may send you promotions, special offers and
          alerts to you via text message. You may opt out to stop receiving these text messages at any time.
        </Text>
        <Text>
          In connection with any Factory Rewards<sup>®</sup> loyalty and Smoothie Factory<sup>®</sup> gift cards, we
          will use the information collected to create an easy-to-use and convenient way to process your transactions
          and provide you information about your Factory Rewards<sup>®</sup> loyalty and Smoothie Factory<sup>®</sup>{' '}
          gift card balances. Financial information is not used for any other purpose than billing.
        </Text>
        <Text>
          We may use third party contractors to help us operate our business and the Sites or administer activities on
          our behalf, such as authorize credit card transactions. We may share your personally identifiable information
          with these contractors for those limited purposes.
        </Text>
        <Text>
          We may use non-identifying and aggregate information about the Sites and Users for internal purposes and we
          may share it with third parties to illustrate trends and user demographics. We may periodically remove from
          personal information data that can be used to identify individuals for example by summarizing, aggregating or
          removing certain data elements. The resulting cleaned data is no longer considered personal information and is
          not subject to this Privacy Policy. The cleaned data may be published by Smoothie Factory<sup>®</sup> and
          provided to various third parties.
        </Text>
        <Text>
          We may transfer your personal information in the event of a corporate sale, merger, acquisition, dissolution,
          or similar event. We may also use and disclose your personal information to parties connected with the
          contemplated or actual financing, insuring, sale, assignment or other disposal of all or part of our business
          or assets, including for the purposes of determining whether to proceed or continue with such transaction or
          business relationship or fulfilling any records or other reporting requirements to such parties. We may
          require such parties to treat your personal information in accordance with this Privacy Policy and to use and
          disclose it only for the purposes for which it was collected. Where permitted or required by law, Smoothie
          Factory may collect, use or disclose your personal information without your consent, for example in response
          to a court order or subpoena or to comply with a legally permitted inquiry by a government agency or protect
          the interests or safety of Smoothie Factory<sup>®</sup> or other Users.
        </Text>
        <Text>
          Please note that if you disclose your personal information in a manner that will be posted publicly, such as
          in a product review or photograph you post on our Sites, or share with others through media sharing
          applications such as Instagram®, Pinterest® or Tumblr®, your posting will be seen by others. In addition, if
          you elect to participate in certain community features offered from time to time, selected information about
          you may be shared with other participants in these community features. Also, Smoothie Factory<sup>®</sup> may
          make it possible for certain third party web sites to be accessed directly from our Sites and for selected
          information about you to be provided to these third party web sites if you are also a user of these third
          party web sites. If a third party web site allows other users to view information about you (e.g. through
          posting to a publicly available profile page), the information provided by Smoothie Factory<sup>®</sup> will
          be visible to other users of the third party web site.
        </Text>
        <Title>
          WHEN WILL I BE CONTACTED BY Smoothie Factory<sup>®</sup>?
        </Title>
        <Text>
          You may receive products and communications associated with your transactions with Smoothie Factory
          <sup>®</sup>, such as purchases, sweepstakes and contests. You may also receive communications from Smoothie
          Factory<sup>®</sup> related to transactions that appear to be from you or which appear to be fraudulent. You
          may be contacted in regards to an issue on your account or in response to a customer service contact initiated
          by you or in response to a specific request from you such as clicking on a “forgot my password” link. Any
          administrative communications also may be accompanied by information about products and services, special
          offers and upcoming promotions or events offered by Smoothie Factory<sup>®</sup>, our subsidiaries and their
          franchisees or our marketing partners that we think may be of interest to you (“direct marketing”).
        </Text>
        <Text>
          You may periodically receive from Smoothie Factory<sup>®</sup>, its subsidiaries and their franchisees
          unsolicited direct marketing communications by mail (delivered via the United States Postal Service). Smoothie
          Factory<sup>®</sup> and its subsidiaries and their franchisees aspire to send standalone direct marketing
          e-mail communications to you only if you have previously opted in to receiving such communications. We support
          the option to not receive these types of communications. Please see the following section: How Can I Opt Out
          of Receiving Direct Marketing from Smoothie Factory<sup>®</sup>?
        </Text>
        <Title>
          HOW CAN I OPT OUT OF RECEIVING DIRECT MARKETING FROM Smoothie Factory<sup>®</sup>?
        </Title>
        <Text>
          By providing us with your personal information, you consent to our collection, use and disclosure of that
          information as described in this Privacy Policy as amended from time to time or as described at or before the
          time of collection, use or disclosure, as the case may be. Smoothie Factory<sup>®</sup> is the owner of the
          personal information collected on our Sites. If you do not want your personal information to be collected,
          used or disclosed in this manner, please do not submit your personal information to us.
        </Text>
        <Text>
          If you would prefer that Smoothie Factory<sup>®</sup> not use your personal information for standalone direct
          marketing communications, subject to legal, or contractual restrictions and legal notice, you may opt out of
          such uses and/or disclosures by (a) checking the appropriate “Opt Out” box in any applicable e-mail
          communication or e-newsletter, (b) visiting smoothiefactory.com, selecting ‘Contact’ and completing the
          contact form, or (c) writing to us at Smoothie Holdings, LLC, Attn: Online Customer Service, 14860 Montfort
          Drive, Suite 150 PMB 34, Dallas, TX 75254. Once you have opted out, your subsequent registration for our
          direct marketing services and promotions, such as our sweepstakes and contests may void, temporarily or
          permanently, your prior elections to opt out of receiving direct marketing communications from Smoothie
          Factory<sup>®</sup>. Please consult the applicable rules of the promotion or service before participating.
          Note that when you elect to opt out, we do not delete your personal information.
        </Text>
        <Text>
          E-mails that are sent to you as a result of you performing a business transaction with us or requesting
          specific information from Smoothie Factory<sup>®</sup> are not subject to an “Opt Out” process. If you have
          any suggestions on how to improve these e-mails, please let us know by using the Contact Us functionality on
          the Site. We appreciate your feedback but cannot commit to taking action.
        </Text>
        <Title>
          HOW DOES Smoothie Factory<sup>®</sup> PROTECT YOUR PERSONAL INFORMATION?
        </Title>
        <Text>
          Smoothie Factory<sup>®</sup> aspires to take reasonable measures to protect the personal information it
          collects, uses, stores or discloses. We aspire to implement physical, technological and organizational
          procedures designed to protect the integrity and security, and to ensure the appropriate use, of your personal
          information. These procedures are proportional to the nature, sensitivity and format of the personal
          information collected, used, stored or disclosed by Smoothie Factory<sup>®</sup>. For example, Smoothie
          Factory<sup>®</sup> uses Secure Sockets Layering (SSL) to encrypt your financial information, including your
          credit card number, before it travels over the Internet. SSL technology is the industry standard for secure
          online transactions.
        </Text>
        <Title>WHAT ABOUT LINKS TO OTHER WEB SITES?</Title>
        <Text>
          This Privacy Policy applies solely to information collected by Smoothie Factory<sup>®</sup>. However, our
          Sites may contain links to other web sites owned and operated by third parties. The third parties who operate
          these sites may treat the collection, use and disclosure of personal information differently than we do. This
          could be the case even for those web sites that carry Smoothie Factory<sup>®</sup>’s or its affiliates’
          trademarks or logos or which are framed by our Sites. Please be aware that Smoothie Factory<sup>®</sup> is not
          responsible for the data collection, use and disclosure practices of companies or organizations to which our
          Sites may provide links. We encourage our Users to be aware when they leave our Sites and to read the privacy
          statements of each and every Web site that collects personally identifiable information.
        </Text>
        <Title>HOW CAN I ACCESS OR CORRECT MY PERSONAL INFORMATION?</Title>
        <Text>
          If a User’s personally identifiable information changes (such as zip code, phone, e-mail or postal address),
          or if a User no longer desires our services, we provide a way to correct, update or deactivate Users’
          personally identifiable information. You can review or change some of your personal information by visiting
          the Site, entering your e-mail address and password and accessing the “My Account” area of the Site. Please
          note that in most cases, Smoothie Factory<sup>®</sup> will retain the previously entered data, and may even be
          prohibited by law from expunging certain data from its systems.
        </Text>
        <Title>
          HOW DO I CONTACT Smoothie Factory<sup>®</sup> REGARDING THE SITE AND THIS PRIVACY POLICY?
        </Title>
        <Text>
          If Users have any questions or suggestions regarding our Privacy Policy, please visit smoothiefactory.com,
          select ‘Contact Us’ and complete the contact form. You may also mail your questions or suggestions to:
          Smoothie Holdings, LLC, Attn: Customer Service, 14860 Montfort Drive, Suite 150 PMB 34, Dallas, TX 75254.
        </Text>
        <Title>CALIFORNIA RESIDENTS</Title>
        <Text>
          If you are a California resident, you can request a notice disclosing the categories or personal information
          we have shared with third parties, if any, for the third parties’ direct marketing purposes. To request a
          notice, please submit your request by mail to: Smoothie Holdings, LLC, Attn: Customer Service, 14850 Montfort
          Drive, Suite 131, Dallas, TX 75254. Please specify that you are requesting a “California Privacy Rights
          Notice.” We will make every effort to promptly respond to your request.
        </Text>
      </Paper>
    </MaxWidthWrapper>
  </RelativeWrapper>
);

export default Privacy;
