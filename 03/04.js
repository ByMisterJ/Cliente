function cambiarVideo() {
    // Obtén el elemento de video y su fuente
    var video = document.getElementById("myVideo");
    var source = document.getElementById("videoSource");

    // Cambia la fuente del video
    if (source.src.endsWith('video1.mp4')) {
        source.src = "video2.mp4";
    } else source.src = 'video1.mp4';

    // Recarga el video para que se apliquen los cambios
    video.load();
}