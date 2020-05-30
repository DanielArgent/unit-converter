import React from "react";
import CategoryConverter from "./CategoryConverter.js";

const cache = {};

/// This function creates category provider for given language
export default function getCategoryProviderForLanguage(lang) {
  if (cache[lang._name] !== undefined) {
    return cache[lang._name];
  }

  const massUnits = [
    {
      id: 0,
      name: lang.units.mass.mkg,
      toBase: (value) => value / 10 ** 9,
      fromBase: (value) => value * 10 ** 9,
    },
    {
      id: 1,
      name: lang.units.mass.mg,
      toBase: (value) => value / 10 ** 6,
      fromBase: (value) => value * 10 ** 6,
    },
    {
      id: 2,
      name: lang.units.mass.g,
      toBase: (value) => value / 10 ** 3,
      fromBase: (value) => value * 10 ** 3,
    },
    {
      id: 3,
      name: lang.units.mass.kg,
      toBase: (value) => value,
      fromBase: (value) => value,
    },
    {
      id: 4,
      name: lang.units.mass.quintal,
      toBase: (value) => value * 10 ** 2,
      fromBase: (value) => value / 10 ** 2,
    },
    {
      id: 5,
      name: lang.units.mass.t,
      toBase: (value) => value * 10 ** 3,
      fromBase: (value) => value / 10 ** 3,
    },
    {
      id: 6,
      name: lang.units.mass.pound,
      toBase: (value) => value * 0.45359237,
      fromBase: (value) => value / 0.45359237,
    },
    {
      id: 7,
      name: lang.units.mass.amu,
      toBase: (value) => value * 1.6605390666 * 10 ** -27,
      fromBase: (value) => value / (1.6605390666 * 10 ** -27),
    },
  ];

  const yieldUnits = [
    {
      id: 0,
      name: lang.units.yield.tonnesAtHectar,
      toBase: (value) => value,
      fromBase: (value) => value,
    },
    {
      id: 1,
      name: lang.units.yield.quintalAtHectar,
      toBase: (value) => value / 10,
      fromBase: (value) => value * 10,
    },
    {
      id: 2,
      name: lang.units.yield.kilogrammAtHectar,
      toBase: (value) => value * 1000,
      fromBase: (value) => value / 1000,
    },
    {
      id: 3,
      name: lang.units.yield.kilogrammAtSquareMeters,
      toBase: (value) => value * 10000,
      fromBase: (value) => value / 10000,
    },
    {
      id: 4,
      name: lang.units.yield.tonnesAtAcre,
      toBase: (value) => value / 0.405,
      fromBase: (value) => value * 0.405,
    },
    {
      id: 5,
      name: lang.units.yield.quintalAtAcre,
      toBase: (value) => value / 0.405 / 10, // ??
      fromBase: (value) => value * 0.405 * 10,
    },
    {
      id: 6,
      name: lang.units.yield.kilogrammAtAcre,
      toBase: (value) => value / 0.405 / 1000,
      fromBase: (value) => value * 0.405 * 1000,
    },
  ];

  const temperatureUnits = [
    {
      id: 0,
      name: lang.units.temperature.celsius,
      toBase: (value) => value,
      fromBase: (value) => value,
    },
    {
      id: 1,
      name: lang.units.temperature.kelvin,
      toBase: (value) => value - 273.15,
      fromBase: (value) => value + 273.15,
    },
    {
      id: 2,
      name: lang.units.temperature.farenheit,
      toBase: (value) => (5 / 9) * (value - 32),
      fromBase: (value) => (9 / 5) * value + 32,
    },
    {
      id: 3,
      name: lang.units.temperature.reomure,
      toBase: (value) => 1.25 * value,
      fromBase: (value) => value * 0.8,
    },
    {
      id: 4,
      name: lang.units.temperature.remer,
      toBase: (value) => (40 / 21) * (value - 7.5),
      fromBase: (value) => (21 / 40) * value + 7.5,
    },
    {
      id: 5,
      name: lang.units.temperature.rankin,
      toBase: (value) => value / 1.8 - 273.15,
      fromBase: (value) => (value + 273.15) * 1.8,
    },
  ];

  const availableCategories = [
    <CategoryConverter
      id="cat0"
      name={lang.categoryNames.yield}
			units={yieldUnits}
			lang={lang}
    />,
    <CategoryConverter
      id="cat1"
      name={lang.categoryNames.mass}
			units={massUnits}
			lang={lang}
    />,
    <CategoryConverter
      id="cat2"
      name={lang.categoryNames.temperature}
			units={temperatureUnits}
			lang={lang}
    />,
  ];

  function getCategoryById(requiredCategoryId) {
    for (const category of availableCategories) {
      if (category.props.id === requiredCategoryId) {
        return category;
      }
    }
  }

  const categories = [
    { id: "cat0", name: lang.categoryNames.yield, isActive: true },
    { id: "cat1", name: lang.categoryNames.mass, isActive: false },
    { id: "cat2", name: lang.categoryNames.temperature, isActive: false },
  ];

  return (cache[lang._name] = { categories, getCategoryById });
}
