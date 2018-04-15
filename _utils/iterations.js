const plusOne = require('./plusOne');
let iteration = 0;

const increment = (method) => {
	return (...args) => {
		iteration = plusOne(iteration);
		return method.apply(null, args);
	}
};

const get = () => iteration;

module.exports = { increment, get };
