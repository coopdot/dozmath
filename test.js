// Import dozmath.js first.

var version = 0.0001;
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

for (result in results) {
	run_tests++;
	if (results[result] === true) passing++;
	else failing += " " + result;
}
console.log("Tests passing: " + passing + " of " + run_tests + ".");
if (failing !== "") console.log("Tests failing:" + failing);
