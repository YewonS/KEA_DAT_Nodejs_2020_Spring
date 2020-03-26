const router = require("express").Router()

const  crypto = require("crypto")
// const uuid = require("uuid").v4

crypto.randomBytes(30).toString("hex")

const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/")
    },
    filename: (req, file, cb) => {
        const filename = crypto.randomBytes(20).toString("hex")
        const mimetypeArray = file.mimetype.split("/")
        if(mimetypeArray[0] === "video") {
            const extension = "." + mimetypeArray.pop()
            cb(null, filename + extension)
        } else {
            cb("Not a video error. Mimetype: " + file.mimetype)
        }    
    }
})
const upload = multer({ dest: 'videos/', storage: storage })


// what data should be inside of each video object
const videos = [{
    id: 0,
    title: "Ocean Waves",
    description: "Watch the waves",
    fileName: "91e8b02b-1e03-4fea-b91b-a5c8410da0bc.mp4",
    thumbnail: "",
    category: "Nature",
    tags: ["waves", "ocean", "coast"],
    uploadDate: new Date(2020, 3, 26, 08, 43)
}]

const videosPerPage = 10

router.get("/videos", (req, res) => {
    const page = Number(req.query.page) ? Number(req.query.page) : 1
    const start = (page-1) * videosPerPage
    const end = start + videosPerPage
    // page 1 0, 10
    // page 2 10, 20 and so on
    return res.send({ response: videos.slice(start, end) })
})

router.get("/video/:videoId", (req, res) => {
    return res.send({response: videos.find(video => video.fileName === req.params.videoId)})
})

router.post("/videos", upload.single('video'), (req, res, next) => {
    console.log(req.file)
    return res.redirect("/")
})


module.exports = router