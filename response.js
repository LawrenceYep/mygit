// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body

var headers = $response.headers;
console.log(JSON.stringify(headers));
var body = $response.body;

headers['errorCode'] = 0;



body = {
	"errorCode": 0,
	"result": {
		"service": {
			"title": "MapleStory M Global",
			"buildVer": "2",
			"policyApiVer": "2",
			"termsApiVer": "2",
			"useTPA": 0,
			"loginUIType": "1",
			"clientId": "MTY3MDg3NDAy",
			"useMemberships": [101, 103, 102, 9999],
			"useMembershipsInfo": {
				"nexonNetSecretKey": "",
				"nexonNetProductId": "",
				"nexonNetRedirectUri": ""
			}
		},
		"endBanner": {},
		"basePlate": [],
		"country": "CN",
		"termsAgree": [],
		"isPrivacyConsigned": -1,
		"useLocalPolicy": ["0", "0"],
		"enableLogging": false,
		"offerwall": {
			"id": 0,
			"title": ""
		}
	},
	"errorText": "1",
	"errorDetail": ""
};
body = JSON.stringify(body);
$done(headers);
$done(body);

