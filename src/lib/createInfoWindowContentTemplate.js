
export default function (marker) {
    return (`
     <div id="content"> 
        <div id="siteNotice">
        </div>
        <h1 id="firstHeading" class="firstHeading">Measurements</h1>
        <div id="bodyContent">
            <p>Temperature: 20° ${marker.position.lat}</p>
            <p>Wind Speed: 20Km/h</p>
            <p>Something else: 10</p>
        </div>
     </div>
    `)
}