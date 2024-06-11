const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdOn: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        createdOn: action.payload.createdOn,
        nationalID: action.payload.nationalID,
      };
    case "account/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdOn: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}
