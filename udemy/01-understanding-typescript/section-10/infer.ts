// Making Sense of the 'infer' Keyword
// - 타입에서 특정 정보를 추출할 때 사용
// - 단독으로 사용할 수 없고, 반드시 조건부 타입과 함께 사용됨.
function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add; // (a: number, b: number) => number
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never; // return value만 추출

type AddFnReturnValueType = ReturnValueType<AddFn>; // number
type AddFnReturnValueType2 = ReturnType<AddFn>; // 유틸리티 타입으로 똑같이 구현 가능
