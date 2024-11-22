var http = require('http');
var port = process.env.PORT || 1337;

const key = require('cryptolens').Key;
const Helpers = require('cryptolens').Helpers;

var RSAPubKey = "<RSAKeyValue><Modulus>m6yxvHR/zUktWn7QLAWDl+7Ej0MuGWxyiaPlJo7WfL/fVLw1VRrhc9S7UTpU9UVnFJ8rIRawLjD5CTih6d8aLD3jxQ9vJh9Gs66GDltRlB5p9IZuZM3Y3sMSU3HZ2T5IsbwGxqI9wDKJQOzaQznDPklLlYXaTVN2LqeGzqaCuCsOpP2FCmgLFlszWg4WYdmIiVc4ow+QfAOG6RbhRKI2fa5G6+D+qJW43ApqAYdz+p5RsqpGVchdtYP1eGDOHIFrDkp9zeyreG7QpAahMJiy9aALmrO8ey9TVlVbZxU6oFM1KIANJmbqAeIQb7ys6jT0oQR5KKedd34yuE++Fn+RAQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>";

http.createServer(function (req, res) {
    key.Activate(
        token = "WyI5ODI5ODc2NSIsIkRWZGpRZFMzcTFjWC9Ma1JBRGpWRDhOWTQ4dVVPMERhd1hnbWRPK1AiXQ==",
        RSAPubKey,
        ProductId = 26743,
        Key = "MNGUR-HNBQK-YHUWU-MFQHN",
        MachineCode = Helpers.GetMachineCode()
    ).then(function (license) {
        // success, send the license information in the response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>License Activation Successful</h1>
            <p>License Created: ${license.Created}</p>
            <p>License Expires: ${license.Expires}</p>
        `);
    }).catch(function (error) {
        // in case of an error, send the error message in the response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Error</h1>
            <p>${error.message}</p>
        `);
    });
}).listen(port);
