import React, { useState } from "react";
import { Trans, Plural, t } from "@lingui/macro";
import { withI18n } from "@lingui/react";

const Inbox = ({ i18n }) => {
  const [messages, setMessages] = useState([]);
  const messageCount = messages.length;

  const name = "keyang";

  const markAsRead = (e) => {
    console.log("我被点击了");
  };

  return (
    <div>
      <h1>
        <Trans>Message Inbox</Trans>
      </h1>
      <h2>
        <Trans>My name is {name}</Trans>
      </h2>
      <h3>
        <img src={require("./logo192.png")} alt={t`Image caption`} />
      </h3>
      <span>
        <Trans>Current locale: {i18n.locale}</Trans>
      </span>
      <p>
        <Trans>
          Sell all unread messages {" or "}
          <a href="javascript:;" onClick={markAsRead}>
            mark them
          </a>{" "}
          as read.
        </Trans>
      </p>
      <p>
        <Plural
          value={messageCount}
          _0="There're no messages"
          one="There's # message in your inbox."
          other="There're # messages in your inbox."
        />
      </p>
    </div>
  );
};

export default withI18n()(Inbox);
