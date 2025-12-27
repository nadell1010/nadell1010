const { chatAI } = require('../lib/ai')

module.exports = {
  name: 'ai',
  execute: async ({ sock, m, args }) => {
    const text = args.join(' ')
    if (!text) {
      return sock.sendMessage(m.key.remoteJid, {
        text: '🗿 ketik pertanyaan bang'
      })
    }

    const reply = await chatAI(text)

    sock.sendMessage(m.key.remoteJid, {
      text: `🤖 AI:\n${reply}`
    })
  }
}
