//Omit<Type,Keys>
//Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
  
  type TodoPreiew = Omit<Todo, "description">;
  
  const todolist: TodoPreiew = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
  };
  
  console.log(todolist);
  // output
//   {
//     "title": "Clean room",
//     "completed": false,
//     "createdAt": 1615544252770
//   } 


  type TodoInfo = Omit<Todo, "completed" | "createdAt">;
  
  const todoInfo: TodoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
  };
  
  console.log(todoInfo);
  // output
//   {
//     "title": "Pick up kids",
//     "description": "Kindergarten closes at 5pm"
//   } 