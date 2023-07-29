import { ActionsT, DialogsT } from "./_store";

export type AddMessageAT = {
  type: "social/profile/ADD_MESSAGE";
  messageText: string;
};

export const addMessageAC = (messageText: string): AddMessageAT => ({
  type: "social/profile/ADD_MESSAGE",
  messageText,
});

export const dialogsReducer = (state: DialogsT, action: ActionsT) => {
  switch (action.type) {
    case "social/profile/ADD_MESSAGE": {
      const newMessage = {
        id: 11,
        message: action.messageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default: {
      return state;
    }
  }
};
