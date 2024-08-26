const storeData = {
  globalData: [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+81 965-431-3024",
      image: "https://dummyjson.com/icon/emilys/128",
    },
    {
      id: 2,
      firstName: "Michael",
      lastName: "Williams",
      email: "michael.williams@x.dummyjson.com",
      phone: "+49 258-627-6644",
      image: "https://dummyjson.com/icon/michaelw/128",
    },
    {
      id: 3,
      firstName: "Rechard",
      lastName: "plon",
      email: "rechard.plon@x.dummyjson.com",
      phone: "+49 238-617-6645",
      image: "https://dummyjson.com/icon/michaelw/128",
    },
  ],
  viewData: [],
  updateData: {},
};

export const reducer = (state = storeData, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        globalData: [...state.globalData, action.payload],
      };

    case "view":
      return {
        ...state,
        viewData: [action.payload],
      };

    case "delete":
      const filtered = state.globalData.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        globalData: [...filtered],
      };

    case "update":
      return {
        ...state,
        updateData: { ...action.item,index:action.index },
      };
    case "update1":
      // console.log("payload", action.payload.id-1);
      let dup = [...state.globalData];
      dup[action.index] = action.payload;
      return {
        ...state,
        globalData: [...dup],
      };

    default:
      return state;
  }
};
