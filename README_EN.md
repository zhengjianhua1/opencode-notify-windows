# opencode-notify-windows

A Windows notification plugin for OpenCode that sends system notifications when tasks complete.

## Features

### notification.js

OpenCode plugin that listens to the following events and sends Windows notifications:

| Event | Description |
|-------|-------------|
| `tool.execute.before` | Notify when AI needs user input |
| `session.idle` | Task completed, ready for review |
| `session.error` | Notify when an error occurs |
| `permission.updated/asked` | Permission request requires approval |
| `question.asked` | AI asks a question that needs answering |

### notify.ps1

PowerShell script that uses Windows Toast API to display system notification popups.

## Installation

Copy the following files to `~\.config\opencode\plugin`:

- `notification.js`
- `notify.ps1`

Windows path example: `C:\Users\<username>\.config\opencode\plugin`