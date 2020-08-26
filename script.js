const net = new brain.NeuralNetwork()
// adding more hidden layers makes the output better
// const net = new brain.NeuralNetwork({
//     hiddenLayers:[4, 5,6]
// })


const data =[
    {
        input:{r:0,g:0,b:0},
        output:[1]
    },
    {
        input:{r:1,g:1,b:1},
        output:[0]
    }
]


//x or operations
net.train(data)

// const diagram = document.getElementById('diagram')
// diagram.innerHTML = brain.utilities.toSVG(net)

//test if it works with an input
console.log(net.run({r:1, g:1,b:0}))