const app = require('./app')

app.listen(app.get('port'), _=>{
    console.log(`${app.get('name')} listening on port ${app.get('port')}`)
})