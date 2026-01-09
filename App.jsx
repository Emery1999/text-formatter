import { useState, useRef, useEffect } from "react";
import { toBold, toUnderline, toStrike } from "./unicodeMaps";

const emojis = ["🔥","✨","✅","🚀","💡","📌","👉","❤️"];

const templates = [
  "🔥 TITRE\n\n👉 Description claire ici\n\n✅ Appel à l’action",
  "✨ ASTUCE DU JOUR\n\n💡 Explique ton astuce ici\n\n🚀 Passe à l’action",
];

export default function App() {
  const [text, setText] = useState("");
  const [dark, setDark] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  const applyFormat = (fn) => {
    const el = textareaRef.current;
    const s = el.selectionStart;
    const e = el.selectionEnd;
    if (s === e) return;
    setText(text.slice(0, s) + fn(text.slice(s, e)) + text.slice(e));
  };

  const insertEmoji = (emoji) => {
    const el = textareaRef.current;
    const s = el.selectionStart;
    setText(text.slice(0, s) + emoji + text.slice(s));
  };

  return (
    <div className="container">
      <header>
        <h1>Text Formatter</h1>
        <button className="toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <div className="toolbar">
        <button onClick={() => applyFormat(toBold)}>Gras</button>
        <button onClick={() => applyFormat(toUnderline)}>Souligné</button>
        <button onClick={() => applyFormat(toStrike)}>Barré</button>
      </div>

      <div className="emoji-bar">
        {emojis.map(e => (
          <button key={e} onClick={() => insertEmoji(e)}>{e}</button>
        ))}
      </div>

      <textarea
        ref={textareaRef}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Écris ou colle ton texte ici..."
      />

      <div className="templates">
        {templates.map((t,i) => (
          <button key={i} onClick={() => setText(t)}>Template {i+1}</button>
        ))}
      </div>

      <footer>
        <span>{text.length} caractères</span>
        <button className="copy" onClick={() => navigator.clipboard.writeText(text)}>
          Copier
        </button>
      </footer>
    </div>
  );
}