import Cookies from "js-cookie";

export const baseUrl = process.env.REACT_APP_SERVER_API;

export const postRequest = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  
  if(!response.ok) {
    let message = "Ocorreu um erro...";
    if(data?.message) {
      message = data.message;
    }
 
    return { error: true, message };
  }

  return data;
};

export const getRequest = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`
    }
  });

  const data = await response.json();

  if(!response.ok) {
    let message = "Ocorreu um erro...";
    if(data?.message) {
      message = data.message;
    }

    return { error: true, message };
  }

  return data;
};

export const putRequest = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get('token')}`
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  if(!response.ok) {
    let message = "Ocorreu um erro...";
    if(data?.message) {
      message = data.message;
    }

    return { error: true, message };
  }

  return data;
};