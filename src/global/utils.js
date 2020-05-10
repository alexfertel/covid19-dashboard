const variants = {
  outlined: 'outlined',
  text: 'text',
  inverted: 'inverted',
  contained: 'contained',
};

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const createClasses = (id, classes) => ({ id, classes });

const getClasses = (id, classesArray, defaultClasses) => {
  const selectedItem = classesArray.find(c => c.id === id);
  return selectedItem ? selectedItem.classes : defaultClasses;
};

export { variants, sizes, createClasses, getClasses };
