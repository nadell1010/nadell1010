const { menuButton } = require('../lib/button')

module.exports = {
  name: 'menu',
  execute: async ({ sock, m }) => {
    menuButton(sock, m.key.remoteJid)
  }
}

module.exports = {
  name: 'menu',
  execute: async ({ sock, m }) => {
    sock.sendMessage(m.key.remoteJid, {
      text: '📜 MENU\n.ai\n.play\n.tagall'
    })
  }
}
