function timeFormat(seconds) {
    var time = '';
    if (seconds >= 86400) {
        time = 'long days';
    } else if (seconds < 86400) {
            var h = seconds / 3600;
            var rest = seconds % 3600;
            min = rest / 60;
            sec = rest % 60;
            time = h.toFixed(0) + ' h '+ min.toFixed(0) + ' min ' + sec + 's /n';
        } else if (seconds <3600) {
                var min = seconds / 60;
                var sec = seconds % 60;
                time = min.toFixed(0) + ' min ' + sec + 's /n';
            } else time = seconds;
    return time;        
}

exports.printTime = timeFormat;
