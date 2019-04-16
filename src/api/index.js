export const sendData = async data => {
  const userData = {
    userId: "ASDSF",
    data: {
      timeStamp: new Date(),
      accuracy: data.accuracy,
      averageReactionTime: data.averageReactionTime,
      memoryTestGrade: data.memoryTestGrade,
      diaryEntry: data.diaryEntry,
    }
  }
  console.log(userData)
  return await fetch("https://riski.business/benchmark", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
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
