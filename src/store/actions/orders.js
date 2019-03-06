export const addConsumer = name => ({
  type: "ADD_CONSUMER",
  payload: { name }
});

export const addItem = item => ({
  type: "ADD_ITEM",
  payload: { item }
});