const Router = require("express");
const controllers = require("./tripes.controller");

const router = Router();

router.route("/").get(controllers.getMany);

router
  .route("/:id")
  .post(controllers.createOne)
  .get(controllers.getOne)
  .delete(controllers.removeOne)
  .put(controllers.updateOne);

module.exports = router;
