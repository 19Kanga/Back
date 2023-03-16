const { PrismaClient } = require('@prisma/client');

class PrismaContext {
	async start() {
		try {
			const prisma = new PrismaClient();
			await prisma.$connect();
			console.log('db connected');
		} catch (err) {
			console.log('prisma ---> ', err);
		}
	}
}

module.exports = {
	PrismaContext,
};