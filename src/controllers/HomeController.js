class HomeController {
  index(req, res) {
    res.status(401).json({
      tudoCerto: true,
    });
  }
}

module.exports = new HomeController();
