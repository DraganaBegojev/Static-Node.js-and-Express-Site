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

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});