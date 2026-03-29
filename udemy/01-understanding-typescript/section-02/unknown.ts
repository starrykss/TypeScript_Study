// unknown Type
function process(val: any) {
  // 어떤 타입 형태든 바로 사용 가능
  val.log();
}

function process2(val: unknown) {
  // val.log(); // error

  // 구체적으로 타입 좁히기를 해야 타입 오류 없이 사용 가능
  if (
    typeof val === 'object' &&
    !!val &&
    'log' in val &&
    typeof val.log === 'function'
  ) {
    val.log(); // ok
  }
}
