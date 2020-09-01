const apiGET = async (token, url, req={}) => {
  const queryUrl = `${process.env.API_URL}${url}`;
  console.log(`getting from ${queryUrl}`);
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

export {
  apiGET,
  apiPOST,
};