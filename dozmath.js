class dozmath {
	constructor(dozenal) {
		this.canonical = dozenal;

		// For lazy evaluation.
		this.is_parsed = false;
		this.is_valid = false;

		// Number parts.
		this.integer_part = "0";
			// The number 3/2 -> "1".
		this.floating_part = "0";
			// The number 3/2 -> "6" because 0.6 == 1/2.

		this.dec_digits = "TaAtXxZz";
		// parseInt() use "a" for dec (ten) and so will we for internal use.
		this.el_digits = "EbBe";
		// parseInt() use "b" for el (eleven) and so will we for internal use.
	}

	parse() {
		if (this.is_parsed !== true) {
			let dozenal = this.canonical;
			if (typeof dozenal === "string") {
				dozenal = dozenal.replace(new RegExp("[" + this.dec_digits + "]", "g"), "a");
				dozenal = dozenal.replace(new RegExp("[" + this.el_digits + "]", "g"), "b");
				let matched_dozenal = /^([-]?[0-9ab]+)(?:\.(?=[0-9ab]))?([0-9ab]*)$/.exec(dozenal);
				if (matched_dozenal !== null) {
					this.integer_part = matched_dozenal[1];
					if (matched_dozenal[2] !== "") {
						this.floating_part = matched_dozenal[2];
					} else {
						this.floating_part = "0";
					}
					this.canonical = dozenal;
					this.is_valid = true;
				}
			} 
			this.is_parsed = true;
		}
	}

	get decimal() {
		this.parse();
		if (this.is_valid === true) {
			if (this.floating_part !== "0") {
				return parseInt(this.integer_part, 12) + parseInt(this.floating_part, 12) / (12 ** this.floating_part.length);
			} else {
				return parseInt(this.integer_part, 12);
			}
		} else {
			return null;
		}
	}

	get raw() {
		this.parse();
		if (this.is_valid === true) {
			return this.canonical;
		} else {
			return null;
		}
	}
}
