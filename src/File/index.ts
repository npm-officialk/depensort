import { existsSync, statSync, readFileSync, writeFileSync } from "fs"

/**
 * @requires fs
 */

export default class File {
	_file: string

	/**
	 * @class File
	 * @classdesc used to read and write files in json format
	 * @property { String } _file - the file to be used
	 * @constructor
	 * @param { String } path - the path of the json file you want to use
	 * @throws when the path given is a directory it will throw an Error
	 * @throws when the path given is a non existant file it will throw an Error
	 * @example
	 * //succeeds
	 * const file = new File("./config.json")
	 * const file = new File("./.configrc") //.configrc is in json format
	 * // fails
	 * const file = new File("./")
	 * // fails
	 * const file = new File("./doesnt-exist.json")
	 */
	constructor(path: string) {
		if (!existsSync(path)) {
			throw new Error("File does not exist!")
		}
		if (!statSync(path).isFile()) {
			throw new Error("Entered a directory, expected a file!")
		}
		this._file = path
	}

	/**
	 * @memberOf File
	 * @method read
	 * @instance
	 * @description reads and converts the file contents to json
	 * @returns { Object } - the file contents converted to json
	 * @throws if JSON is unable to parse the file an Error is thrown
	 * @throws if file is not readable(permissions error) an Error is thrown
	 * @example
	 * const file = new File("./.configrc") //.configrc is in json format
	 * const content = file.read()
	 * console.log(content)
	 * // {
	 * //		"sort":"asc",
	 * //		"date":"09/02/1998",
	 * // }
	 */
	read() {
		try {
			return JSON.parse(readFileSync(this._file, { encoding: "utf8" }))
		} catch (e: any) {
			throw new Error(e)
		}
	}

	/**
	 * @memberOf File
	 * @method write
	 * @instance
	 * @description writes the given content to a file after convertion
	 * @param { (String | Object) } newData - the new data to be written
	 * @returns { Void }
	 * @example
	 * const file = new File("./.configrc")
	 * file.write({
	 * 		"sort":"asc",
	 * 		"date":"09/02/1998",
	 * })
	 */
	write(newData: string | object) {
		if (typeof newData !== "string") {
			newData = JSON.stringify(newData, null, 4)
		}
		return writeFileSync(this._file, newData, { encoding: "utf8" })
	}
}
