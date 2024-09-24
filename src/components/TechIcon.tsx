import React from 'react'

const TechIcon = ({component}:{component:React.ElementType}) => {
    const Component =component;
  return (
    <div>
      <Component  className="size-10 text-[#82d8ff] "/>
    </div>
  )
}

export default TechIcon
