const map = L.map("map").setView([43.8733715, 12.0135036], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const markers = L.markerClusterGroup();
//const markers = L.layerGroup();
map.addLayer(markers);
function filterMarkers() {
  const selectedValue = document.getElementById("filter-select").value;
  const selectedRegion = document.getElementById("filter-regione").value;
  let markersData = [];
  switch (selectedRegion) {
    case "abruzzo":
      markersData = abruzzo;
      break;
    case "basilicata":
      markersData = basilicata;
      break;
    case "calabria":
      markersData = calabria;
      break;
    case "campania":
      markersData = campania;
      break;
    case "emilia":
      markersData = emilia;
      break;
    case "friuli":
      markersData = friuli;
      break;
    case "lazio":
      markersData = lazio;
      break;
    case "liguria":
      markersData = liguria;
      break;
    case "lombardia":
      markersData = lombardia;
      break;
    case "marche":
      markersData = marche;
      break;
    case "molise":
      markersData = molise;
      break;
    case "piemonte":
      markersData = piemonte;
      break;
    case "puglia":
      markersData = puglia;
      break;
    case "sardegna":
      markersData = sardegna;
      break;
    case "sicilia":
      markersData = sicilia;
      break;
    case "toscana":
      markersData = toscana;
      break;
    case "trentino":
      markersData = trentino;
      break;
    case "umbria":
      markersData = umbria;
      break;
    case "veneto":
      markersData = veneto;
      break;
    default:
      markersData = [
        ...abruzzo,
        ...basilicata,
        ...calabria,
        ...campania,
        ...emilia,
        ...friuli,
        ...lazio,
        ...liguria,
        ...lombardia,
        ...marche,
        ...molise,
        ...piemonte,
        ...puglia,
        ...sardegna,
        ...sicilia,
        ...toscana,
        ...trentino,
        ...umbria,
        ...veneto,
      ];
      break;
  }

  markers.clearLayers();
  markersData.forEach((markerInfo) => {
    if (
      selectedValue === "all" ||
      markerInfo.DATAZIONE.includes(selectedValue)
    ) {
      const marker = L.marker([
        markerInfo.COORDINATE.split(",")[0],
        markerInfo.COORDINATE.split(",")[1],
      ]);
      marker.type = markerInfo.DATAZIONE;
      //add popup
      marker.bindPopup(
        `<b>${markerInfo.DENOMINAZIONE}</b><br>${markerInfo.DATAZIONE}`
      );
      markers.addLayer(marker);
    }
  });
}
document
  .getElementById("filter-select")
  .addEventListener("change", filterMarkers);
  document
  .getElementById("filter-regione")
  .addEventListener("change", filterMarkers);
filterMarkers();
