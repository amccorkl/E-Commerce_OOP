const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//works
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({  
      include: [{ model: Product, through: ProductTag }] 
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//works
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag available with that id."});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//"works"
router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create
    ({ 
      tag_name: req.body.tag_name,
    });
    res.status(200).json({ message: `New tag ${tagData} created successfully.` });
  } catch (err) {
    res.status(500).json(err);
  }
});

//"wrong route" returned, doesn't work
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(
      {tag_name: req.body.tag_name},
      {where: { id: req.params.id },
      }
    );
    if(!tagData[0]) {
      res.status(404).json({ message: "No tag found with that id."});
      return;
    }
    res.status(200).json({ message: `tag with the id ${updatedTag} successfully updated`});
  } catch (err) {
    res.status(500).json(err);
  }
});

//wrong route returned??
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id."});
      return;
    }
    res.status(200).json({ message: `Tag with id ${tagData} successfully deleted.`});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
