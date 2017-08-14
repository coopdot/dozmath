// Import dozmath.js first.

var version = 0.0004;
	// Version 0.0.1 == 0.0001, 0.1.2 == 0.0102
var results = [], run_tests = 0, passing = 0, failing = "";

if (version >= 0.0001) {
	var pass_0_to_9 = new dozmath("48");
	results["pass_0_to_9"] = (pass_0_to_9.raw === "48");

	var pass_a_as_dec = new dozmath("a");
	results["pass_b_as_dec"] = (pass_a_as_dec.raw === "a");

	var pass_b_as_el = new dozmath("b");
	results["pass_b_as_el"] = (pass_b_as_el.raw === "b");

	var fail_int_as_input = new dozmath(48);
	results["fail_int_as_input"] = (fail_int_as_input.raw === null);

	var fail_bool_as_input = new dozmath(false);
	results["fail_bool_as_input"] = (fail_bool_as_input.raw === null);

	var fail_random_string = new dozmath("random string");
	results["fail_random_string"] = (fail_random_string.raw === null);
}
if (version >= 0.0002) {
	var pass_negative_numbers = new dozmath("-123");
	results["pass_negative_numbers"] = (pass_negative_numbers.raw === "-123");

	var fail_hyphened_numbers = new dozmath("12-3");
	results["fail_hyphened_numbers"] = (fail_hyphened_numbers.raw === null);

	var fail_extended_minus = new dozmath("--123");
	results["fail_extended_minus"] = (fail_extended_minus.raw === null);
}
if (version >= 0.0003) {
	var pass_output_decimal = new dozmath("40");
	results["pass_output_decimal"] = (pass_output_decimal.decimal === 48);
}
if (version >= 0.0004) {
	var pass_t_as_dec = new dozmath("T");
	results["pass_t_as_dec"] = (pass_t_as_dec.raw === "a");

	var pass_x_as_dec = new dozmath("X");
	results["pass_x_as_dec"] = (pass_x_as_dec.raw === "a");

	var pass_z_as_dec = new dozmath("Z");
	results["pass_z_as_dec"] = (pass_z_as_dec.raw === "a");

	var pass_e_as_el = new dozmath("E");
	results["pass_e_as_el"] = (pass_e_as_el.raw === "b");
	// Not testing different cases for digits.
}
if (version >= 0.0005) {
	;
	// Up minor version?
}
if (version >= 0.01) { // ...or earlier.
	// Reject mixed digits. ("Tax" == error.)
	// Floating point (string) support:
	var pass_floating_point = new dozmath("1.23");
	results["pass_floating_point"] = (pass_floating_point.raw === "1.23");

	var fail_ending_period = new dozmath("123.");
	results["fail_ending_period"] = (fail_ending_period.raw === null);

	var fail_starting_period = new dozmath(".123");
	results["fail_starting_period"] = (fail_starting_period.raw === null);

	var fail_extended_period = new dozmath("1..23");
	results["fail_extended_period"] = (fail_extended_period.raw === null);
}
if (version >= 0.02) { // ...or earlier.
	;
	// Can output as (string) fraction.
	// Can add and subtract.
}
if (version >= 0.03) { // ...or earlier.
	;
	// Unicode support.
	// HTML support.
}

for (result in results) {
	run_tests++;
	if (results[result] === true) passing++;
	else failing += " " + result;
}
console.log("Tests passing: " + passing + " of " + run_tests + ".");
if (failing !== "") console.log("Tests failing:" + failing);
