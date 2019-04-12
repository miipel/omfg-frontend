export const sendData = async data => {
  console.log(data)
  return await fetch("http://localhost:3001/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
}

export const getUserData = async (time_from, time_to, user_id, interval) => {
  return await fetch('https://riski.business/processed?time_from=' + time_from + '&time_to=' + time_to + '&user_id=' + user_id + '&interval=10', {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify()
  })
}
