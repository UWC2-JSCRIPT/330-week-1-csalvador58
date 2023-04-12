const { Router } = require('express');
const router = Router();

const itemDao = require('../daos/items');

router.get('/', (req, res, next) => {
  res.json(itemDao.getAll());
});

router.get('/:id', (req, res, next) => {
  // TODO: complete this route

  if (itemDao.getById(req.params)) {
    res.json(itemDao.getById(req.params));
  } else res.sendStatus(404);
});

router.post('/', (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put('/:id', (req, res, next) => {
  // TODO: complete this route

  itemDao.updateById(req.params, req.body);
  res.sendStatus(200);
  // res.sendStatus(501);
});

router.delete('/:id', (req, res, next) => {
  // TODO: complete this route

  console.log(' routes: req.params');
  console.log(req.params);
  itemDao.deleteById(req.params);
  res.sendStatus(200);
  // res.sendStatus(501);
});

module.exports = router;
