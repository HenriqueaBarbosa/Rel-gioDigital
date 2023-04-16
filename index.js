const showTime = () => {
    date = new Date();
    h = date.getHours(); h = h < 10 ? `0${h}` : h;
    m = date.getMinutes(); m = m < 10 ? `0${m}` : m;
    s = date.getSeconds(); s = s < 10 ? `0${s}` : s;
  
    time = h + ':' + m + ':' + s;
  
    document.getElementById('meuRelogio').innerText = time;
    setTimeout(showTime, 1000);
  
  }
  
  showTime();