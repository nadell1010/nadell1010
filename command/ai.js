module.exports = {
  name: 'ai',
  execute: async ({ sock, m, args }) => {
    const text = args.join(' ')
    if (!text) return

    sock.sendMessage(m.key.remoteJid, {
      text: `🤖 AI: ${text}`
    })
  }
}
