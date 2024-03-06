const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class PortofolioService {
    static findMany = async (params, next) => {
        try {
            const portofolios = await prisma.portofolio.findMany();
            return portofolios;
        } catch (err) {
            next(err);
        }
    };

    static findUnique = async (params, next) => {
        try {
            const { id } = params;
            const portofolios = await prisma.portofolio.findUnique(id, next);
            return portofolios;
        } catch (err) {
            next(err);
        }
    };
    static create = async (params) => {
        try {
            const {
                portofolio_name,
                portofolio_image,
                tech_stack1,
                tech_stack2,
                tech_stack3,
                description,
                link_github,
                link_demo,
            } = params;

            const portofolio = await prisma.portofolio.create({
                data: {
                    portofolio_name: portofolio_name,
                    portofolio_image: portofolio_image,
                    tech_stack1: tech_stack1,
                    tech_stack2: tech_stack2,
                    tech_stack3: tech_stack3,
                    description: description,
                    link_github: link_github,
                    link_demo: link_demo,
                },
            });
            return portofolio;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, params) => {
        try {
            const {
                portofolio_name,
                portofolio_image,
                tech_stack1,
                tech_stack2,
                tech_stack3,
                description,
                link_github,
                link_demo,
            } = params;

            const updatedPortofolio = await prisma.portofolio.update({
                where: { id: +id },
                data: {
                    portofolio_name: portofolio_name,
                    portofolio_image: portofolio_image,
                    tech_stack1: tech_stack1,
                    tech_stack2: tech_stack2,
                    tech_stack3: tech_stack3,
                    description: description,
                    link_github: link_github,
                    link_demo: link_demo,
                },
            });

            if (!updatedPortofolio) {
                return null;
            }

            return updatedPortofolio;
        } catch (err) {
            console.log("Error updating award:", err);
        }
    };

    static delete = async (id, next) => {
        try {
            const result = await prisma.portofolio.delete({
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

module.exports = PortofolioService;
