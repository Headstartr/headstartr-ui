import { WaitlistFormAction, WaitlistFormState } from './WaitlistForm.types';

export function waitlistReducer(
  state: WaitlistFormState,
  action: WaitlistFormAction
) {
  switch (action.type) {
    case 'email':
      return {
        ...state,
        email: typeof action.payload === 'string' ? action.payload : '',
      };
    case 'twitterHandle':
      return {
        ...state,
        twitterHandle: typeof action.payload === 'string' ? action.payload : '',
      };
    case 'isWaitlisterSeller':
      return {
        ...state,
        isWaitlisterSeller:
          typeof action.payload === 'boolean' ? action.payload : false,
      };
    case 'isWaitlisterBuyer':
      return {
        ...state,
        isWaitlisterBuyer:
          typeof action.payload === 'boolean' ? action.payload : false,
      };
    case 'statusUpdate':
      return {
        ...state,
        isSubmissionSuccess:
          typeof action.payload === 'object'
            ? action.payload.isSubmissionSuccess
            : false,
        statusMessage:
          typeof action.payload === 'object'
            ? action.payload.statusMessage
            : '',
      };
    default:
      return state;
  }
}
