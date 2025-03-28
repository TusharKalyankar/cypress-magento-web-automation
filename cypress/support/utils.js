//Random Email generator for dynamic emails each time we sign up

export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `testuser_${randomString}@mail.com`;
}
