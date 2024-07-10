/*
 * @Description:
 * @Version: 1.0
 * @Autor: Li Cheng
 * @Date: 2024-07-10 18:53:13
 * @LastEditors: Li Cheng
 * @LastEditTime: 2024-07-10 20:12:00
 */
// 判断当前宿主环境是否支持 symbol
const supportSymbol = typeof Symbol === 'function' && typeof Symbol.for;

// 如果支持 返回一个 smbol('react.element')，否则返回一个数字
export const REACT_ELEMENT_TYPE = supportSymbol
  ? Symbol.for('react.element')
  : 0xeac7;
