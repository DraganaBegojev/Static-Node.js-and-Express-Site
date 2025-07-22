const express = require('express');
const app = express();
const path = require('path');

// Import routes
const routes = require('./routes'); 

// Set up view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use imported routes
app.use(routes);

// 404 handler
app.use((req, res, next) => {
  const err = new Error('Sorry, page not found.');
  err.status = 404;
  next(err);
});

// Global error handler
app.use((err, req, res, next) => {
  console.log(`[${err.status || 500}] ${err.message} - ${req.originalUrl}`);
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