const Engineer = require("../lib/Engineer");

test('Can set GitHUb account via constructor argument', () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("Panda", 123, "kungfu@panda.com", testValue);
  expect(engineer.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const engineer = new Engineer("Panda", 123, "kungfu@panda.com", "GitHubUser");
  expect(engineer.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("Panda", 123, "kungfu@panda.com", testValue);
  expect(engineer.getGithub()).toBe(testValue);
});
