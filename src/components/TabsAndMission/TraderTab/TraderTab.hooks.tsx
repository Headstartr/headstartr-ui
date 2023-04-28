import {
  CSSProperties,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
} from 'react';

export default function useRenderIndicatorCallback() {
  // NOTE: explicit any to assert type later as inference was not working properly.
  // Ideally the callback should take 2 separate eventHandlers
  // reference: https://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--with-custom-status-arrows-and-indicators
  return useCallback(
    (
      onClickHandler: (e: any) => void,
      isSelected: boolean,
      index: number,
      label: string
    ) => {
      const indicatorStyles: CSSProperties = {
        background: '#9191b7',
        width: 8,
        height: 8,
        display: 'inline-block',
        margin: '-1rem 0.5rem',
        borderRadius: '50%',
      };

      if (isSelected) {
        return (
          <li style={{ ...indicatorStyles, background: '#636299' }}>
            <button
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          </li>
        );
      }
      return (
        // NOTE: Type assertion is not recommended
        <li key={index} style={indicatorStyles}>
          <button
            onClick={onClickHandler as MouseEventHandler<HTMLButtonElement>}
            onKeyDown={
              onClickHandler as KeyboardEventHandler<HTMLButtonElement>
            }
            value={index}
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        </li>
      );
    },
    []
  );
}
