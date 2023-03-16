const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createEvenement = async (data, callback) => {
	try {
		const Evenement = await prisma.evenement.create({
			data: data,
		});
		callback(null, Evenement);
	} catch (err) {
		callback(err, null);
	}
};

const readEvenement = async (callback) => {
	try {
		const Evenements = await prisma.evenement.findMany();
		callback(null, Evenements);
	} catch (err) {
		callback(err, null);
	}
};

const readEvenementById = async (id, callback) => {
	try {
		const Evenement = await prisma.evenement.findUnique({ where: { id } });
		callback(null, Evenement);
	} catch (err) {
		callback(err, null);
	}
};

const updateEvenement = async (data, callback) => {
	try {
		const Evenement = await prisma.evenement.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, Evenement);
	} catch (err) {
		callback(err, null);
	}
};

const deleteEvenement = async (id, callback) => {
	try {
		const Evenement = await prisma.evenement.delete({
			where: { id },
		});
		callback(null, Evenement);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createEvenement,
	readEvenement,
	readEvenementById,
	updateEvenement,
	deleteEvenement,
};