import { ChangeEvent } from 'react';

export type TextInputProps = {
  placeholder: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type CheckboxInputProps = {
  labelTxt: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type WaitlistFormState = {
  email: string;
  twitterHandle: string;
  isWaitlisterSeller: boolean;
  isWaitlisterBuyer: boolean;
  isSubmissionSuccess: boolean | null;
  statusMessage: string;
};

export type WaitlistFormAction = {
  type: string;
  payload:
    | string
    | boolean
    | { isSubmissionSuccess: boolean; statusMessage: string };
};

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
