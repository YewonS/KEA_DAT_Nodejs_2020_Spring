const url = window.location.href //window.location.pathname
const link = url.substr(url.lastIndexOf("/") + 1)
const title = ""

$.get(`../video/${link}`)
    .done((response) => {
        $('#video-title').text(response.response.title)
        
        const  player = `<video id="player" class="videoholder" width="320" height="240" controls>
                            <source src="/${link}" type="video/mp4">
                                Your browser does not support video tag.
                        </video>`
        
        $("#player-wrapper").append(player)
    
        $("#video-description").text(response.response.description)
    })
    .catch((error) => {
        console.log(error)
        $("#video-title").text("Could not find the video")
    })

