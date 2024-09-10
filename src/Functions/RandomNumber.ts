const RandomNumber = (prop?: { min?: number; max?: number }) => {
  let minNumber = prop?.min || 1;
  let maxNumber = prop?.max || 100000;
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export default RandomNumber;
