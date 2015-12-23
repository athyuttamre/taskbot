# taskbot
A simple task manager for your team.

# Get Started

To get your own version of Taskbot running, you need to do three things:

- Clone and setup the repo
- Deploy the app on Heroku with MongoLab
- Configure a slash command on Slack

## 1. Clone and Setup

First, clone the repo. Next, rename `setup.template.sh` to `setup.sh`, and replace the MongoLab URL with your own. Then, run the file by typing `source setup.sh` in your Terminal.

## 2. Deploy on Heroku

Create a Heroku app, add the MongoLab add-on, and then deploy using the toolbelt. Make sure going to the URL returns a `Hello World!` message.

## 3. Configure Slash Command

Follow Slack's instructions to add a slash command to your team.