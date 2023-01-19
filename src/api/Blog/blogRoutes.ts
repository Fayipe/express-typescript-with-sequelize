import express from "express";
import { BlogController } from "./blogController";
import { authorize, validation } from "../../middleware";
import { controllerHandler } from "./../../shared/controllerHandler";
import { EditBlogValidationSchema } from "./blogValidation";

const router = express.Router();
const call = controllerHandler;
const Blog = new BlogController();

// router.use(validation(BlogValidationSchema));

router.get("/", (rq, rs) => rs.send("Good work guys 💃 🕺 🦾 🚴🏽‍♀️"));


router.put(
  "/:slug", authorize,
  [validation(EditBlogValidationSchema)],
  call(Blog.updateBlog, (req, _res, _next) => [req.params.slug, req.body])
);

export const BlogRouter = router;
