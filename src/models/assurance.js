const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createAssurance = async (data, callback) => {
	try {
		const Assurance = await prisma.assurance.create({
			data: data,
		});
		callback(null, Assurance);
	} catch (err) {
		callback(err, null);
	}
};

const readAssurance = async (callback) => {
	try {
		const Assurances = await prisma.assurance.findMany();
		callback(null, Assurances);
	} catch (err) {
		callback(err, null);
	}
};

const readAssuranceById = async (id, callback) => {
	try {
		const Assurance = await prisma.assurance.findUnique({ where: { id } });
		callback(null, Assurance);
	} catch (err) {
		callback(err, null);
	}
};

const updateAssurance = async (data, callback) => {
	try {
		const Assurance = await prisma.assurance.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, Assurance);
	} catch (err) {
		callback(err, null);
	}
};

const deleteAssurance = async (id, callback) => {
	try {
		const Assurance = await prisma.assurance.delete({
			where: { id },
		});
		callback(null, Assurance);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createAssurance,
	readAssurance,
	readAssuranceById,
	updateAssurance,
	deleteAssurance,
};