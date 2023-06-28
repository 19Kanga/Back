const { compare } = require('bcryptjs');

const isHash = async (password, hash) => {
	return await compare(password, hash);
};

module.exports = {
	isHash,
};
