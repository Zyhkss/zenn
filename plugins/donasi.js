let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [088299601177]
│ •  [081528745589]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler