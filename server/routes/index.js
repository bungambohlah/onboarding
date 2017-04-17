const usersController = require('../controllers').users;
const phonebooksController = require('../controllers').phonebooks;

module.exports = (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'API backend'
    }));

    // Create data users
    app.post('/api/users', usersController.create);
    // Read all data users
    app.get('/api/users', usersController.list);
    // Read Specified data users
    app.get('/api/users/:idUser', usersController.retrieve);
    // Update specified data users
    app.put('/api/users/:idUser', usersController.update);
    // Delete specified data users
    app.delete('/api/users/:idUser', usersController.destroy);

    app.post('/api/phonebooks/:userId', phonebooksController.create);
    app.put('/api/phonebooks/:userId/item/:idPhonebook', phonebooksController.update);
    app.delete('/api/phonebooks/:userId/item/:idPhonebook', phonebooksController.destroy);

    // Untuk request api ke method lainnya pada phonebook, maka menampilkan respon "Method Not Allowed"
    app.all('/api/phonebooks/:userId/item', (req, res) =>
        res.status(405).send({
            message: "Method not Allowed",
    }));

    app.get('/', (req, res) => {
        res.status(200).sendFile('users/index.html', {root: 'client'});
    });

    app.get('/:level1', (req, res) => {
        var level1 = req.params.level1;
        res.status(200).sendFile(level1 + '/index.html');
    });

    app.get('/:level1/:level2', (req, res) => {
        var level1 = req.params.level1;
        var level2 = req.params.level2;
        res.status(200).sendFile(level1 + '/' + level2 + '.html', {root: 'client'});
    });

    app.get('/:level1/:level2/:userId', (req, res) => {
        var level1 = req.params.level1;
        var level2 = req.params.level2;
        res.status(200).sendFile(level1 + '/' + level2 + '.html', {root: 'client'});
    });
}
