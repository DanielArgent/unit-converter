const langs = {
	ru: {
		_name: "Russian",

		langSwitcherAlt: "Сменить язык",
		categories: "Категории",
		invalidValue: "Ошибка: пожалйуйста, введите число!",

		categoryNames: {
			yield: "Урожайность",
			mass: "Масса",
			temperature: "Температура"
		},

		units: {
			mass: {
				mkg: "мкг",
				mg: "мг",
				g: "г",
				kg: "кг",
				quintal: "ц",
				pound: "фунт",
				t: "т",
				amu: "а. е. м.",
			},

			yield: {
				tonnesAtHectar: "т/га",
				quintalAtHectar: "ц/га",
				kilogrammAtHectar: "кг/га",
				kilogrammAtSquareMeters: "кг/м^2",
				tonnesAtAcre: "т/акр",
				quintalAtAcre: "ц/акр",
				kilogrammAtAcre: "кг/акр",
			},

			temperature: {
				celsius: "°C",
				kelvin: "K",
				farenheit: "°F",
				reomure: "°R", // градус Реомюра
				remer: "°Rø",  // градус Ремера
				rankin: "°Ra",
			}
		}
	},

	en: {
		_name: "English",

		langSwitcherAlt: "Change language",
		categories: "Categories",
		invalidValue: "Error: please enter a number!",

		categoryNames: {
			yield: "Yield",
			mass: "Mass",
			temperature: "Temperature"
		},

		units: {
			mass: {
				mkg: "µg",
				mg: "mg",
				g: "g",
				kg: "kg",
				quintal: "quintal",
				pound: "lb",
				t: "t",
				amu: "u"
			},

			yield: {
				tonnesAtHectar: "t/ha",
				quintalAtHectar: "quintal/ha",
				kilogrammAtHectar: "kg/ha",
				kilogrammAtSquareMeters: "kg/m^2",
				tonnesAtAcre: "t/ac",
				quintalAtAcre: "quintal/ac",
				kilogrammAtAcre: "kg/ac",
			},

			temperature: {
				celsius: "°C",
				kelvin: "K",
				farenheit: "°F",
				reomure: "°R",
				remer: "°Rø",
				rankin: "°Ra",
			}
		}
	}
};

export default langs;