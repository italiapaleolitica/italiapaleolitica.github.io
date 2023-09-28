const map = L.map("map").setView([43.8733715, 12.0135036], 6);
function fixItalianPhoneNumber(phoneNumber) {
    const numericPhoneNumber = phoneNumber.toString().replace(/\D/g, '');
    if (numericPhoneNumber.length != 10) {
      return '0' + numericPhoneNumber;
    } else {
      return numericPhoneNumber;
    }
  }
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const markers = L.markerClusterGroup();
//const markers = L.layerGroup();
map.addLayer(markers);
function filterMarkers() {
  const selectedRegion = document.getElementById("filter-regione").value;
  let markersData = [];
  switch (selectedRegion) {
    case "abruzzo":
      markersData = abruzzo_musei
      break;
    case "basilicata":
      markersData = basilicata_musei;
      break;
    case "calabria":
      markersData = calabria_musei;
      break;
    case "campania":
      markersData = campania_musei;
      break;
    case "emilia":
      markersData = emilia_musei;
      break;
    case "friuli":
      markersData = friuli_musei;
      break;
    case "lazio":
      markersData = lazio_musei;
      break;
    case "liguria":
      markersData = liguria_musei;
      break;
    case "lombardia":
      markersData = lombardia_musei;
      break;
    case "marche":
      markersData = marche_musei;
      break;
    case "molise":
      markersData = molise_musei;
      break;
    case "piemonte":
      markersData = piemonte_musei;
      break;
    case "puglia":
      markersData = puglia_musei;
      break;
    case "sardegna":
      markersData = sardegna_musei;
      break;
    case "sicilia":
      markersData = sicilia_musei;
      break;
    case "toscana":
      markersData = toscana_musei;
      break;
    case "trentino":
      markersData = trentino_musei;
      break;
    case "umbria":
      markersData = umbria_musei;
      break;
    case "veneto":
      markersData = veneto_musei;
      break;
    default:
      markersData = [
        ...abruzzo_musei,
        ...basilicata_musei,
        ...calabria_musei,
        ...campania_musei,
        ...emilia_musei,
        ...friuli_musei,
        ...lazio_musei,
        ...liguria_musei,
        ...lombardia_musei,
        ...marche_musei,
        ...molise_musei,
        ...piemonte_musei,
        ...puglia_musei,
        ...sardegna_musei,
        ...sicilia_musei,
        ...toscana_musei,
        ...trentino_musei,
        ...umbria_musei,
        ...veneto_musei,
      ];
  }

  markers.clearLayers();
  markersData.forEach((markerInfo) => {
    markerInfo.TEL = fixItalianPhoneNumber(markerInfo.TEL);
    markerInfo.SITO = markerInfo.SITO.replace("http://", "");
    markerInfo.SITO = markerInfo.SITO.replace("https://", "");
      const marker = L.marker([
        markerInfo.COORDINATE.split(",")[0],
        markerInfo.COORDINATE.split(",")[1],
      ]);
      //add popup
      marker.bindPopup(
        `<b>${markerInfo.NOME}</b>
        <br>
        ${markerInfo.TEL}
        <br>
        <a href="https://${markerInfo.SITO}" target="_blank">${markerInfo.SITO}</a>`
      );
      markers.addLayer(marker);
  });
}
  document
  .getElementById("filter-regione")
  .addEventListener("change", filterMarkers);
filterMarkers();