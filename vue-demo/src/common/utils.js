/*
 * @Author: 鱼小柔
 * @Date: 2020-03-22 12:38:14
 * @LastEditors: your name
 * @LastEditTime: 2020-03-22 16:17:51
 * @Description: file content
 */
export function toa_b(ABC) {
  const a_b_c = ABC.replace(/[A-Z]/g, (match, index) => {
    if (index > 0) {
      return `-${match.toLowerCase()}`;
    } else {
      return match.toLowerCase();
    }
  });
  return a_b_c;
}
export function randomRangeInt(min, max) {
  return parseInt(Math.random() * (max - min)) + min;
}
