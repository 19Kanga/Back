const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (data, callback) => {
	try {
		const user = await prisma.user.create({
			data: data,
		});
		callback(null, user);
	} catch (err) {
		callback(err, null);
	}
};

const readUser = async (callback) => {
	try {
		const users = await prisma.user.findMany();
		callback(null, users);
	} catch (err) {
		callback(err, null);
	}
};

const readUserById = async (id, callback) => {
	try {
		const user = await prisma.user.findUnique({ where: { id } });
		callback(null, user);
	} catch (err) {
		callback(err, null);
	}
};

const updateUser = async (data, callback) => {
	try {
		const user = await prisma.user.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, user);
	} catch (err) {
		callback(err, null);
	}
};

const deleteUser = async (id, callback) => {
	try {
		const user = await prisma.user.delete({
			where: { id },
		});
		callback(null, user);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createUser,
	readUser,
	readUserById,
	updateUser,
	deleteUser,
};