export default class Sorter {
	_toBeSorted: object

	/**
	 * @class Sorter
	 * @classdesc consists of methods used to sorft and manipulate the given object
	 * @property { String } _toBeSorted - the object to be sorted
	 * @constructor
	 * @param { Object } toBeSorted - pass the object to be sorted
	 * @throws when the object has values that are of any other type than string this will throw an Error
	 * @example
	 * //succeeds
	 * const sorter = new Sorter({
	 * 		"key":"value",
	 * 		"key1":"value1"
	 * })
	 * // fails
	 * const sorter = new Sorter({
	 * 		"key":true
	 * })
	 * // fails
	 * const sorter = new Sorter({
	 * 		"key":1
	 * })
	 * // fails
	 * const sorter = new Sorter({
	 * 		"key":["anything","other","than","a","normal","string","in","value","will","fail"]
	 * })
	 */
	constructor(toBeSorted: object) {
		if (Object.entries(toBeSorted).filter(item => item.length !== 2 || typeof item[1] !== "string").length > 0) {
			throw new Error("The object should be a simple mapping of keys and string values")
		}
		this._toBeSorted = toBeSorted
	}

	/**
	 * @memberof Sorter
	 * @method sort
	 * @instance
	 * @description sorts the object set in the _toBeSorted as per the key length(and value length if key length is same)
	 * @returns { Object } - returns the fully sorted array sortedArray
	 * @example
	 * const sorter = new Sorter({
	 * 		"second":"value",
	 * 		"first":"value1",
	 * 		"samelength1":"longer value",
	 * 		"samelength2":"small value"
	 * })
	 * const output = sorter.sort()
	 * console.log(output)
	 * // {
	 * //		"first":"value1",
	 * //		"second":"value",
	 * //		"samelength2":"small value",
	 * //		"samelength1":"longer value"
	 * // }
	 */
	sort() {
		const sortedArray = Object.entries(this._toBeSorted).sort((first: any, second: any) => {
			let difference = first[0].length - second[0].length
			if (difference === 0) {
				difference = first[1].length - second[1].length
			}
			return difference
		})
		return Object.fromEntries(sortedArray)
	}
}
