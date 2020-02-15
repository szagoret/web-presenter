const sendKeyEvent = (key) => axios.get(`/key/${key}`)
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

$('.action-buttons button').click(function () {
    sendKeyEvent($(this).attr('name'));
});