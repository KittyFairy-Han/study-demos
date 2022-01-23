/*
 * @Author: 鱼小柔
 * @Date: 2022-01-24 01:33:01
 * @LastEditors: your name
 * @LastEditTime: 2022-01-24 01:34:10
 * @Description: file content
 */
const urlList = [
  "https://img0.baidu.com/it/u=2300074797,1177194447&fm=26&fmt=auto",
  "https://img0.baidu.com/it/u=4278711527,768258772&fm=26&fmt=auto",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F11%2F20180311230642_wEf4Q.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637655384&t=dd30d6b4b322.59d71a91c4327a1cbf948",
  "https://c.53326.com/d/file/lan2018070309/mykni35l2ke.jpg",
  "https://image.uc.cn/s/wemedia/s/upload/2020/d240615e4c83f93700106fb4d87e64b7.jpg",
  "https://c.53326.com/d/file/lan2018070209/msl13w1t01i.jpg",
];
function randomPrize(item) {
  const index = Math.floor(Math.random() * urlList.length);
  return {
    name: "奖品-" + item,
    imgUrl: urlList[index],
    rare: index > urlList.length / 2,
  };
}
export function queryPrizes(params) {
  const prizeList = [1, 2, 3, 4, 5].map(randomPrize);
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(prizeList);
    }, 500);
  });
  return promise;
}
