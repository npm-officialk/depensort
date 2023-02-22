# `depensort`

`a package that helps you keep a beautiful looking package.json that has been sorted as per your configuration`

[![Documentation site](https://img.shields.io/static/v1?style=for-the-badge&label=%20&message=documentation&color=blue&logo=readthedocs&logoColor=white)](https://npm.officialk.dev/depensort)

**NPM**

[![NPM version](https://img.shields.io/npm/v/depensort?style=for-the-badge)](https://npmjs.org/package/depensort)
![NPM size](https://img.shields.io/bundlephobia/min/depensort?style=for-the-badge)
![NPM vunerabilities](https://img.shields.io/snyk/vulnerabilities/npm/depensort?style=for-the-badge)

**GitHub**

[![GitHub License](https://img.shields.io/github/license/npm-officialk/depensort?style=for-the-badge)](https://github.com/npm-officialk/depensort/README.md)
[![GitHub issues](https://img.shields.io/github/issues/npm-officialk/depensort?style=for-the-badge)](https://github.com/npm-officialk/depensort/issues/)
[![GitHub PRs](https://img.shields.io/github/issues-pr/npm-officialk/depensort?style=for-the-badge)](https://github.com/npm-officialk/depensort/pulls/)
[![GitHub Milestones](https://img.shields.io/github/milestones/all/npm-officialk/depensort?style=for-the-badge)](https://github.com/npm-officialk/depensort/milestones/)
![GitHub Sponsors](https://img.shields.io/github/sponsors/npm-officialk?style=for-the-badge)

## Installation

```yarn
yarn add depensort --dev
```

```npm
npm i -D depensort
```

## Usage

The package is used to sort the dependencies in the package.json file in ascending order of key length after every install(or on command)

### 1. Set the package to run after every install

```json
"scripts":{
	"postinstall":"depensort"
}
```

### 2. Call it manually

**From the cmd**

-   Install the package globally

```npm
npm i -g depensort
```

OR

```yarn
yarn global add depensort
```

-   Call it from the cmd

```bash
depensort
```

## For the devs

[Refer to the Developer Release Documentation](https://npm-officialk.github.io/depensort)

use the `yarn link` in the package's folder

and `yarn link "depensort"` in the folder you want to test the package in

this will install the package as a symbolic link in the test folder

now you can now use the package as if it was installed.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Some files to refer

-   [CONTRIBUTING](./.github/CONTRIBUTING.md)
-   [CODE_OF_CONDUCT](./.github/CODE_OF_CONDUCT.md)

Please make sure to update tests as appropriate.

## License

[LICENSE](./LICENSE)
