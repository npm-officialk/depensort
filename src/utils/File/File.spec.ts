import { existsSync, mkdirSync, writeFileSync, rmSync } from "fs"
import File from "./"

const testAssetsDir = `./.cache`

const goodJson = {
	file: "used for testing purposes and should be deleted automatically",
	usedFor: "testing",
	deleted: false,
}

const notJson = "used for testing purposes and should be deleted automatically"

const setContent = () => {
	if (!existsSync(testAssetsDir)) {
		mkdirSync(testAssetsDir)
	}
	writeFileSync(`${testAssetsDir}/test.json`, JSON.stringify(goodJson), "utf8")
	writeFileSync(`${testAssetsDir}/.testrc`, JSON.stringify(goodJson), "utf8")
	writeFileSync(`${testAssetsDir}/test-fail.json`, notJson, "utf8")
	writeFileSync(`${testAssetsDir}/.test-failrc`, notJson, "utf8")
}

const clearFiles = () => {
	rmSync(`${testAssetsDir}/test.json`)
	rmSync(`${testAssetsDir}/.testrc`)
	rmSync(`${testAssetsDir}/test-fail.json`)
	rmSync(`${testAssetsDir}/.test-failrc`)
}

describe("Testing the File class and its methods", () => {
	beforeEach(() => {
		setContent()
	})
	afterAll(() => {
		clearFiles()
	})

	describe("Testing the constructor", () => {
		it("should create an instance when a valid file path is passed", () => {
			expect(new File(`${testAssetsDir}/test.json`)._file).toBe(`${testAssetsDir}/test.json`)
		})
		it("should throw an error when passed a invalid file path", () => {
			expect(() => {
				new File("./doesnt-exist.json")
			}).toThrow("File does not exist!")
		})
		it("should throw an error when passed a directory path", () => {
			expect(() => new File("./")).toThrow("Entered a directory, expected a file!")
		})
	})

	describe("Testing the read method", () => {
		it("should return json(parsed) content when reading a json file with valid content", () => {
			const file = new File(`${testAssetsDir}/test.json`)
			expect(file.read()).toStrictEqual(goodJson)
		})
		it("should return json(parsed) content when reading a non json file with valid content", () => {
			const file = new File(`${testAssetsDir}/.testrc`)
			expect(file.read()).toStrictEqual(goodJson)
		})
		it("should throw an error when reading a json file with bad/non json content", () => {
			const file = new File(`${testAssetsDir}/test-fail.json`)
			expect(() => {
				file.read()
			}).toThrowError()
		})
		it("should throw an error when reading a non json file with bad/non json content", () => {
			const file = new File(`${testAssetsDir}/.test-failrc`)
			expect(() => {
				file.read()
			}).toThrowError()
		})
	})

	describe("Testing the write method", () => {
		it("should write the json string to the file", () => {
			const file = new File(`${testAssetsDir}/.testrc`)
			file.write(JSON.stringify(goodJson))
			expect(file.read()).toStrictEqual(goodJson)
		})
		it("should write the json object to the file", () => {
			const file = new File(`${testAssetsDir}/.testrc`)
			file.write(goodJson)
			expect(file.read()).toStrictEqual(goodJson)
		})
	})
})
