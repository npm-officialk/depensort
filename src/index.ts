#!/usr/bin/env node

import yargs from "yargs/yargs"

const depensort = () =>
	yargs(process.argv.slice(2))
		.scriptName("depensort")
		.usage("Usage: $0 [command]")
		.commandDir("./commands", {
			extensions: ["ts", "js"],
			exclude: /\.spec\.ts$/,
		})
		.strict().argv

depensort()
