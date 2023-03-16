const { sign } = require('jsonwebtoken');
const ms = require('ms');
const { secret_key } = require('../config/env');

const tokenGenerator = (id) => {
	const token = sign({ id }, secret_key, {
		expiresIn: ms('1y'),
	});
	return token;
};

module.exports = {
	tokenGenerator,
};
