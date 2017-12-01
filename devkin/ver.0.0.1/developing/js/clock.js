let i = 0,
    curSec = new Date().getSeconds(),
    curMsec = parseInt((60 - curSec).toString()+'000');

    console.log(curMsec);

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",60000);
}

setTimeout(timedCount(), curMsec);