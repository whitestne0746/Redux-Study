export const inputTask = (task) => {
  console.log(task)
  return {
    type: 'INPUT_TASK',
    payload: {
      task
    }
  };
};

export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: {
      task
    }
  };
};