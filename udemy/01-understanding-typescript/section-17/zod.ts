import fs from 'node:fs';

import { z } from 'zod';

// TypeScript는 컴파일 시간(Compile Time)에서만 타입 검증을 시도한다.
// Zod는 타입 검증을 런타임 시간(Run Time)에도 할 수 있게 해준다.

const content = JSON.parse(fs.readFileSync('data.json').toString());

// (1)
const dataSchema1 = z.string();

const parsedData1 = dataSchema1.parse(content);

// (2)
const dataSchema2 = z.object({
  title: z.string(),
  id: z.number(),
  values: z.array(z.union([z.string(), z.number()])),
});

const parsedData2 = dataSchema2.parse(content);

// (3)
type Data = z.infer<typeof dataSchema2>;

function output(data: Data) {
  console.log(data);
}

const parsedData3 = dataSchema2.parse(content);

output(parsedData3);
