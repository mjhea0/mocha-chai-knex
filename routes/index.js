var express = require('express');
var router = express.Router();

var queries = require('../db/queries');


// *** GET all shows *** //
router.get('/orders', function(req, res, next) {
  queries.getAll()
  .then(function(shows) {
    res.status(200).json(shows);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** GET single show *** //
router.get('/orders/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(show) {
    res.status(200).json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** add show *** //
router.post('/orders', function(req, res, next) {
  queries.add(req.body)
  .then(function(showID) {
    return queries.getSingle(showID);
  })
  .then(function(show) {
    res.json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** update show *** //
router.put('/orders/:id', function(req, res, next) {
  if(req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  queries.update(req.params.id, req.body)
  .then(function() {
    return queries.getSingle(req.params.id);
  })
  .then(function(show) {
    res.status(200).json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** delete show *** //
router.delete('/orders/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(show) {
    queries.deleteItem(req.params.id)
    .then(function() {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  }).catch(function(error) {
    next(error);
  });
});


module.exports = router;