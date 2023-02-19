const socket = io('/')
const videoGrid = document.getElementById('video-grid');
const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
})
const myVideo = document.createElement('video')
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    addVideoStream(myVideo, stream)
})

function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    if (videoGrid)
    {
        this.videoGrid.append(video)
    }
    videoGrid.append(video)
}

myPeer.on('open', id => {
    socket.emit('join', ROOM_ID, id)
})

socket.on('user-joined', userId => {
    console.log('User connected: ' + userId)
});