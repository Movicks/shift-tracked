// import React from 'react'
interface HeadingsProps {
  header: string;
}

export default function Headings({header}: HeadingsProps) {
  return (
    <h1 className='text-[16px]'>{header}</h1>
  )
}
