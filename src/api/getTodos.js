function getTodos() {
    const spreadId = '1ZTf5ufmf6Z4VdAPDWKSFuLabL-_0P05OaUum1s-sZgc';
    const apiKey = 'AIzaSyAXPlYKTwzQZ9ufNfuRo5pLz852TSCUUCU';
    return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadId}/values/todoAPI/?key=${apiKey}`)
      .then(response => response.json())
      .then(data => data.values.map(d => {
        return ({
          id: d[0],
          title: d[1],
          message: d[2],
          deadline: d[3]
        });
      }));
  };
  
  export default getTodos;