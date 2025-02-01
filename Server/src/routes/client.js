const client = (app) => {
  // HOME
  app.get("/", (req, res) => {
    res.render("index");
  });

  // PAGES
  app.get("/about", (req, res) => {
    res.render("pages/about");
  });

  app.get("/contact", (req, res) => {
    res.render("pages/contact");
  });

  app.get("/copyright", (req, res) => {
    res.render("pages/copyright");
  });

  app.get("/disclaimer", (req, res) => {
    res.render("pages/disclaimer");
  });

  app.get("/privacy", (req, res) => {
    res.render("pages/privacy");
  });

  // PAGE NOT FOUND
  app.all("*", (req, res, next) => {
    res.render("error/pageNotFound");
  });
};

export default client;
