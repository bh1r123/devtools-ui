import axios from 'axios';

export const loadMessages = (pageNumber, pageElements, handleresponse, handleError) => {
    axios.get("http://localhost:8081/api/v1/messages").then((data) => {
        handleresponse(data);
    }).catch((error) => {
        handleError(error);
    })
}

export const loadMessage = (url, handleresponse, handleError) => {
    console.log(url);
    axios.get(url).then((data) => {
        handleresponse(data);
    }).catch((error) => {
        handleError(error);
    })
}

export const updateMessage = (url, request, handleresponse, handleError) => {

    axios.patch(url, request).then((data) => {
        handleresponse(data)
    }).catch((error) => {
        handleError(error);
    })
}

export const createMessage = (url, request, handleresponse, handleError) => {

    axios.post(url, request).then((data) => {
        handleresponse(data)
    }).catch((error) => {
        handleError(error);
    })
}

export const uploadFile = (url, fileData, handleresponse, handleError) => {
    var bodyFormData = new FormData();
    bodyFormData.append('file', fileData);
    axios({
        method: 'post',
        url: url,
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then((data) => {
        handleresponse(data)
    }).catch((error) => {
        handleError(error);
    })
}