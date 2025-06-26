import React from 'react'

export default function About(props) {
  return (
    <div>
      <h1 className={`text-${props.mode===`light`?`dark`:'light'}`}>About Us</h1>
      <p className={`text-${props.mode===`light`?`dark`:'light'}`}>TextCrafter is a powerful and easy-to-use text editor that lets you convert text to uppercase or lowercase, remove extra spaces, copy, preview, and even speak your text out loud—all in one clean interface.</p>
    </div>
  )
}
