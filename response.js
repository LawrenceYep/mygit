// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body

var header1 = JSON.parse($response.headers);
header1.errorCode = 0;
var obj = JSON.parse($response.body);
obj.errorCode = 0

$done({body:JSON.stringify(obj),headers:JSON.stringify(header1)});

