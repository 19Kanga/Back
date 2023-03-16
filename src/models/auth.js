const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashGenerator } = require('../utils/hashGenerator');
const { generateUserName } = require('../utils/username');

const createUser = async (data, callback) => {
	const username = generateUserName(data.email);
	const hash = await hashGenerator(data.hash);
	const newData = { ...data, hash, username };
	try {
		const user = await prisma.user.create({
			data: newData,
		});
		callback(null, user);
	} catch (err) {
		callback(err, null);
	}
};

const readUserByEmail = async (data, callback) => {
	try {
		const user = await prisma.user.findUnique({ where: { email: data.email } });
		callback(null, user);
	} catch (err) {
		callback(err, null);
	}
};
module.exports = {
	createUser,
	readUserByEmail,
};