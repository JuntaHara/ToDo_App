function postTodo(todoDraft, length) {
  const requestBody = {
    "requests": [
      {
        "updateCells": {
          "range": {
              "sheetId": 0,
              "startRowIndex": length,
              "endRowIndex": length + 1,
              "startColumnIndex": 0,
              "endColumnIndex": 4
          },
          "rows": [
              {
                "values": [
                  { "userEnteredValue": { "stringValue": `${length + 1}`} },
                  { "userEnteredValue": { "stringValue": `${todoDraft.title}`} },
                  { "userEnteredValue": { "stringValue": `${todoDraft.message}`} },
                  { "userEnteredValue": { "stringValue": `${todoDraft.deadline}`} },
              ],
            },
          ],
          "fields": "userEnteredValue"
        }
      }
    ]
  };

  const spreadId = '1ZTf5ufmf6Z4VdAPDWKSFuLabL-_0P05OaUum1s-sZgc';
  const ACCESS_TOKEN = 'ya29.a0AVA9y1u_M7NmX12XcFqs22rH3mI6aGiXZDxkDONha8xm9xJ6n9-cvEwYBLEjXDzdsweWDCoeL2T7J5YYujSnf6uGrQ5E8W_wmVKB0OOGW6YvmvYXBixU5O4rXT2GnLPDM7oTFwPI7cZTYFuS2NKByG94f0-8';
  const results = fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadId}:batchUpdate`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(requestBody),
  })
  .then(response => {
    if(response.ok) {
      response.json();
    } else {
      results.reject();
    }
  })
  .catch((error) => {
    results.reject(error);
  });
  return results;
};

export default postTodo;
