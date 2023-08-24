// 預設匯出，每個檔案只有一個預設匯出
// export default function fn() {
//   console.log('fn');
// }

export default {
  myName: 'Tom',
  fn() {
    console.log('fn');
  }
}

// 具名匯出，每個檔案可以有多個具名匯出
export function fn1() {
  console.log('fn1');
}
export const data = 123;