import { readFileSync } from "fs"

import File from "../src/File"
import Sorter from "../src/Sorter"

describe("Testing the working of the package", () => {
	describe("Considering the File and Sorter classes", () => {
		it("should be able to read from a file sort it and write the sorted data back to the file", () => {
			const filename = `${__dirname}/test.json`
			const file = new File(filename)
			const fileContent = file.read()
			const sorter = new Sorter(fileContent)
			const sortedContent = sorter.sort()
			file.write(sortedContent)

			expect(JSON.parse(readFileSync(filename, "utf8"))).toStrictEqual({
				shortFirst: "demo",
				sameLength2: "shorter value",
				sameLength1: "this has a longer value",
				alphabetical: "This should not matter(sorted as per key lenght)",
				longTextShouldBelast: "demo",
			})
			file.write(fileContent)
		})
	})
})
