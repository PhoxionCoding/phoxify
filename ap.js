let pop_song_left = document.getElementById('pop_songs_left');
let pop_song_right = document.getElementById('pop_songs_right');
let pop_song = document.getElementsByClassName('amapiano_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})