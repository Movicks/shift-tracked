// import React from 'react'

export default function NotFound() {
  return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
          <h1>Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <p>Please check the URL and try again.</p>
          <p>If you think this is an error, please contact the website administrator.</p>
          <p>Thank you for using our website.</p>
          <button className="btn btn-primary">Go Home</button>
    </div>
  )
}
