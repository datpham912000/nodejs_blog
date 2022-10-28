class NewsController {
    // [Get => news]
    index(req, res) {        
        res.render('news');
    }
    dcmm(req, res) {        
        res.send("dcmm")
    }
}
module.exports = new NewsController;