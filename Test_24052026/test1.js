function questionName(input) {
  const statusCode = Number(input);
  let resultMessage;
  switch (statusCode) {
    case 200:
      resultMessage = "PASS - OK: Request successful";
      break;
    case 201:
      resultMessage = "PASS - Created: Resource created successfully";
      break;
    case 301:
      resultMessage = "WARNING - Moved Permanently: URL has changed";
      break;
    case 400:
      resultMessage = "FAIL - Bad Request: Check request payload";
      break;
    case 401:
      resultMessage = "FAIL - Unauthorized: Check auth token";
      break;
    case 403:
      resultMessage = "FAIL - Forbidden: Insufficient permissions";
      break;
    case 404:
      resultMessage = "FAIL - Not Found: Check endpoint URL";
      break;
    case 500:
      resultMessage = "FAIL - Internal Server Error: Backend issue";
      break;
    default:
      resultMessage = "UNKNOWN - Unhandled status code";
  }

  return `Status Code : ${statusCode} Result : ${resultMessage}`;
}

module.exports = { questionName };

if (typeof require !== 'undefined' && require.main === module) {
  console.log(questionName(401));
}