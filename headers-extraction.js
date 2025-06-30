// Include some important core module
const http = require('http');

exports.extract = function(HOST){
    const TARGETURL = new URL(HOST);
    const HOSTNAME = TARGETURL.hostname;
    const PATH = TARGETURL.pathname;
    const PORT = TARGETURL.port;

    http.get({
        hostname: HOSTNAME,
        port: PORT,
        path: PATH,
        agent: false,
    }, (res) => {
        // Raw headers
        raw_headers = res.rawHeaders;

        // Error msg
        const err_msg = "Not exist";

        // Headers but not raw
        var CONTENT_TYPE = res.headers['content-type'];
        var SERVER = res.headers['SERVER'];
        var DATE_SERVER = res.headers['date'];
        var X_POWERED_BY = res.headers['x-powered-by'];
        var CONNECTION = res.headers['connection'];
        var TRANSFER_ENCODING = res.headers['transfer-encoding']
        var X_FRAME_OPTIONS = res.headers['x-frame-options'];     
        var X_XSS_PROTECTION = res.headers['x-xss-protection'];   
        var CONTENT_TYPE_OPTIONS = res.headers['content-type-options']; 
        var CONTENT_SECURITY_POLICY = res.headers['content-security-policy'];

        // Status code
        var STATUS_CODE = res.statusCode;

        // If headers is undefined equal to "Not exist"
        if (CONTENT_TYPE == undefined){
            CONTENT_TYPE = err_msg;
        } if (SERVER == undefined) {
            SERVER = err_msg;
        } if (DATE_SERVER == undefined){
            DATE = err_msg;
        } if (X_POWERED_BY == undefined){
            X_POWERED_BY = err_msg;
        } if (CONNECTION == undefined){
            CONNECTION = err_msg;
        } if (X_FRAME_OPTIONS == undefined){
            X_FRAME_OPTIONS = err_msg;
        } if (X_XSS_PROTECTION == undefined){
            X_XSS_PROTECTION = err_msg;
        } if (CONTENT_TYPE_OPTIONS == undefined){
            CONTENT_TYPE_OPTIONS = err_msg;
        } if (CONTENT_SECURITY_POLICY == undefined){
            CONTENT_SECURITY_POLICY = err_msg;
        } if (TRANSFER_ENCODING == undefined){
            TRANSFER_ENCODING = err_msg;
        }

        // Print out raw headers
        console.log(raw_headers);

        // Output headers but not raw
        console.log(`\nCONTENT-TYPE: ${CONTENT_TYPE}\nSERVER: ${SERVER}\nDATE SERVER: ${DATE_SERVER}\nX-POWERED-BY: ${X_POWERED_BY}\nCONNECTION: ${CONNECTION}\nTRANSFER ENCODING: ${TRANSFER_ENCODING}\nX-FRAME-OPTIONS: ${X_FRAME_OPTIONS}\nX-XSS-PROTECTION: ${X_XSS_PROTECTION}\nCONTENT-TYPE-OPTIONS: ${CONTENT_TYPE_OPTIONS}\nCONTENT_SECURITY_POLICY: ${CONTENT_SECURITY_POLICY}`);
    })
}