const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createPermis = async (data, callback) => {
	try {
		const permis = await prisma.permisDeConduire.create({
			data: data,
		});
		callback(null, permis);
	} catch (err) {
		callback(err, null);
	}
};

const readPermis = async (callback) => {
	try {
		const permiss = await prisma.permisDeConduire.findMany();
		callback(null, permiss);
	} catch (err) {
		callback(err, null);
	}
};

const readPermisById = async (id, callback) => {
	try {
		const permis = await prisma.permisDeConduire.findUnique({ where: { id } });
		callback(null, permis);
	} catch (err) {
		callback(err, null);
	}
};

const updatePermis = async (data, callback) => {
	try {
		const permis = await prisma.permisDeConduire.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, permis);
	} catch (err) {
		callback(err, null);
	}
};

const deletePermis = async (id, callback) => {
	try {
		const permis = await prisma.permisDeConduire.delete({
			where: { id },
		});
		callback(null, permis);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createPermis,
	readPermis,
	readPermisById,
	updatePermis,
	deletePermis,
};