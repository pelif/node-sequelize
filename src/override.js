import methodOverride from 'method-override'

export default (app) => {
    app.use(methodOverride(function(req, res) {
        if(req.body && typeof req.body === 'object' && '_method' in req.body) {
            let method = req.body._method
            delete req.body._method 
            return method
        }
    }))
}