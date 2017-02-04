/*
Yong Wang
From Craftsman.book
2017.2.4
p106
*/

'use strict';

module.paths.push('C:/Users/Yong/AppData/Roaming/npm/node_modules');

var request = require('request');

describe('The API', function () {

//	it('should just work', function () {
//		expect(true).toBe(true);
//	});

	it('should respond to a GET request at /api/keywords/', function (done) {
		request.get({
			'url': 'http://www.markwy.com:8088/api/keywords/',
			'json': true
		},
		function (err, res, body) {
			expect(res.statusCode).toBe(200);
			expect(body.foo).toEqual('bar');
			done();
		});
	});

});