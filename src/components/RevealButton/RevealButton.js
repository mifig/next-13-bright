"use client"
import React from 'react';

function RevealButton({children}) {
  const [isSnippetShown, setIsSnippetShown] = React.useState(false)

  return (
    <>
      {isSnippetShown ? (
        children
      ) : (
        <div className="reveal">
          <button
            onClick={() => {
              setIsSnippetShown(true)
            }}
          >
            Reveal Content
          </button>
        </div>
      )}
    </>
  )
}

export default RevealButton;
