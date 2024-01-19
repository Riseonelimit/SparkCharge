import React from 'react'

const Container = ({children}) => {
  return (
    <section className="  w-full h-screen overflow-hidden relative flex-box flex-col bg-[#f8f1ff]">
        {children}
    </section>
  )
}

export default Container