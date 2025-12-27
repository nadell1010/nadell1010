module.exports.menuButton = (sock, jid) => {
  return sock.sendMessage(jid, {
    text: '🤖 *BOT WA 2025*\nPilih menu di bawah 👇',
    buttons: [
      { buttonId: '.menu', buttonText: { displayText: '📜 MENU' }, type: 1 },
      { buttonId: '.ai halo', buttonText: { displayText: '🤖 AI CHAT' }, type: 1 },
      { buttonId: '.play dj', buttonText: { displayText: '🎵 PLAY MUSIC' }, type: 1 }
    ],
    headerType: 1
  })
}
