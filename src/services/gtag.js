import gaId from '../configs/env';

export const pageview = (url) => {
  window.gtag('config', gaId, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
