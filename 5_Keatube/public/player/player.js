const url = window.location.href; //window.location.pathname
const link = url.substr(url.lastIndexOf("/") + 1);

if(link === 'nature') {
    $(".videoholder").append(`
        <source src="/Nature.mp4" type="video/mp4">
            Your browser does not support video tag.
    `)
} else {
    $(".videoholder").append(`
        <source src="/Coffee.mp4" type="video/mp4">
            Your browser does not support video tag.
    `)
}