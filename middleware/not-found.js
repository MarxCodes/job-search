const notFound = (req, res) => res.status(404).send("route doesn't exist");

module.exports = notFound;