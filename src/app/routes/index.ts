import express from "express";
import { UserRoutes } from "../module/user/users.route";
import { eventRoutes } from "../module/event/event.routes";
import { ExecutiveRoutes } from "../module/executives/executives.route";
import { ArticleRoutes } from "../module/article/article.routes";
import { sessionRoutes } from "../module/sessions/sessions.route";
import { CommitteeRoutes } from "../module/committee's/committee's.routes";
import { ContactRouter } from "../module/contact/contact.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/event",
    route: eventRoutes,
  },
  {
    path: "/executives",
    route: ExecutiveRoutes,
  },
  {
    path: "/article",
    route: ArticleRoutes,
  },
  {
    path: "/session",
    route: sessionRoutes,
  },
  {
    path: "/committee",
    route: CommitteeRoutes,
  },
  {
    path: "/contact",
    route: ContactRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
