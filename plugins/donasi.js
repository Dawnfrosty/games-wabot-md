let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085713964963]
│ • Telkomsel [082297563380]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/BochilGaming
│ • Gopay [082297563380]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
