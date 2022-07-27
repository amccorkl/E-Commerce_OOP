const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories with associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value with associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id." });
      return; //delete the return from this line and move it up?
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({ category_name: req.body.category_name, });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//response said wrong route, doesn't work yet
router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      { category_name: req.body.category_name, },
      { where: { id: req.params.id }, },
    );
    if (!categoryData[0]) {
      res.status(404).json({ message: "No category found with that id" });
      return;
    }
    const updatedCategory = await Category.findByPk(req.params.id);
    res.status(200).json({ message: `category updated ${updatedCategory}` });
  } catch (err) {
    res.status(500).json(err);
  }
});

//response said wrong route, doesn't work yet
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy(
      { where: { id: req.params.id }, },
    );
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id." });
      return;
    }
    res.status(200).json({ message: `Category with id ${req.params.id} successfully deleted.`, });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
