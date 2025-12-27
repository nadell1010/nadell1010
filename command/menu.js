module.exports = {
  name: 'menu',
  execute: async ({ sock, m }) => {
    sock.sendMessage(m.key.remoteJid, {
      text: '📜 MENU\n.ai\n.play\n.tagall'
    })
  }
}
