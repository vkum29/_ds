const plusOne = require('./plusOne');
let swap = 0;

const increment = (method, isDualOperative) => {
	return (...args) => {
		swap = plusOne(swap);
		const result = method.apply(null, args);
		swap = isDualOperative ? plusOne(swap) : swap;
		return result;
	}
};

const get = () => swap;

module.exports = { increment, get };
