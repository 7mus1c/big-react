/*
 * @Description:
 * @Version: 1.0
 * @Autor: Li Cheng
 * @Date: 2024-07-10 18:58:18
 * @LastEditors: Li Cheng
 * @LastEditTime: 2024-07-10 20:11:30
 */
export type Type = any;
export type Key = any;
export type Ref = any;
export type Props = any;
export type Element = any;

export interface ReactElement {
  $$typeof: symbol | number;
  type: Element;
  key: Key;
  Props: Props;
  ref: Ref;
  __mark: string;
}
