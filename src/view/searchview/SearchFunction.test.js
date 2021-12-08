const search = require('./SearchFunction.js');

test('Testing an existing user', () => {
    
    localStorage.setItem("Elias", "He is online, and taking a walk!")
    const user = localStorage.getItem('Elias');
    expect(user).toBe("He is online, and taking a walk!");
});

test('Testing an existing user', () => {
    
    localStorage.setItem("Elias", "He is online, and taking a walk!")
    expect(search('Elias')).toBe("He is online, and taking a walk!");
});

test('Testing a non existant user', () => {
    expect(search('Johan')).toBe("User doesn't exist!");
});

