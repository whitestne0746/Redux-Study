const initialState = {
  tasks: []
};

function test(state = initialState) {
  return {
    ...state,
    tasks: state.tasks.concat('test')
  }
}

const a = test();

console.log(a)