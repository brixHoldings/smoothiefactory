'use client';

import { string, object } from 'yup';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Error } from '@components/pages/SmoothieFactory/OrangeLeaf/AboutUs/AboutUsSection/AboutUsSection.style';
import SuccessfulSubmit from '@components/pages/SmoothieFactory/OrangeLeaf/common/SuccessfulSubmit/SuccessfulSubmit';

import type { FC, FormEventHandler } from 'react';
import type { FieldValues } from 'react-hook-form';

import {
  FormBg,
  Paper,
  FormColumn,
  Title2,
  Paragraph,
  Form,
  InputWrapper,
  Label,
  Input,
  Select,
  LottieWrapper,
  FormButton,
} from './Form.style';
import { validatePhoneNumber } from '@utils/validatePhoneNumber';

import { Polygon } from '../../Home/BlendTogether/BlendTogether.style';

import letsBlendTogether from '../../../../../../public/lottie/letsBlendTogether.json';
import { validateDateFormat } from '@utils/validateDateFormat';
import { FormSlice } from 'prismicio-types';

type EClubFormData = {
  birthday: string;
  email: string;
  favoriteLocation: string;
  firstName: string;
  lastName: string;
  message: string;
  phone: string;
};

export const eClubFormSchema = object({
  birthday: string().required('This field is obligatory').test({
    message: 'Birthday must be in MM/DD format',
    name: 'valid',
    test: validateDateFormat,
  }),
  email: string().email('Add a valid email').required('This field is obligatory'),
  favoriteLocation: string().required('This field is obligatory'),
  firstName: string().required('This field is obligatory'),
  lastName: string().required('This field is obligatory'),
  phone: string().required('This field is obligatory').test({
    message: 'Add a valid phone number',
    name: 'valid',
    test: validatePhoneNumber,
  }),
}).required();

const FormComponent: FC<{ options: string[]; slice: FormSlice }> = ({
  options,
  slice: {
    primary: { title, text },
  },
}) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<EClubFormData>({
    resolver: yupResolver(eClubFormSchema),
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = useCallback(
    async (formData: FieldValues) => {
      setIsDisabled(true);

      try {
        const { status } = await fetch('/api/e-club', {
          body: JSON.stringify(formData),
          method: 'post',
        });

        if (status === 200) {
          setIsSubmitted(true);
          reset();
        }

        // eslint-disable-next-line no-empty
      } catch (e: unknown) {
      } finally {
        setIsDisabled(false);
      }
    },
    [reset],
  );

  return (
    <>
      <LottieWrapper>
        <Lottie animationData={letsBlendTogether} />
      </LottieWrapper>
      <Polygon />
      <FormBg id="form-bg">
        <Image alt="background" src="/images/Oranges.png" style={{ objectFit: 'cover' }} fill />
      </FormBg>
    </>
  );
};

export default FormComponent;
