import React from "react";



 export default function Gallery () {

return(
    <>
      < section
        className=" relative h-96 bg-cover bg-center flex items-center "
        style={{backgroundImage:`url('/bg-image.jpeg')`}}>
            < div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl text-left px-20 font-bold text-white drop-shadow-2xl">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800" 
                alt="Beach" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://plus.unsplash.com/premium_photo-1677002267493-cfdcc59cee92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1056" 
                alt="Mountains" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 md:col-span-1 lg:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=1600" 
                alt="Resort" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800" 
                alt="Desert" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800" 
                alt="Lake" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1547393027-a632f1004ad6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1040" 
                alt="City" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://plus.unsplash.com/premium_photo-1691675470595-29d1d9b3081d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXNsYW5kfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900" 
                alt="Island" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1571504211935-1c936b327411?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzdGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900" 
                alt="Castle" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1540865070955-2110dc5f2271?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhbG18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900" 
                alt="Palm" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1499561385668-5ebdb06a79bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBhbG18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900" 
                alt="Pool" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
        </section>
    </>
 );
}