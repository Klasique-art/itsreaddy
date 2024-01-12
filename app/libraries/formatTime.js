const formatTime = (time) => {
    const date = new Date(time)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const formattedTime = `${day}/${month}/${year} - ${hours}:${minutes}`
    return formattedTime
}

export default formatTime