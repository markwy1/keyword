/*
Yong Wang
From Craftsman.book
2017.2.4
p108
*/

'use strict';
module.paths.push('C:/Users/Yong/AppData/Roaming/npm/node_modules');

var Percolator = require('percolator').Percolator;

var port = 8088;
var server = Percolator({'port': port});

//console.log(server);

server.route('/api/keywords',
{
	GET: function (req, res) {
		res.object({'foo': 'bar'}).send();
	}
}
);

server.listen(function() {
	console.log('Server started and listening on port', port);
});