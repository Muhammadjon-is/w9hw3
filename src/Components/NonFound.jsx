import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap'
const NonFound = () => {
      const navigate = useNavigate()
  return (
      <div>
        <h1>404 Page not found sorry try again </h1>
         <Button variant="info" onClick={() => navigate('/')}>
            Click here to go home
          </Button>
        

    </div>
  )
}

export default NonFound