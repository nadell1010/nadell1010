module.exports = {
  name: 'tagall',
  execute: async ({ sock, m }) => {
    const group = await sock.groupMetadata(m.key.remoteJid)
    const members = group.participants.map(v => v.id)

    sock.sendMessage(m.key.remoteJid, {
      text: '📢 TAG ALL',
      mentions: members
    })
  }
}
