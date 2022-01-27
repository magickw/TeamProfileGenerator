const Employee = require('../lib/Employee');

test('Can create Employee object', () => {
	const employee = new Employee();
	expect(typeof employee).toBe('object');
});

test('Can set name via constructor argument', () => {
	const name = 'Panda';
	const employee = new Employee(name);
	expect(employee.name).toBe(name);
});

test('Can set ID via constructor argument', () => {
	const testValue = 123;
	const employee = new Employee('Panda', testValue);
	expect(employee.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
	const testValue = 'kungfu@panda.com';
	const employee = new Employee('Panda', 123, testValue);
	expect(employee.email).toBe(testValue);
});

test('Can get name via getName()', () => {
	const testValue = 'Panda';
	const employee = new Employee(testValue);
	expect(employee.getName()).toBe(testValue);
});

test('Can get ID via getId()', () => {
	const testValue = 123;
	const employee = new Employee('Panda', testValue);
	expect(employee.getId()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
	const testValue = 'kungfu@panda.com';
	const employee = new Employee('Panda', 123, testValue);
	expect(employee.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
	const testValue = 'Employee';
	const employee = new Employee('Panda', 123, 'kungfu@panda.com');
	expect(employee.getRole()).toBe(testValue);
});
