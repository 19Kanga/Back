const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createDocumentation = async (data, callback) => {
	try {
		const Documentation = await prisma.documentation.create({
			data: data,
		});
		callback(null, Documentation);
	} catch (err) {
		callback(err, null);
	}
};

const readDocumentation = async (callback) => {
	try {
		const Documentations = await prisma.documentation.findMany();
		callback(null, Documentations);
	} catch (err) {
		callback(err, null);
	}
};

const readDocumentationById = async (id, callback) => {
	try {
		const Documentation = await prisma.documentation.findUnique({ where: { id } });
		callback(null, Documentation);
	} catch (err) {
		callback(err, null);
	}
};

const updateDocumentation = async (data, callback) => {
	try {
		const Documentation = await prisma.documentation.update({
			data: data,
			where: { id: data.id },
		});
		callback(null, Documentation);
	} catch (err) {
		callback(err, null);
	}
};

const deleteDocumentation = async (id, callback) => {
	try {
		const Documentation = await prisma.documentation.delete({
			where: { id },
		});
		callback(null, Documentation);
	} catch (err) {
		callback(err, null);
	}
};

module.exports = {
	createDocumentation,
	readDocumentation,
	readDocumentationById,
	updateDocumentation,
	deleteDocumentation,
};