const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCarteG = async (data, callback) => {
	try {
		const carteG = await prisma.carteGrise.create({
			data: data,
		});
		callback(null, carteG);
	} catch (err) {
		callback(err, null);
	}
};

const readCarteG = async (callback) => {
	try {
		const CarteGs = await prisma.carteGrise.findMany();
		callback(null, CarteGs);
	} catch (err) {
		callback(err, null);
	}
};

const readCarteGById = async (id, callback) => {
	try {
		const CarteG = await prisma.carteGrise.findUnique({ where: { id } });
		callback(null, CarteG);
	} catch (err) {
		callback(err, null);
	}
};

const updateCarteG = async (data, callback) => {
	try {
		const CarteG = await prisma.carteGrise.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, CarteG);
	} catch (err) {
		callback(err, null);
	}
};

const deleteCarteG = async (id, callback) => {
	try {
		const CarteG = await prisma.carteGrise.delete({
			where: { id },
		});
		callback(null, CarteG);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createCarteG,
	readCarteG,
	readCarteGById,
	updateCarteG,
	deleteCarteG,
};