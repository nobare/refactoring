import Ride from '../../src/version_2/Ride';

test('Corrida durante a semana de dia', () => {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-01T10:00:00'));
    const fare = ride.calculateFare();
    expect(fare).toBe(21);
});

test('Corrida durante a semana de noite', () => {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-01T23:00:00'));
    const fare = ride.calculateFare();
    expect(fare).toBe(39);
});

test('Corrida durante o domingo de dia', () => {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-07T10:00:00'));
    const fare = ride.calculateFare();
    expect(fare).toBe(29);
});

test('Corrida durante o domingo a noite', () => {
    const ride = new Ride();
    ride.addSegment(10, new Date('2021-03-07T23:00:00'));
    const fare = ride.calculateFare();
    expect(fare).toBe(50);
});

test('Deve retornar erro se a data for invalida', () => {
    const ride = new Ride();
    expect(() => ride.addSegment(10, new Date(''))).toThrow(new Error('Invalid date'));
});

test('Deve retornar erro se a distancia for invalida', () => {
    const ride = new Ride();
    expect(() => ride.addSegment(-10, new Date('2021-03-07T23:00:00'))).toThrow(new Error('Invalid distance'));

});