# opencode-notify-windows

Windows 通知插件，用于 opencode 任务完成时发送系统通知。

## 功能

### notification.js

OpenCode 插件，监听以下事件并发送 Windows 通知：

| 事件 | 说明 |
|------|------|
| `tool.execute.before` | AI 需要用户输入时通知 |
| `session.idle` | 任务完成，等待用户审查 |
| `session.error` | 发生错误时通知 |
| `permission.updated/asked` | 权限请求需要审批 |
| `question.asked` | AI 提出问题需要回答 |

### notify.ps1

PowerShell 脚本，使用 Windows Toast API 发送系统通知弹窗。

## 安装

将以下文件拷贝到 `~\.config\opencode\plugin` 目录：

- `notification.js`
- `notify.ps1`

Windows 路径示例：`C:\Users\<用户名>\.config\opencode\plugin`