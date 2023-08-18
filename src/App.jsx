import axios from 'axios'
import { useEffect, useState } from 'react'

import LocationesInfor from './components/LocationesInfor'
import LocationsForm from './components/LocationsForm'
import ResidentList from './components/ResidentList'
import { getRandomDimension } from './utils/random'

import './App.css'

function App() {

  const [curretLocation, setCurretLocation] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocatio = e.target.newLocation.value;
    fechDemension(newLocatio)

  }
  const fechDemension = (idLocation) => {
    const url =`https://rickandmortyapi.com/api/location/${idLocation}`
    

    axios
      .get(url)
      .then(({data}) => setCurretLocation(data))
      .catch((err) => console.log(err));

  }

  useEffect(() => {
    const randomDimension = getRandomDimension(126)
    fechDemension(randomDimension)

  }, [])
  

  return (
   
    
          <main className="bg-[url('/image/bg01.png')] bg-cover bg-center  text-white font-bold min-h-screen font-fire">
            <section className="bg-[url('/image/header.jpeg')]  flex flex-col items-center bg-cover mb-5 " >
              <img  className='img shadow-2xl' src="/image/title.png" alt="titulo" />
                <LocationsForm handleSubmit={handleSubmit} />
                <LocationesInfor curretLocation= {curretLocation} />
            </section>

            <ResidentList residents={curretLocation?.residents ?? []} curretLocation={curretLocation}/>
  
        </main>
    
        
    
    
    
    
  )
}

export default App
