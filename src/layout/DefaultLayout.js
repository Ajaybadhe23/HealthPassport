import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is logged in
    const userId = localStorage.getItem('userId')
    if (!userId) {
      navigate('/login')
    }
  }, [navigate])

  // Check userId on mount
  const userId = localStorage.getItem('userId')
  if (!userId) {
    return null // Will redirect in useEffect
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
