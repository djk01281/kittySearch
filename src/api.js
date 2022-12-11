const API_ENDPOINT =
  "https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: keyword => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then(res =>
      res.json()
    );
  },
  fetchID: ID => {
    return fetch(`${API_ENDPOINT}/api/cats/${ID}`).then(res =>
      res.json()
      )
  }
};
