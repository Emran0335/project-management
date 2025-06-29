import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving projects ${error.message}` });
  }
};

// When you gonna create a new project, you need to send id. But in the postgresql, it will not work.
// So, run this command in the postgresql console to create id for the new project.
// SELECT setval(pg_get_serial_sequence('"Project"', 'id'), coalesce(max(id)+1, 1), false) FROM "Project";
export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, description, startDate, endDate } = req.body;

  try {
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        startDate,
        endDate,
      },
    });
    res.status(201).json(newProject);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating project ${error.message}` });
  }
};
