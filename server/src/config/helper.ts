export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRaffleResult(amount: number, min: number, max: number) {
  const result: number[] = [];
  for (let i = 0; i < amount; i++) {
    var tmp = getRandomInt(min, max);
    if (result.indexOf(tmp) === -1) {
      result.push(tmp);
    } else {
      i--;
    }
  }
  return result;
}

export function compare(a: number, b: number) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

export function getRandomId(length: number) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
