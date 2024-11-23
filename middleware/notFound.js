const notFound = (req, res) => {
    res.status(404).send(`
        <p>OOPS!!! The page you are looking for is not exist.</p>
        <a href="/">Click here to go to login page</a>
        `)
}

module.exports = notFound;