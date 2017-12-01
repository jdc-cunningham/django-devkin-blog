let i = 0,
    curSec = new Date().getSeconds(),
    curMsec = parseInt((60 - curSec).toString()+'000');

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",5000);
}

setTimeout(timedCount(), curMsec);