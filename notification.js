export const NotificationPlugin = async ({ $, project }) => {
  console.log("[NotificationPlugin] 已加载，当前项目：", project?.name)

  const sendNotification = async (title, message) => {
    const spawn = require('child_process').spawn
    const psPath = require("path").join(
      require("os").homedir(),
      ".config/opencode/plugin/notify.ps1"
    )
    spawn('powershell', [
      '-ExecutionPolicy', 'Bypass',
      '-File', psPath,
      '-Title', title,
      '-Message', message
    ])
  }

  return {
    "tool.execute.before": async (input) => {
      if (input.tool === "question") {
        await sendNotification("OpenCode", "AI needs your input")
      }
    },
    event: async ({ event }) => {
      switch (event.type) {
        case "session.idle":
          await sendNotification("Task Completed", "Ready for review")
          break
        case "session.error":
          const error = event.properties?.error
          const errorMsg = typeof error === "string" ? error : error ? String(error) : "Something went wrong"
          await sendNotification("Error", errorMsg.slice(0, 100))
          break
        case "permission.updated":
        case "permission.asked":
          await sendNotification("Permission Required", "OpenCode needs your approval")
          break
        case "question.asked":
          await sendNotification("Question", "OpenCode needs your input")
          break
      }
    }
  }
}