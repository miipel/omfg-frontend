export const sendData = async data => {
  const userData = {
    userId: "ASDSF",
    data: {
      timeStamp: new Date(),
      accuracy: data.accuracy,
      averageReactionTime: data.averageReactionTime,
      memoryTestGrade: data.memoryTestGrade,
      diaryEntry: data.diaryEntry,
    },
  }
  return await fetch("https://riski.business/benchmark", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
}

export const getUserData = async (time_from, time_to, user_id, interval) => {
  return await fetch(
    "https://riski.business/processed?time_from=" +
      time_from +
      "&time_to=" +
      time_to +
      "&user_id=" +
      user_id +
      "&interval=" +
      interval,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }
  )
}
