const express = require('express');

const app = express();

//metodo health
app.get('/health', (req, resp) => {

    const envTest = process.env.algo || 'sin secreto'
    console.log('call to endpoint health '+ envTest);
    return resp.send('im a live '+ envTest)
})

// start servidor

//configuracion puerto para heroku 
var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Rocks!! on in port:'+ port);
});