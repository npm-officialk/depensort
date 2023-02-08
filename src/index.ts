import { readFileSync } from "fs"

import sayHello from "./hello/index"

const author = JSON.parse(readFileSync("package.json", { encoding: "utf8" }) ?? "{}")?.author?.name ?? "officialk"

// eslint-disable-next-line no-console
console.log(sayHello(author))

export default sayHello
