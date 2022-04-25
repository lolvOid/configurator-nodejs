const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/public'))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));

app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));
app.use('/dist/', express.static(path.join(__dirname, 'node_modules/@alancnet/three-csg/dist')));


app.use('/lib/', express.static(path.join(__dirname, 'node_modules/three-csg-ts/lib/esm/index.js')));
app.use('/node_modules/', express.static(path.join(__dirname, 'node_modules')))
app.listen(3000, () =>
  console.log('Visit http://127.0.0.1:3000')
);