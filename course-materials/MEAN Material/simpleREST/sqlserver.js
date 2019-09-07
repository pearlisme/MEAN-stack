/*
Node js supprots to connect to following DB's for data storage

•  MySQL
• Microsoft SQL Server
• PostgreSQL
• MongoDB
• CouchDB
• Redis
• Cassandra
*/

//You want to integrate your Node.js application into a Microsoft SQL Server instance.

//install       $ npm install tedious

// TDS = Tabular Data Structure
var TDS = require('tedious'),
Conn = TDS.Connection,
aModel = require('./logic.js');
var conn = new Conn({
	username: 'sa',
	password: 'pass',
	server: 'localhost',
	options: {
		database: 'Northwind',
		rowCollectionOnRequestCompletion: true
	}
});

function handleResult(err, res) {
	if (err) throw err;
	console.log(res);
}

conn.on('connect', function(err) {
	if (err) throw err;
	aModel.getByParameter(conn, 'parameter', handleResult);
	aModel.getByParameterSP(conn, 'parameter', handleResult);
	});

	var TDS = require('tedious'),
	TYPES = TDS.TYPES,
	Request = TDS.Request;
	var aModel = module.exports = {
	// Use vanilla SQL
	getByParameter: function(conn, parm, callback) {
		var q = 'select * from model (NOLOCK) where identifier = @parm';
		var req = new Request(q, function(err, rowcount, rows) {
		callback( err, rows );
	});
		req.addParameter('parm', TYPES.UniqueIdentifierN, parm);
		conn.execSql(req);
},
// Use a Store Procedure
getByParameterSP: function(conn, parm, callback) {
	var q = 'exec sp_getModelByParameter @parm';
	var req = new Request(q, function(err, rowcount, rows) {
	callback( err, rows );
});
	req.addParameter('parm', TYPES.UniqueIdentifierN, parm);
	conn.execSql(req);
	}
};
