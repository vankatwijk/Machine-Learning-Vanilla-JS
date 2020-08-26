const net = new brain.NeuralNetwork()
// adding more hidden layers makes the output better
// const net = new brain.NeuralNetwork({
//     hiddenLayers:[4, 5,6]
// })

//x or operations
net.train([
    {
        input:[0,0],
        output:[0]
    },
    {
        input:[1,0],
        output:[1]
    },
    {
        input:[0,1],
        output:[1]
    },
    {
        input:[1,1],
        output:[0]
    },
])

const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net)

//test if it works with an input
console.log(net.run([1,0]))