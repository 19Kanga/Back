
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userByRole = async (id,callback) => {
	try {
        const role = await prisma.user.findUnique( { where: { id }});
		callback(null, role)
	} catch (err) {
		callback(err, null)
	}
};

module.exports={
    userByRole,
}