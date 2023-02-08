/**
 * @function sayHello
 * @param {String} name : the name of the person who we want to say hello to
 * @return {string} returns a generated string
 * @example
 * console.log(sayHello('officialk'));
 * >> Hello officialk! Welcome to the npm template
 * >> go to the README.md to learn more about setting up.
 */
const sayHello = (name: string) => `Hello ${name}! Welcome to the npm template\n go to the README.md to learn more about setting up.`

export default sayHello
