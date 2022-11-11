import React from 'react'

export default function Footer () {
  return (
    <footer className='container'>
        <div className='d-flex justify-content-between'>
            <div>&copy; {new Date().getFullYear()} L'écoute - Centre de consultation et de relation d'aide</div>
            <div>Réalisé avec ❤️ par GriffinCreative</div>
        </div>
    </footer>
  )
}