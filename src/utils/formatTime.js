export const formatTime = time => {
  if (typeof time != 'number' || time <0) {
    return null;
  }

  // time === 60 ===> 00:01:00
  // 3600 // 1h
  // 3662 // 1h 20m 2s

  let hours, minutes, seconds;
  const h = parseInt(time / 3600); // 1h

  if (h <= 0) {
    hours = '00';
  } else if (h < 10) {
    hours = `0${h}`;
  } else {
    hours = h;
  }

  time -= h * 3600;
  const m = parseInt(time / 60);

  if (m <= 0) {
    minutes = '00';
  } else if (m < 10) {
    minutes = `0${m}`;
  } else {
    minutes = m;
  }

  time -= m * 60;
  const s = time;

  if (s <= 0) {
    seconds = '00';
  } else if (s < 10) {
    seconds = `0${s}`;
  } else {
    seconds = s;
  }

  return `${hours} : ${minutes} : ${seconds}`;
};

