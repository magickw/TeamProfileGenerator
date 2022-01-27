const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test('Can set office number via constructor argument', () => {
  const testValue = 100;
  const manager = new Manager("Panda", 123, "kungfu@panda.com", testValue);
  expect(manager.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const manager = new Manager("Panda", 123, "kungfu@panda.com", 100);
  expect(manager.getRole()).toBe(testValue);
});

test('Can get office number via getOffice()', () => {
  const testValue = 100;
  const manager = new Manager("Panda", 123, "kungfu@panda.com", testValue);
  expect(manager.getOfficeNumber()).toBe(testValue);
});
