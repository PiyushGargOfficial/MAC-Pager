import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChanellContainer, ChanellListContainer } from "./components";
import "./App.css";

const apiKey = "9waeqfjbt3dr";

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChanellListContainer />
        <ChanellContainer />
      </Chat>
    </div>
  );
};

export default App;
