import express from "express";
import { authorize, validation } from "../../middleware";
// import { validation } from "../../middleware";
import { controllerHandler } from "./../../shared/controllerHandler";
import { BlogCategoryController } from "./blogCategoryController";
import { BlogCategoryValidationSchema } from "./blogCategoryValidation";
// import { UserValidationSchema } from "./userValidation";

const router = express.Router();
const call = controllerHandler;
const BlogCategory = new BlogCategoryController();

router.post(
    "/create", authorize,[validation(BlogCategoryValidationSchema)],
    call(BlogCategory.createBlog, (req, _res, _next) => [req.body])
  );

  router.get("/all", authorize,
  call(BlogCategory.getAllBlogCategory, (req, res, next) => [])
  )

  router.delete("/delete/:id", authorize,
    call(BlogCategory.deleteBlogCategory, (req, res, next) => [req.params.id])
  )

  router.put("/update/:id", authorize, [validation(BlogCategoryValidationSchema)],
  call(BlogCategory.updateBlogCategory, (req, res, next) => [req.params.id, req.body])
  )

export const BlogCategoryRouter = router
