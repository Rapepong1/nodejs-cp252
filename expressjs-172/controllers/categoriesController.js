const categories = [];

const getCategories = (req, res) => {
  res.json({ categories: ["Unknown"] });
};

// Implement other controllers related to categories

module.exports = {
  getCategories,
  // Export other category controllers
};
