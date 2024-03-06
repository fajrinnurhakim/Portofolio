const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ExperienceService {
    static findMany = async (params, next) => {
        try {
            const experiences = await prisma.experience.findMany();
            return experiences;
        } catch (err) {
            next(err);
        }
    };

    static findUnique = async (params, next) => {
        try {
            const { id } = params;
            const experiences = await prisma.experience.findUnique(id, next);
            return experiences;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const {
                experience_name,
                experience_description,
                institution_name,
                tech_stack1,
                tech_stack2,
                tech_stack3,
                type,
                start_date,
                end_date,
            } = params;

            const experience = await prisma.experience.create({
                data: {
                    experience_name: experience_name,
                    experience_description: experience_description,
                    institution_name: institution_name,
                    tech_stack1: tech_stack1,
                    tech_stack2: tech_stack2,
                    tech_stack3: tech_stack3,
                    type: type,
                    start_date: start_date,
                    end_date: end_date,
                },
            });
            return experience;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, params) => {
        try {
            const {
                experience_name,
                experience_description,
                institution_name,
                tech_stack1,
                tech_stack2,
                tech_stack3,
                type,
                start_date,
                end_date,
            } = params;

            const updatedExperience = await prisma.experience.update({
                where: { id: +id },
                data: {
                    experience_name: experience_name,
                    experience_description: experience_description,
                    institution_name: institution_name,
                    tech_stack1: tech_stack1,
                    tech_stack2: tech_stack2,
                    tech_stack3: tech_stack3,
                    type: type,
                    start_date: start_date,
                    end_date: end_date,
                },
            });

            if (!updatedExperience) {
                return null;
            }

            return updatedExperience;
        } catch (err) {
            console.log("Error updating award:", err);
        }
    };

    static delete = async (id, next) => {
        try {
            const result = await prisma.experience.delete({
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

module.exports = ExperienceService;
