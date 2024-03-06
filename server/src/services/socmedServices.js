const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class SocmedService {
    static findMany = async (params, next) => {
        try {
            const socmeds = await prisma.socmed.findMany();
            return socmeds;
        } catch (err) {
            next(err);
        }
    };

    static findUnique = async (params, next) => {
        try {
            const { id } = params;
            const socmeds = await prisma.socmed.findUnique(id, next);
            return socmeds;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const { socmed_image, socmed_link } = params;

            const socmed = await prisma.socmed.create({
                data: {
                    socmed_image: socmed_image,
                    socmed_link: socmed_link,
                },
            });
            return socmed;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, params) => {
        try {
            const { socmed_image, socmed_link } = params;

            const updatedSocmed = await prisma.socmed.update({
                where: { id: +id },
                data: {
                    socmed_image: socmed_image,
                    socmed_link: socmed_link,
                },
            });

            if (!updatedSocmed) {
                return null;
            }

            return updatedSocmed;
        } catch (err) {
            console.log("Error updating award:", err);
        }
    };

    static delete = async (id, next) => {
        try {
            const result = await prisma.socmed.delete({
                where: { id: +id },
            });

            if (result === null) {
                return null;
            }

            return true;
        } catch (err) {
            next(err);
        }
    };
}

module.exports = SocmedService;
