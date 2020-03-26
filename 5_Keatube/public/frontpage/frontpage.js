$.get("videos?page=1", (response) => {
    response.response.map((video) => {
        $("#video-gallery")
        .append(`<a href="/player/${video.fileName}">${video.title}</a>`)
    })
})

//     <a href="/player/91e8b02b-1e03-4fea-b91b-a5c8410da0bc.mp4">Watch the video</a>
