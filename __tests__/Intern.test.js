const Intern = require("../lib/Intern");

test('Can set school via constructor argument', () => {
  const testValue = "Stanford";
  const intern = new Intern("Panda", 123, "kungfu@panda.com", testValue);
  expect(intern.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const intern = new Intern("Panda", 123, "kungfu@panda.com", "Stanford");
  expect(intern.getRole()).toBe(testValue);
});

test('Can get school via getSchool()', () => {
  const testValue = "UCLA";
  const intern = new Intern("Panda", 123, "kungfu@panda.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});
