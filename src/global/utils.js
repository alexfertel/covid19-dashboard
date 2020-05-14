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

const createMatcher = (patterns, rules) =>
  cond(patterns.map((pattern, i) => ([equals(pattern), always(rules[i])])));

export { createMatcher };
