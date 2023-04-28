import { PropsWithChildren, createContext, useContext, useState } from 'react';

const WaitlistFormStatusContext = createContext({
  isWaitlistFormOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openWaitlistForm: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeWaitlistForm: () => {},
});

export default function WaitlsitFormStatusProvider({
  children,
}: PropsWithChildren) {
  const [isWaitlistFormOpen, setIsWaitlistFormOpen] = useState(false);
  const openWaitlistForm = () => setIsWaitlistFormOpen(true);
  const closeWaitlistForm = () => setIsWaitlistFormOpen(false);

  return (
    <WaitlistFormStatusContext.Provider
      value={{ isWaitlistFormOpen, openWaitlistForm, closeWaitlistForm }}
    >
      {children}
    </WaitlistFormStatusContext.Provider>
  );
}

export function useWaitlistFormStatus() {
  return useContext(WaitlistFormStatusContext);
}
