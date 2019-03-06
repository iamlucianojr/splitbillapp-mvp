export function consumers(state = [], action) {
  switch (action.type) {
    case "ADD_CONSUMER":
      return [...state, { id: Math.random(), name: action.payload.name }];
    default:
      return state;
  }
}

export function items(state = [], action) {

  console.log(action.payload);
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: Math.random(), text: action.payload.item.text, price: action.payload.item.price }];
    default:
      return state;
  }
}