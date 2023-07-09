import Sorter from "./"

const unsortedObject = {
	longTextShouldBelast: "demo",
	shortFirst: "demo",
	sameLength1: "this has a longer value",
	sameLength2: "shorter value",
}

describe("Testing the Sorter class and its methods", () => {
	describe("Testing the constructor", () => {
		it("should create an instance if a valid json is passed", () => {
			expect(new Sorter(unsortedObject)._toBeSorted).toStrictEqual(unsortedObject)
		})
		it("should throw an error if invalid json is passed", () => {
			expect(
				() =>
					new Sorter({
						mainKey: ["this", "fails", "the", "test"],
						validKey: "demo",
					})._toBeSorted
			).toThrowError("The object should be a simple mapping of keys and string values")
		})
	})
	describe("Testing the sort method", () => {
		it("should sort the given valid object as per the key length", () => {
			expect(new Sorter(unsortedObject).sort()).toStrictEqual({
				shortFirst: "demo",
				sameLength2: "shorter value",
				sameLength1: "this has a longer value",
				longTextShouldBelast: "demo",
			})
		})
	})
})
