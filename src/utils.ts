// @ts-nocheck
export const formatterDate = (date: Date) => {
  const YYYY = date.getFullYear();
  let MM = date.getMonth() + 1;
  let DD = date.getDate();
  if (MM < 10) MM = '0' + MM;
  if (DD < 10) DD = '0' + DD;

  const HH = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();
  if (HH < 10) HH = '0' + HH;
  if (mm < 10) mm = '0' + mm;
  if (ss < 10) ss = '0' + ss;

  return `${YYYY}-${MM}-${DD}(${HH}:${mm}:${ss})`;
}

