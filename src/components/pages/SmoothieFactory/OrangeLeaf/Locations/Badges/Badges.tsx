'use client';

import type { FC } from 'react';
import { useMemo } from 'react';

import { Container, Pill } from './Badges.styles';

export type CustomFields = {
  name: 'drive_thru' | 'is_kitchen';
  value: 'no' | 'yes';
};
const Badges: FC<{ customFields: CustomFields[] }> = ({ customFields }) => {
  const badges = useMemo(() => {
    const returnValue = [
      {
        color: '#23AA5D',
        text: 'Smoothie juicer',
      },
    ];

    customFields.forEach((field) => {
      if (field.name === 'is_kitchen' && field.value === 'yes') {
        returnValue.push({
          color: '#98C44A',
          text: 'Full kitchen',
        });
      }

      if (field.name === 'drive_thru' && field.value === 'yes') {
        returnValue.push({
          color: '#F69F24',
          text: 'Drive -trough',
        });
      }
    });

    return returnValue;
  }, [customFields]);

  return (
    <Container>
      {badges.map((badge) => (
        <Pill key={badge.color} color={badge.color}>
          {badge.text}
        </Pill>
      ))}
    </Container>
  );
};

export default Badges;
