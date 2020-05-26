import always from 'ramda/src/always';
import cond from 'ramda/src/cond';
import equals from 'ramda/src/equals';

// This function takes a list of patterns and a list of rules of the same length
// and returns a function that pattern matches the given pattern. Basically if-else logic.
// You can find examples amongst the global components, but they translate to the following
// example:
//
// const patterns = [1, 2, 3];
// const rules = ['Number 1', 'Number 2', 'Number 3'];
// const matcher = createMatcher(patterns, rules);
//
// matcher(1)  // Number 1
// matcher(2)  // Number 2
// matcher(3)  // Number 3
// matcher(4)  // undefined

const createMatcher = (patterns, rules) => cond(patterns.map((pattern, i) => [equals(pattern), always(rules[i])]));

//* Map functions
const CreateRanges = (min, max, numberOfRanges) => {
  const result = [];
  const step = Math.floor(max / numberOfRanges);
  let currentMin = min;

  for (let index = 0; index < numberOfRanges; index++) {
    if (currentMin > max) {
      break;
    }
    result.push({ min: currentMin, max: currentMin + step > max ? max : currentMin + step });
    currentMin += step + 1;
  }
  return result;
};

const ConvertRangeToString = ({ min, max }) => `${min}-${max}`;

// ! Do it as binary Search!
const getIndexRangeFromNumber = (number, bucketRanges = []) =>
  bucketRanges.findIndex(range => number >= range.min && number <= range.max);

const getScaledColor = (current, range, treatZeroDifferent = true) => {
  const zeroColor = '#FFEDA0';
  const colorScale = ['#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];
  return treatZeroDifferent && current === 0 ? zeroColor : colorScale[getIndexRangeFromNumber(current, range)];
};

const fullColorScale = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];

// *Mock up functions
const percentRandom = () => Math.random().toFixed(2);
const randomInteger = factor => Math.floor(Math.random() * factor);

export {
  createMatcher,
  percentRandom,
  randomInteger,
  fullColorScale,
  getScaledColor,
  ConvertRangeToString,
  CreateRanges,
  getIndexRangeFromNumber,
};
