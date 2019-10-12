// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body

var headers = $response.headers;

headers['errorCode']=0;

headers = JSON.stringify(headers);
$done(headers)


