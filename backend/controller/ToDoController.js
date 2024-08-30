const TodoModel = require("../models/ToDoModel");

module.exports.getToDos = async (req, res) => {
  const { email } = req.body;
  const todos = await TodoModel.find({ email });
  res.send(todos);
};

module.exports.saveToDo = async (req, res) => {
  const { toDo, email } = req.body;
  TodoModel.create({ toDo, email })
    .then((data) => {
      console.log("save .....");
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error while saving to do" });
    });
};

module.exports.deleteToDo = async (req, res) => {
  console.log("delete .....");
  console.log(`${req.params._id}`);
  const { _id } = req.params;
  TodoModel.findByIdAndDelete(_id)
    .then((data) => {
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error while deleting to do" });
    });
};
