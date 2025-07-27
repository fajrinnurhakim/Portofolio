const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class ToolService {
  static findMany = async (params, next) => {
    try {
      const tools = await prisma.tool.findMany();
      return tools;
    } catch (err) {
      next(err);
    }
  };

  static findUnique = async (params, next) => {
    try {
      const { id } = params;
      const tools = await prisma.tool.findUnique(id, next);
      return tools;
    } catch (err) {
      next(err);
    }
  };

  static create = async (params) => {
    try {
      const { tool_name, tool_image, tool_level } = params;

      const tool = await prisma.tool.create({
        data: {
          tool_name: tool_name,
          tool_image: tool_image,
          tool_level: tool_level,
        },
      });
      return tool;
    } catch (err) {
      console.log(err);
    }
  };

  static update = async (id, params) => {
    try {
      const { tool_name, tool_image, tool_level } = params;

      const updatedTool = await prisma.tool.update({
        where: { id: +id },
        data: {
          tool_name: tool_name,
          tool_image: tool_image,
          tool_level: tool_level,
        },
      });

      if (!updatedTool) {
        return null;
      }

      return updatedTool;
    } catch (err) {
      console.log('Error updating award:', err);
    }
  };

  static delete = async (id, next) => {
    try {
      const result = await prisma.tool.delete({
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

module.exports = ToolService;
