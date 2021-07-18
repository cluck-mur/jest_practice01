'use strict'

module.exports = class Calc {
    constructor() {

    }

    sum(req, res, next) {
        let a = parseInt(req.body.a, 10);
        let b = parseInt(req.body.b, 10);
        res.render('sum_ansor', { sumAnsor: a + b });
    }
}