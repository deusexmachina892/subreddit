const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.use(express.static(path.resolve('client','build', 'index.html')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('client', 'build', 'index.html'));
    })
}
app.listen(port, () => {
    console.log(`App bound to PORT: ${port}`)
})