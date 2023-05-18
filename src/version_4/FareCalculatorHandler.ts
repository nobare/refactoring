import Segment from "../version_4/Segment";

export default abstract class FareCalculatorHandler {
	abstract calculate (segment: Segment): number;
	abstract getFare (): number;

	constructor (readonly next?: FareCalculatorHandler) {
	}

	calculateFare (segment: Segment) {
		return segment.distance * this.getFare();
	}
}