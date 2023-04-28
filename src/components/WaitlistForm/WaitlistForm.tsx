import Image from 'next/image';
import { useWaitlistFormStatus } from '@/providers/WaitlistFormStatusProvider';
import cross from '@/assets/images/cross.svg';
import styles from './WaitlistForm.module.css';
import Countdown from './Countdown/Countdown';
import {
  CheckboxInputProps,
  InputChangeEvent,
  TextInputProps,
} from './WaitlistForm.types';
import { FormEvent, useCallback, useReducer } from 'react';
import { waitlistReducer } from './WaitlistForm.utils';
import { z } from 'zod';
import submitFormData from '@/api/submitForm';

const emailSchema = z.string().email();

function TextInput({ placeholder, onChangeHandler }: TextInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border px-2 py-4"
      onChange={onChangeHandler}
    />
  );
}

function CheckboxInput({ labelTxt, onChangeHandler }: CheckboxInputProps) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        className="h-5 w-5 border"
        onChange={onChangeHandler}
      />
      {labelTxt}
    </label>
  );
}

function WaitlistForm() {
  const { isWaitlistFormOpen, closeWaitlistForm } = useWaitlistFormStatus();
  const [
    {
      email,
      twitterHandle,
      isWaitlisterSeller,
      isWaitlisterBuyer,
      isSubmissionSuccess,
      statusMessage,
    },
    waitlistDispatch,
  ] = useReducer(waitlistReducer, {
    email: '',
    twitterHandle: '',
    isWaitlisterSeller: false,
    isWaitlisterBuyer: false,
    isSubmissionSuccess: null,
    statusMessage: '',
  });

  const emailChangeHandler = (e: InputChangeEvent) =>
    waitlistDispatch({ type: 'email', payload: e.target.value });
  const twitterHandleChangeHandler = (e: InputChangeEvent) =>
    waitlistDispatch({
      type: 'twitterHandle',
      payload: e.target.value,
    });
  const sellerCheckChangeHandler = (e: InputChangeEvent) =>
    waitlistDispatch({ type: 'isWaitlisterSeller', payload: e.target.checked });
  const buyerCheckChangeHandler = (e: InputChangeEvent) =>
    waitlistDispatch({ type: 'isWaitlisterBuyer', payload: e.target.checked });

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const parsedEmail = emailSchema.parse(email);
        // attempt api call
        try {
          submitFormData({
            parsedEmail,
            twitterHandle,
            isWaitlisterSeller,
            isWaitlisterBuyer,
          });
          waitlistDispatch({
            type: 'statusUpdate',
            payload: {
              isSubmissionSuccess: true,
              statusMessage: 'Form submission successful',
            },
          });
        } catch (err) {
          waitlistDispatch({
            type: 'statusUpdate',
            payload: {
              isSubmissionSuccess: false,
              statusMessage: 'Form submission failed!',
            },
          });
        }
      } catch (zodErr) {
        waitlistDispatch({
          type: 'statusUpdate',
          payload: {
            isSubmissionSuccess: false,
            statusMessage: 'Invalid email address',
          },
        });
      }
    },
    [email, isWaitlisterBuyer, isWaitlisterSeller, twitterHandle]
  );

  return (
    <>
      {isWaitlistFormOpen ? (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center backdrop-contrast-50">
          {/* form */}
          <form
            className="flex min-w-[30rem] flex-col rounded-[20px] bg-white"
            onSubmit={handleSubmit}
          >
            {/* Form header */}
            <header
              className={`relative flex h-[10rem] w-full items-center rounded-t-[20px] py-8 ${styles.formHeaderBg}`}
            >
              <h1 className="z-10 p-8 text-3xl font-bold text-white shadow-black">
                headstartr Waiting List
              </h1>
              <button
                onClick={closeWaitlistForm}
                className="absolute right-1 top-1 h-8 w-8 self-start rounded-full bg-white"
              >
                <Image
                  src={cross}
                  alt="close hamburger menu button"
                  className="h-7 w-10"
                />
              </button>
            </header>

            <div className="flex flex-col px-8 py-4">
              {/* Form CTA and countdown */}
              <div className="text-slate">
                <h2>Join the league before everyone knows about it</h2>

                <Countdown />
              </div>

              {/* validation & API status messages */}
              <div
                className={`mt-8 flex justify-center py-4 ${
                  isSubmissionSuccess === null ? 'invisible' : 'block'
                } ${
                  isSubmissionSuccess
                    ? 'border border-green-800 bg-green-300 text-green-800'
                    : 'border border-red-800 bg-red-300 text-red-800'
                } `}
              >
                <strong>{statusMessage}</strong>
              </div>

              {/* input fields */}
              <div className="flex flex-col gap-3 py-4 pt-8">
                <TextInput
                  placeholder="Email address"
                  onChangeHandler={emailChangeHandler}
                />
                <TextInput
                  placeholder="Twitter handle"
                  onChangeHandler={twitterHandleChangeHandler}
                />
              </div>

              <div className="flex flex-col gap-3 py-4">
                <h3>I want to...</h3>
                <CheckboxInput
                  labelTxt="Sell products"
                  onChangeHandler={sellerCheckChangeHandler}
                />
                <CheckboxInput
                  labelTxt="Acquire products"
                  onChangeHandler={buyerCheckChangeHandler}
                />
              </div>

              {/* submit btn */}
              <button className="w-fit rounded-3xl bg-slate px-6 py-3 font-bold text-white">
                Join the waiting list
              </button>

              {/* subtext */}
              <small className="self-center justify-self-end pt-8">
                We won&apos;t send you spam. You can unsubscribe at any time.
              </small>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default WaitlistForm;
