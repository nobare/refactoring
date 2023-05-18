import Segment from "./Segment";
import FareCalculator from "./FareCalculator";
import NormalFareCalculator from "./NormalFareCalculator";
import SundayFareCalculator from "./SundayFareCalculator";
import OvernightFareCalculator from "./OvernightFareCalculator";
import OvernightSundayFareCalculator from "./OvernightSundayFareCalculator";

export default class FareCalculatorFactory {

	static create (segment: Segment): FareCalculator {
		if (segment.isOvernight() && !segment.isSunday()) return new OvernightFareCalculator();
		if (segment.isOvernight() && segment.isSunday()) return new OvernightSundayFareCalculator();
		if (!segment.isOvernight() && segment.isSunday()) return new SundayFareCalculator();
		if (!segment.isOvernight() && !segment.isSunday()) return new NormalFareCalculator();
		throw new Error("Invalid segment");
	}
}
