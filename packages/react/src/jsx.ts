/*
 * @Description:
 * @Version: 1.0
 * @Autor: Li Cheng
 * @Date: 2024-07-10 18:47:24
 * @LastEditors: Li Cheng
 * @LastEditTime: 2024-07-10 21:29:46
 */
// ReactElement

import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
  Type,
  Key,
  Ref,
  Props,
  ElementType,
  ReactElement
} from 'shared/ReactTypes';

const ReactElement = function (
  type: Type,
  key: Key,
  ref: Ref,
  props: Props
): ReactElement {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    __mark: 'lc'
  };
  return element;
};

export const jsx = function (
  type: ElementType,
  config: any,
  ...mayBeChildren: any
) {
  // 如果没有传 key 它默认就 null
  let key: Key = null;
  const props: Props = {};
  let ref: Ref = null;

  // 遍历到的每一个prop 复制给key 或者 ref 或者props对象
  for (const prop in config) {
    const val = config[prop];
    //   如果是key 就赋值给key
    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + val;
      }
      continue;
    }

    // 如果是 ref 就赋值给 ref
    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val;
      }
      continue;
    }

    // 判读其他的 prop 是不是config 自己的 prop 而不是原型上的 prop
    if ({}.hasOwnProperty.call(config, prop)) {
      props[prop] = val;
    }
  }

  // 处理children
  const mayBeChildrenLength = mayBeChildren.length;
  // 判断是否有 children
  if (mayBeChildrenLength > 0) {
    //  判断是多个child还是多个 单个 children 就是唯一 多个就等于它本身
    if (mayBeChildrenLength === 1) {
      props.children = mayBeChildren[0];
    } else {
      props.children = mayBeChildren;
    }
  }
  // 返回一个 reactElement
  return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;
