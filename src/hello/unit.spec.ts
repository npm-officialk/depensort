import sayHello from "./index"

describe("This it the component", () => {
    describe("a scenario for the components use", () => {
        it("should work with these inputs", () => {
            expect(true).toBeTruthy()
        })
        it("should fail with these inputs", () => {
            expect(false).toBeFalsy()
        })
    })
    describe("The sayHello function should work properly", () => {
        it("should return string as per name input", () => {
            expect(sayHello("npm-officialk")).toBe(
                "Hello npm-officialk! Welcome to the npm template\n go to the README.md to learn more about setting up."
            )
        })
    })
})
