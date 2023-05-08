import { calculateRide } from '../../src/version_1/main'

test('Deve calcular uma corrida durante a semana de dia', () => {
    const run = [
        {
            distance: 10,
            date: new Date('2021-03-01T10:00:00')
        }
    ]
    const fare = calculateRide(run);
    expect(fare).toBe(21);
});

test('Deve calcular uma corrida de noite', () => {
    const run = [
        {
            distance: 10,
            date: new Date('2021-03-01T23:00:00')
        }
    ]
    const fare = calculateRide(run);
    expect(fare).toBe(39);
});

test('Deve calcular uma corrida em um domingo de dia', () => {
    const run = [
        {
            distance: 10,
            date: new Date('2021-03-07T10:00:00')
        }
    ]
    const fare = calculateRide(run);
    expect(fare).toBe(29);
});

test('Deve calcular uma corrida em um domingo a noite', () => {
    const run = [
        {
            distance: 10,
            date: new Date('2021-03-07T23:00:00')
        }
    ]
    const fare = calculateRide(run);
    expect(fare).toBe(50);
});

test('Deve retornar -1 se a distância for inválida', () => {
    const run = [
        {
            distance: -10,
            date: new Date('2021-03-07T23:00:00')
        }
    ]
    const fare = calculateRide(run);
    expect(fare).toBe(-1);
});

test('Deve retornar -2 se a data for inválida', () => {
    const run = [
        {
            distance: 10,
            date: new Date('abc')
        }
    ]
    const fare = calculateRide(run);
    expect(fare).toBe(-2);
});

test('Deve calcular a tarifa mínima de uma corrida', () => {
    const run = [
        {
            distance: 2,
            date: new Date('2021-03-01T10:00:00')
        }
    ]
    const fare = calculateRide(run);
    expect(fare).toBe(10);
});