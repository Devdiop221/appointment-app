const User = require('../models/User')


const UserController = {
  // create user
  create: function (req, res) {
    const user = new User(req.body);
    user
      .save()
      .then((user) => res.status(201).json(user))
      .catch((err) => res.status(400).json({ message: err.message }));
  },

  // read user
  read: function (req, res) {
    User.find()
      .then((users) => res.status(200).json(users))
      .catch((err) => res.status(500).json({ message: err.message }));
  },
  getByID: (req, res) => {
     const id = req.params.id;
    User.findById(id)
      .then((users) => res.status(200).json(users))
      .catch((err) => res.status(500).json({ message: err.message }));
  },

  // update user
  update: function (req, res) {
    const id = req.params.id;
    let userDataToUpdate = {};
    if (req.body.nom) userDataToUpdate.nom = req.body.nom;
    if (req.body.prenom) userDataToUpdate.prenom = req.body.prenom;
    if (req.body.adresse) userDataToUpdate.adresse = req.body.adresse;
    if (req.body.telephone) userDataToUpdate.telephone = req.body.telephone;
    if (req.body.email) userDataToUpdate.email = req.body.email;
    if (req.body.password) userDataToUpdate.password = req.body.password;
    return new Promise((resolve, reject) => {
      User.findOneAndUpdate({ _id: id }, userDataToUpdate, { new: true })
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(500).json({ message: err.message }));
    });
  },
  // delete user
  remove: function (req, res) {
    // remove user by id
    const id = req.params.id;
    console.log("delete", id);
    try {
      User.deleteOne({ _id: id })
        .then((user) =>
          res.status(200).json({
            success: true,
            message: `User with ID ${id} deleted`,
            data: user,
          })
        )
        .catch((err) => res.status(500).json({ message: err.message }));
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = UserController;
