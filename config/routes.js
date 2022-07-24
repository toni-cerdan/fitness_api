module.exports = (app) => {
    app.use('/', require('./routes/authentication'));
    app.use('/users', require('./routes/users'));
}