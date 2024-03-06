const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class EducationService {
    static findMany = async (params, next) => {
        try {
            const education = await prisma.education.findMany();
            return education;
        } catch (err) {
            next(err);
        }
    };

    static findUnique = async (params, next) => {
        try {
            const { id } = params;
            const education = await prisma.education.findUnique(id, next);
            return education;
        } catch (err) {
            next(err);
        }
    };

    static create = async (params) => {
        try {
            const {
                education_name,
                education_image,
                institution_education,
                type_education,
                start_date,
                end_date,
            } = params;

            const education = await prisma.education.create({
                data: {
                    education_name: education_name,
                    education_image: education_image,
                    institution_education: institution_education,
                    type_education: type_education,
                    start_date: start_date,
                    end_date: end_date,
                },
            });
            return education;
        } catch (err) {
            console.log(err);
        }
    };

    static update = async (id, params) => {
        try {
            const {
                education_name,
                education_image,
                institution_education,
                type_education,
                start_date,
                end_date,
            } = params;

            const updatedEducation = await prisma.education.update({
                where: { id: +id },
                data: {
                    education_name: education_name,
                    education_image: education_image,
                    institution_education: institution_education,
                    type_education: type_education,
                    start_date: start_date,
                    end_date: end_date,
                },
            });

            if (!updatedEducation) {
                return null;
            }

            return updatedEducation;
        } catch (err) {
            console.log("Error updating award:", err);
        }
    };

    static delete = async (id, next) => {
        try {
            const result = await prisma.education.delete({
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

module.exports = EducationService;
