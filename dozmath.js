class dozmath {
	constructor(dozenal) {
		this.canonical = dozenal;

		// For lazy evaluation.
		this.is_parsed = false;
		this.is_valid = false;
	}

	get raw() {
		if (this.is_parsed !== true) {
			let dozenal = this.canonical;
			if (typeof dozenal === "string" &&
				/^[-]?[0-9ab]+$/.test(dozenal) === true) {
				this.is_valid = true;
			} 
			this.is_parsed = true;
		}
		if (this.is_valid === true) {
			return this.canonical;
		} else {
			return null;
		}
	}
}
