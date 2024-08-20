/**
 * @param {num} 입력한 만큼의 길이의 랜덤 문자열을 생성합니다.
 */
export const generateRandomString = (num: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  localStorage.setItem('state', result);
  return result;
};
