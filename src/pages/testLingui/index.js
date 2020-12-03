import React, { useState } from "react";
import { Trans } from "@lingui/macro";

const Inbox = () => {
  const messages = useState([]);
  const messageCount = messages.length;

  const markAsRead = () => {
    console.log("");
  };

  return (
    <div>
      <h1>
        <Trans>Message Inbox</Trans>
      </h1>
      <p>
        Sell all unread messages {" or "}
        <a onClick={markAsRead}>mark them</a> as read.
      </p>
      <p>
        {messageCount === 1
          ? `There is ${messageCount} message in your inbox`
          : `There are ${messageCount} messages in your inbox.`}
      </p>
    </div>
  );
};
