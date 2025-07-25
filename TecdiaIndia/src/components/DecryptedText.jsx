import React, { useState, useEffect, useRef } from "react";

const JAPANESE_CHARACTERS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const LATIN_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function getRandomChar(charSet) {
  return charSet.charAt(Math.floor(Math.random() * charSet.length));
}

export default function DecryptedText({ text, speed = 100, characterSet = "katakana", children }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  const chars = characterSet === "latin" ? LATIN_CHARACTERS : JAPANESE_CHARACTERS;

  useEffect(() => {
    indexRef.current = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      const i = indexRef.current;
      if (i > text.length) {
        clearInterval(interval);
        return;
      }

      let decryptedText = "";
      for (let j = 0; j < text.length; j++) {
        decryptedText += j < i ? text[j] : getRandomChar(chars);
      }

      setDisplayed(decryptedText);
      indexRef.current += 1;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, chars]);

  return children(displayed);
}
