const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createRole = async (data, callback) => {
	try {
		const role = await prisma.role.create({
			data: data,
		});
		callback(null, role);
	} catch (err) {
		callback(err, null);
	}
};

const readRole = async (callback) => {
	try {
		const roles = await prisma.role.findMany();
		callback(null, roles);
	} catch (err) {
		callback(err, null);
	}
};

const readRoleById = async (id, callback) => {
	try {
		const role = await prisma.role.findUnique({ where: { id } });
		callback(null, role);
	} catch (err) {
		callback(err, null);
	}
};

const updateRole = async (data, callback) => {
	try {
		const role = await prisma.role.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, role);
	} catch (err) {
		callback(err, null);
	}
};

const deleteRole = async (id, callback) => {
	try {
		const role = await prisma.role.delete({
			where: { id },
		});
		callback(null, role);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createRole,
	readRole,
	readRoleById,
	updateRole,
	deleteRole,
};