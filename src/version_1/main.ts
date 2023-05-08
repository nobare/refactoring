const OVERNIGHT_FARE = 3.90
const OVERNIGHT_SUNDAY_FARE = 5;
const SUNDAY_FARE = 2.90;
const NORMAL_FARE = 2.10;
const MIN_FARE = 10;

const isOvernight = (date: Date) => {
	return date.getHours() >= 22 || date.getHours() <= 6;
}

const isSunday = (date: Date) => {
	return date.getDay() === 0;
}

const isValidDistance = (distance: number) => {
	return distance != null && distance != undefined && typeof distance === "number" && distance > 0
}

const isValidDate = (date: Date) => {
	return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date"
}

export function calculateRide (rides: {distance: number, date: Date}[]) {
	let fare = 0;
	for (const ride of rides) {
		if (!isValidDistance(ride.distance)) return -1;
		if (!isValidDate(ride.date)) return -2;
			if (isOvernight(ride.date) && isSunday(ride.date)) {
				fare += ride.distance * OVERNIGHT_SUNDAY_FARE;
			}
			if (isOvernight(ride.date) && !isSunday(ride.date)) {
				fare += ride.distance * OVERNIGHT_FARE;
			}
			if (!isOvernight(ride.date) && isSunday(ride.date)) {
				fare += ride.distance * SUNDAY_FARE;
			}
			if (!isOvernight(ride.date) && !isSunday(ride.date)) {
				fare += ride.distance * NORMAL_FARE;
			}
	}
	return (fare < MIN_FARE) ? MIN_FARE : fare;
}