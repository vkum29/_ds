module.exports  = logger = method => {
	return (...list) => {
		console.log(' input for method ', ...list);
		const result = method.apply(null, list);
		console.log(' output for method ', JSON.stringify(result));
		return result;
	}
};
