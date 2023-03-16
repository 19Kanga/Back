const { hash } = require('bcryptjs');

const hashGenerator = async (password) => {
	const hashData = hash(password, 10);
	return hashData;
};

module.exports = {
	hashGenerator,
};
