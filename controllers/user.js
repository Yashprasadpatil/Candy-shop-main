const User = require("../models/User");
exports.adduser = async (req, res, next) => {

  console.log("req.body", req.body);
  try {
    const name = req.body.name;
    const description = req.body.description;
    const amount = req.body.amount;
    const quantity = req.body.quantity;
    //console.log(req.body)

    const data = await User.create({
      name: name,
      description: description,
      amount: amount,
      quantity: quantity,
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
exports.getElement = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log("error in find all elements");
    // console.log('Get user is falling',JSON.stringify(error))
    res.status(500).json({ error: error });
  }
};
exports.getDelete = async (req, res, next) => {
  try {
    if (!req.params.id) {
      console.log("id is missing");
      res.status(400).json({ err: "id is missing" });
    }
    const uId = req.params.id;
    await User.destroy({ where: { id: uId } });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
