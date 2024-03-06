const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class TechService {
    static findMany = async (params, next) => {
        try {
            const teches = await prisma.tech.findMany();
            return teches;
        } catch (err) {
            next(err);
        }
    };

    static findUnique = async (params, next) => {
        try {
            const { id } = params;
            const teches = await prisma.tech.findUnique(id, next);
            return teches;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const { tech_name, tech_image, tech_level } = params;

            const tech = await prisma.tech.create({
                data: {
                    tech_name: tech_name,
                    tech_image: tech_image,
                    tech_level: tech_level,
                },
            });
            return tech;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, params) => {
        try {
            const { tech_name, tech_image, tech_level } = params;

            const updatedTech = await prisma.tech.update({
                where: { id: +id },
                data: {
                    tech_name: tech_name,
                    tech_image: tech_image,
                    tech_level: tech_level,
                },
            });

            if (!updatedTech) {
                return null;
            }

            return updatedTech;
        } catch (err) {
            console.log("Error updating award:", err);
        }
    };

    static delete = async (id, next) => {
        try {
            const result = await prisma.tech.delete({
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

module.exports = TechService;
