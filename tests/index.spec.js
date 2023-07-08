const { execSync } = require("child_process")
const { readFileSync, writeFileSync } = require("fs")
let contents
describe("Testing the working of the package", () => {
	beforeAll(() => {
		contents = JSON.parse(readFileSync("package.json", "utf8"))
	})
	afterAll(() => {
		writeFileSync("package.json", JSON.stringify(contents, null, 4), "utf8")
	})
	it("should sort package json devDependencies", () => {
		execSync("yarn run sort")
		const devDependencies = contents.devDependencies
		const sortedArray = Object.entries(devDependencies).sort((first, second) => {
			let difference = first[0].length - second[0].length
			if (difference === 0) {
				difference = first[1].length - second[1].length
			}
			return difference
		})
		const newFile = JSON.parse(readFileSync("package.json", "utf8"))
		expect(JSON.stringify(Object.fromEntries(sortedArray))).toBe(JSON.stringify(newFile.devDependencies))
	})
})
