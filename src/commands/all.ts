import File from "../utils/File"
import Sorter from "../utils/Sorter"

export const command = "$0"
export const alias = ["$0", "all"]
export const desc = "Sort all the dependencies in the package json"
export const builder = {}
export const handler = () => {
	const packageFile = new File(`${process.cwd()}/package.json`)
	const packageValues = packageFile.read()
	if (packageValues.dependencies) {
		packageValues.dependencies = new Sorter(packageValues.dependencies).sort()
	}
	if (packageValues.devDependencies) {
		packageValues.devDependencies = new Sorter(packageValues.devDependencies).sort()
	}
	if (packageValues.resolutions) {
		packageValues.resolutions = new Sorter(packageValues.resolutions).sort()
	}
	if (packageValues.overrides) {
		packageValues.overrides = new Sorter(packageValues.overrides).sort()
	}
	packageFile.write(packageValues)
}
