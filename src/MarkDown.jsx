import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MarkDown = () => {

const text = 
`# Markdown preview

# This is header 1

## This is header 2

### This is header 3

![alt text](https://picsum.photos/200/300)

This is some image

- list 1
- list 2
- list 3
`

 

    const [markDown , setMarkDown] = useState(text)
    const editor = (e) => {
       setMarkDown(e.target.value)
    }


  return (
    <div className='container'>
        <div className='left-part'>
          <textarea type="text" className='editor' value={markDown} onChange={editor}></textarea>
        </div>
        <div className='right-part'>
            <ReactMarkdown children={markDown} remarkPlugins={[remarkGfm]} />
        </div>
    </div>
  )
}

export default MarkDown