class dozmath {
	constructor(dozenal) {
		this.canonical = dozenal;

		// For lazy evaluation.
		this.is_parsed = false;
		this.is_valid = false;

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
				if (/^[-]?[0-9ab]+$/.test(dozenal) === true) {
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
			return parseInt(this.canonical, 12);
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
