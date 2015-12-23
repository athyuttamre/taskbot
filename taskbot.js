var Tasks = require('./tasks');

/**
 * Slack request looks like this:
 *
 * token=TOKEN
 * team_id=T0001
 * team_domain=example
 * channel_id=C2147483705
 * channel_name=test
 * user_id=U2147483697
 * user_name=Steve
 * command=/weather
 * text=94070
 * response_url=https://hooks.slack.com/commands/1234/5678
 */

var helpText = "Help text goes here!";

var main = function (req, res, next) {
  var responseType = "ephemeral";
  var payloadText = "";
  var attachments = [];

  var text = req.body.text;
  var textParts = text.split(" ");

  if(textParts.length <= 0) {
    payloadText = "Looks like you forgot to add commands! Type `/taskbot help` to see how to use taskbot";
  } else if (textParts[0] == "help") {
    payloadText = helpText;
  } else if (textParts[0] === "list") {
    responseType = "in_channel";
    payloadText = "List tasks interface goes here!";
  } else if (textParts[0] === "new") {
    responseType = "in_channel";
    payloadText = "New task interface goes here!";
  } else if (textParts[0] === "assign") {
    responseType = "in_channel";
    payloadText = "Assign task interface goes here!";
  }

  var payload = {
    "response_type": responseType,
    "text": payloadText,
    "attachments": attachments
  };

  // avoid infinite loop
  if (req.body.user_name !== 'slackbot') {
    return res.status(200).json(payload);
  } else {
    return res.status(200).end();
  }
}

module.exports = main;