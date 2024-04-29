import React, { useEffect } from 'react'

export default function Map({ Bsv, Bsh, ARc, Th }) {
  useEffect(() => {
    // Aquí puedes ejecutar código específico para inicializar el mapa después de que el DOM esté completamente cargado
    let platform = new H.service.Platform({ 'apikey': 'd7uc0gBf8RxxYH4FpQQ8nzNhvxqcTAJYrt77_2RS6OQ' })
    
    let defaultLayers = platform.createDefaultLayers()

    let map = new H.Map(
      document.getElementById('MapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: 12,
        center: { lat: 39.244233, lng: -119.950676 }
      }
    )

  }, []) // Utilizamos un array vacío de dependencias para asegurar que el efecto se ejecute solo una vez

  return (
    <section className="Map" style={{
      gridRow: `span ${Bsv}`,
      gridColumn: `span ${Bsh}`,
      ...(ARc && { aspectRatio: `${Bsh}/${Bsv}`}),
    }}>
      <div id="MapContainer" className="MapDiv"> </div>
      <div className="Text"> <h2>{Th}</h2> </div>
    </section>
  )
}