export const formatTime = time => {
  if (typeof time === 'undefined') {
    return null;
  } else if (typeof time === 'string') {
    return null;
  } else if (typeof time === 'function') {
    return null;
  } else if (time < 0) {
    return null;
  }
};
