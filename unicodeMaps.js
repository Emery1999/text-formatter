const normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const bold =
  "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙";

export function toBold(text) {
  return text.split("").map(c => {
    const i = normal.indexOf(c);
    return i !== -1 ? bold[i] : c;
  }).join("");
}

export function toUnderline(text) {
  return text.split("").map(c => c + "\u0332").join("");
}

export function toStrike(text) {
  return text.split("").map(c => c + "\u0336").join("");
}