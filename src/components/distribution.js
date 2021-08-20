const Distribution = ({ gameDataState }) => {
  const categoriesObj = {
    foodCreatures: gameDataState.data.creatures.food,
    nonFoodCreatures: gameDataState.data.creatures.non_food,
    equipment: gameDataState.data.equipment,
    materials: gameDataState.data.materials,
    monsters: gameDataState.data.monsters,
    treasure: gameDataState.data.treasure,
  };

  const itemsObj = categoriesObj.foodCreatures.concat(
    categoriesObj.nonFoodCreatures,
    categoriesObj.equipment,
    categoriesObj.materials,
    categoriesObj.monsters,
    categoriesObj.treasure,
  );

  return {
    gameCategories: () => categoriesObj,
    gameItems: () => itemsObj,
  };
};

export default Distribution;
