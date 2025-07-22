const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json');

// Set up view engine to Pug
app.set('view engine', 'pug');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home route
app.get('/', (req, res) => {
  res.render('index', { projects: data.projects });
});

// About route
app.get('/about', (req, res) => {
  res.render('about');
});

// Project details route
app.get('/project/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = data.projects.find(p => p.id === projectId);

    if (project) {
    res.render('project', { project });
  } else {
    res.status(404).render('404', { message: 'Project not found' });
  }
});

// 404 handler
app.use((req, res, next) => {
  const err = new Error('Sorry, page not found.');
  err.status = 404;
  next(err);
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  if (err.status === 404) {
    res.render('page-not-found', { error: err });
  } else {
    res.render('error', { error: err });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});