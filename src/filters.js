// Load modules and constants
const { combinationOfTraitsAlreadyExists } = require('./filters/combination_traits');
const { incompatibleTraitsUsed, traitHasDefinedIncompatibilities } = require('./filters/incompatible_traits');
const { dependentTraitsUsed } = require('./filters/dependent_traits');

// Checks the different filtrations and return true if any of them are true
const needsFiltration = (selectedTraitsList, newTraits, maxRepeatedTraits, incompatibleTraits, layerItemsMaxRepeatedTraits, dependentTraits) => {

  const willFilter = combinationOfTraitsAlreadyExists(selectedTraitsList, newTraits, maxRepeatedTraits, layerItemsMaxRepeatedTraits)
      || incompatibleTraitsUsed(newTraits, incompatibleTraits)
      || dependentTraitsUsed(newTraits, dependentTraits)

  console.log({willFilter})
  return willFilter
};

module.exports = {
  needsFiltration,
  traitHasDefinedIncompatibilities
};
