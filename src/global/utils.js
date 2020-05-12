export const createClasses = (id, classes) => ({ id, classes });

export const getClasses = (id, classesArray, defaultClasses) => {
  const selectedItem = classesArray.find(c => c.id === id);
  return selectedItem ? selectedItem.classes : defaultClasses;
};

