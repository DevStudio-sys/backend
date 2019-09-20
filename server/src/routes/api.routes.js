import { Router } from "express";
import apiHandlers from "../handlers/api";
import middlewares from "./../handlers/middlewares";

const apiRoutes = Router();

apiRoutes.post("/", middlewares.loginRequired, apiHandlers.apiCreate);

/**
 * chech auth
 */
apiRoutes.post(
  "/check-auth",
  middlewares.loginRequired,
  apiHandlers.successAuth
);

/**
 * chech auth
 */
apiRoutes.post(
  "/get-userinfo",
  middlewares.loginRequired,
  apiHandlers.getUserinfo
);

export { apiRoutes as default };
