const Phonebook = require('../models').Phonebook;

module.exports = {
    create(req, res) {
        return Phonebook.create({
            namaKontak: req.body.namaKontak,
            noTelp: req.body.noTelp,
            userId: req.params.userId,
        })
        .then(phonebook => res.status(201).send(phonebook))
        .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Phonebook
            .update(
                {
                    namaKontak: req.body.namaKontak || phonebook.namaKontak,
                    noTelp: req.body.noTelp || phonebook.noTelp,
                },
                { where: {
                    id: req.params.idPhonebook,
                    userId: req.params.userId
                }}
            )
            .then(updatedPhonebook => res.status(200).send(updatedPhonebook))
            .catch(error => res.status(400).send(error));
    },
    destroy(req, res) {
        return Phonebook
            .destroy({
                where: {
                    id: req.params.idPhonebook,
                    userId: req.params.userId,
                }
            })
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
    },
}
