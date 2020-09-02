const API_URL = `https://w6r0m3k78j.execute-api.us-east-2.amazonaws.com/dev/zoomfit/v1`;

const apiGET = async (token, url, req={}) => {
  const queryUrl = `${process.env.API_URL}${url}`;
  try {
    const response = await fetch(queryUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(req),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(`ERROR while getting from ${queryUrl}`);
    throw error;
  }
}

const apiPOST = async (token, url, req={}) => {
  const queryUrl = `${process.env.API_URL}${url}`;
  console.log(`posting to ${queryUrl}`);
  try {
    const response = await fetch(queryUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(req),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(`ERROR while posting to ${queryUrl}`);
    throw error;
  }
}

const checkUserEmail = async (email) => {
  const url = `${API_URL}/user/login?email=${email}`;
  console.log(`trying to GET ${url}`);
  try {
    const response = await fetch(url);
    const responseData = await response.text();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
    return 'NEW';
  }
}

const createUser = async (name, email, age, interests) => {
  const url = `${API_URL}/user/`;
  const data = {
    name,
    email,
    age,
    interests,
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export {
  apiGET,
  apiPOST,
  checkUserEmail,
  createUser,
};