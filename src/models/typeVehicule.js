const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTypeV = async (data, callback) => {
	try {
		const TypeV = await prisma.typeVehicule.create({
			data: data,
		});
		callback(null, TypeV);
	} catch (err) {
		callback(err, null);
	}
};

const readTypeV = async (callback) => {
	try {
		const TypeVs = await prisma.typeVehicule.findMany();
		callback(null, TypeVs);
	} catch (err) {
		callback(err, null);
	}
};

const readTypeVById = async (id, callback) => {
	try {
		const TypeV = await prisma.typeVehicule.findUnique({ where: { id } });
		callback(null, TypeV);
	} catch (err) {
		callback(err, null);
	}
};

const updateTypeV = async (data, callback) => {
	try {
		const TypeV = await prisma.typeVehicule.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, TypeV);
	} catch (err) {
		callback(err, null);
	}
};

const deleteTypeV = async (id, callback) => {
	try {
		const TypeV = await prisma.typeVehicule.delete({
			where: { id },
		});
		callback(null, TypeV);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createTypeV,
	readTypeV,
	readTypeVById,
	updateTypeV,
	deleteTypeV,
};