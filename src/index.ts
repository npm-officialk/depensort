#!/bin/bash/node
import File from "./File"
import Sorter from "./Sorter"

const depensort = () => {
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

depensort()
