const User = require('../models').User;
const Phonebook = require('../models').Phonebook;

module.exports = {
    create(req, res) {
        return User.create({
            username: req.body.username,
            password: req.body.password,
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        var page = req.query.page;
        var offset = (page-1) * 10;        

        if (page === undefined) {
            return User
                .findAll({
                    include: [{
                        model: Phonebook,
                        as: 'phonebookItems',
                    }],
                    order: '"id" ASC'
                })
                .then(users => res.status(200).send(users))
                .catch(error => res.status(400).send(error));
        } else {
            return User
                .findAll({
                    include: [{
                        model: Phonebook,
                        as: 'phonebookItems',
                    }],
                    order: '"id" ASC',
                    offset: offset,
                    limit: 10
                })
                .then(users => res.status(200).send(users))
                .catch(error => res.status(400).send(error));
        }
    },
    retrieve(req, res) {
        return User
            .findById(req.params.idUser, {
                include: [{
                    model: Phonebook,
                    as: 'phonebookItems',
                }],
                order: '"id" ASC',
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User tidak ditemukan',
                    });
                }
                return res.status(200).send(user);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return User
            .findById(req.params.idUser, {
                include: [{
                    model: Phonebook,
                    as: 'phonebookItems',
                }],
            })
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User tidak ditemukan',
                    });
                }
                return user
                    .update({
                        username: req.body.username || user.username,
                        password: req.body.password || user.password,
                    })
                    .then(() => res.status(200).send(user)) // Mengirim kembalid data yang telah diubah
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {
        return User
            .findById(req.params.idUser)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: "User tidak ditemukan",
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};
