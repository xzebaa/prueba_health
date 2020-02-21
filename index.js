const express = require('express');

const app = express();

//metodo health
app.get('/health', (req, resp) => {
    console.log('call to endpoint health');
    return resp.send('im a live')
})

// start servidor 
app.listen(3000, () => {
    console.log('Rocks!! on in port: 3000');
});