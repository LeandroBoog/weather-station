
const graphColors = [
    '#ff0000',
    '#e68a00',
    '#e8e830',
    '#669900',
    '#66ff66',
    '#00ace6',
    '#3333ff',
    '#a31aff'
]

function datasetTemplate(data, label, color) {
    return {
        label,
        borderColor: color,
        pointBackgroundColor: color,
        pointRadius: 6,
        fill:false,
        data
    }
}

// fehlt: Labels! Evtl graphObject doch als Array damit labels konstant richtige werte bekommen können
function transformRoutesDataToChartObjects(routes) {

    const dataPoints = ['temperature', 'apparentTemperature', 'windSpeed', 'humidity', 'airPressure']

    const graphObjects = {}
    for (const key of dataPoints) {
        const datasets = routes.map(route => route.measurements.map(dataPoint => dataPoint[key]))
        const dataSetsObject = datasets.map((dataset, index) => {
            const label = routes[index].timestamp
            const color = graphColors[index]
            return datasetTemplate(dataset, label, color)
        })
        graphObjects[key] = ({ labels: [], datasets: dataSetsObject })
    }

    return graphObjects
}

module.exports = transformRoutesDataToChartObjects