# Installation

_the project commands are setup to be used along with the **RUNNER** package manager_

## Commands

### **Server commands**

commands used to start servers for development

**start build server**

Runs the `node` server which serves the `./dist/index.js` file

_this will also run a `prestart` command which builds the ts code to the dist folder_

```
yarn run start
```

**start the dev server**

Runs the `nodemon` server which serves the `./src/index.ts` file

```
yarn run start:dev
```

**run the test server**

Runs the `jest` command with `--watchAll` flag and concurrently opens the browser serving the `coverage/lcov-report/` folder

_this will also run a `poststart:test` command which deletes the `coverage` folder after execution_

```
yarn run start:test
```

**run the Documentation server**

Builds the `jsdoc` documentation in the `prestart:docs` and then starts a server pointing to `docs` folder

_this will also run a `poststart:docs` command which deletes the `docs` folder after execution_

```
yarn run start:docs
```

**run a http server**

runs a `http-server` pointing to the mentioned folder and port

_by default will server the index file in the folder_

```
yarn run start:server -p <port> <folderPath>
```

---

### **Patching and fixing commands**

commands for devs to cleanup code and its quality,etc

**fix formatting in code**

runs `prettier` to fix and apply formatting as per `.prettierrc` config file

```
yarn run fix:format
```

**fix quality of code**

runs `eslint` with the `--fix` flag to try and fix the quality of code in `src` folder as per the mentioned config in `.eslintrc` file

```
yarn run fix:lint
```

**fix vunerability of code**

runs `snyk fix` to try and fix any code vunerability

```
yarn run fix:fortify
```

**fix vunerability of dependency**

runs `yarn audit` to try and fix any package dependency vunerabilities

```
yarn run fix:audit
```

---

### **Build commands**

commands for building final outputs

**build production output**

run the `build:docs` and `build:dist` commands and then minify the files in `dist` folders

```
yarn run build
```

**build `dist` folder only**

remove the `dist` folder before building the new one and then runs `tsc` to build the output as per configuration in `tsconfig.json` file

```
yarn run build:dist
```

**build `docs` folder only**

remove the `docs` folder before building the new one and then runs `jsdoc` to build the output as per configuration in `jsdoc.json` file

```
yarn run build:docs
```

**minify `dist` folder**

run `minify-all-js` for the `dist` folder

```
yarn run build:minify
```

---

### **Check commands**

commands for verifying and checking if the code is in acceptable range

**check formatting**

check with `prettier` if the code is in the format mentioned in the `.prettierrc`

```
yarn run check:format
```

**check lint**

check with `eslint` if the code is in the acceptable quality as mentioned in the `.esintrc`

```
yarn run check:quality
```

**check tests**

run `jest` to check if all tests mentioned in `jest.config.js` are passing

```
yarn run check:test
```

**check coverage**

run `jest` to check if all tests are passing and have coverage more than that configured in `jest.confic.js`

_also builds the `coverage` folder_

```
yarn run check:coverage
```

**check vunerability**

run `snyk` to check for vunerabilities in code

```
yarn run check:vunerability
```

**check license**

run `snyk` to check for license issues

```
yarn run check:license
```

**check dependency vunerability**

run `yarn audit` on the dependencies to check for dependecy vunerabilities

_also run `snyk monitor` in postscript to report to snyk_

```
yarn run check:audit
```

**check everything**

an easy way to run all the checks mentioned above

```
yarn run check:all
```

---

### **Other commands**

these are commands that run in the background(mostly) and do not require your intervention

**create conventional commit**

**!!! IMPORTANT !!!**

**to be used instead of `git commit` as it gives you an easier way to create conventional commits**

```
yarn run commit
```

**run lint on staged**

run `lint-staged` on the staged files as per `.lintstagedrc` file

_used in husky/precommit_

```
yarn run lint-staged
```

**run release**

run `semantic-release` as per `.releaserc` file
_needs a CI env to run properly, even though you can try a dry run from local_

```
yarn run release
```

**setup github labels**

run `github-label-sync` to setup github labels as per the `.github/labels.yml` file

```
yarn run setup:label
```

---

## Tools

this section explains the various files, tools and folders in the template.

### typescript

[`documentation`](https://www.typescriptlang.org/docs/)

used for developing consistent JS code with typescript types and rules, configured with `tsconfig.json` that generate the output in `./dist` folder and then minified using `minify-all-js` module.

### nodemon

[`documentation`](https://github.com/remy/nodemon#nodemon)

used to watch js/ts files and run the given command for ease of development, configured in `nodemon.json`.

### prettier

[`documentation`](https://prettier.io/docs/en/configuration.html)

used for code formatting to maintain consistency across commits, configured with `.prettierrc` and uses the `.prettierignore` to ignore formatting files and folders.

### eslint

[`documentation`](https://eslint.org/docs/latest/use/configure/)

used for maintaining code quality, configured with `.eslintrc` and uses the `.eslintignore` to ignore files and folders.

### jest

[`documentation`](https://jestjs.io/docs/configuration)

used for code coverage and testing that is configured with `./jest.config.js` the coverage data is generated into `./coverage` folder.

### jsdoc + betterdocs

[`jsdoc documentation`](https://jsdoc.app/about-getting-started.html)
[`betterdocs documentation`](https://www.npmjs.com/package/better-docs?activeTab=readme)

used to generate documentation that is already written in the code using the jsdoc module cofigured with `jsdoc.json` the output is generated in `./docs` folder.

### snyk

[`documentation`](https://www.npmjs.com/package/snyk)

used to check vunerabilities in package dependencies and code configured in `.snyk`

### Others

#### http-server

[`documentation`](https://www.npmjs.com/package/http-server)

used to serve the static html files in `documentation`, `coverage`,`QA`, etc

#### lint-staged

[`documentation`](https://www.npmjs.com/package/lint-staged)

used to format and check code quality of the staged files, configured in `.lintstagedrc`

#### commitizen

[`documentation`](https://www.npmjs.com/package/commitizen)

helps create conventional commits, configured in `.czrc`

#### commitlint

[`documentation`](https://www.npmjs.com/package/commitlint)

used to lint the created commit, configured with `.commitlintrc`

#### husky

[`documentation`](https://www.npmjs.com/package/husky)

used to add git hooks to let the dev check commit validity before pushing

#### semantic-release

[`documentation`](https://www.npmjs.com/package/semantic-release)

used to create releases with the help of conventional commits

#### github-label-sync

[`documentation`](https://www.npmjs.com/package/github-label-sync)

used to create better integrated labels in the github repository, configured in `.github/labels.json`
