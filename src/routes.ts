import { FastifyInstance } from 'fastify';
import {prisma} from "./lib/prisma";
export async function appRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    return await prisma.habit.findMany();

  });
}
