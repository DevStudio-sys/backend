import { Router } from "express";
import mainHandlers from "../handlers/main";

export const mainRoutes = Router();

mainRoutes.get("/", mainHandlers.mainAction);

export { mainRoutes as default };
