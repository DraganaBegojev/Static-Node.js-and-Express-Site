const express = require('express');
const router = express.Router();
const data = require('./data.json');

// Home route
router.get('/', (req, res) => {
  res.render('index', { projects: data.projects });
});

// About route
router.get('/about', (req, res) => {
  res.render('about');
});

// Project details route
router.get('/project/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = data.projects.find(p => p.id === projectId);

    if (project) {
    res.render('project', { project });
  } else {
    res.status(404).render('404', { message: 'Project not found' });
  }
});

module.exports = router;