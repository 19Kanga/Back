const { generateFromEmail } = require('unique-username-generator');

const username = (email) => {
	return generateFromEmail(email, 3);
};

module.exports = {
	generateUserName: username,
};
