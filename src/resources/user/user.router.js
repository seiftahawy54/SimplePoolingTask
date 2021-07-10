const Router = require("express");
const router = Router();
const controllers = require("./user.controller");

router.route("/").get(controllers.getMany);

router
  .route("/:id")
  .get(controllers.getOne)
  .post(controllers.addOne)
  .delete(controllers.removeOne)
  .put(controllers.updateOne);

module.exports = router;
