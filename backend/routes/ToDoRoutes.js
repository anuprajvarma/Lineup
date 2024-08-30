const { Router } = require("express");
const {
  getToDos,
  saveToDo,
  deleteToDo,
} = require("../controller/ToDoController");

const router = Router();

router.post("/get-todos", getToDos);
router.post("/save-todo", saveToDo);
router.delete(`/delete-todo/:_id`, deleteToDo);

module.exports = router;
