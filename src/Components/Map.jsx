import React, { useEffect } from 'react'

export default function Map({ Bsv, Bsh }) {
  useEffect(() => {
    // Aquí puedes ejecutar código específico para inicializar el mapa después de que el DOM esté completamente cargado
    var platform = new H.service.Platform({ 'apikey': 'd7uc0gBf8RxxYH4FpQQ8nzNhvxqcTAJYrt77_2RS6OQ' })
    
    var defaultLayers = platform.createDefaultLayers()

    var map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: 39.244233, lng: -119.950676 }
      }
    )

  }, []) // Utilizamos un array vacío de dependencias para asegurar que el efecto se ejecute solo una vez

  return (
    <section
      id="mapContainer"
      className="Map"
      style={{
        gridRow: `span ${Bsv}`,
        gridColumn: `span ${Bsh}`,
        aspectRatio: `${Bsh}/${Bsv}`,
      }}>
    </section>
  )
}