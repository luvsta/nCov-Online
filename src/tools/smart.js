/**
 * 动画垂直滚动到页面指定位置
 * @param { Number } currentY 当前位置
 * @param { Number } targetY 目标位置
 */
function scrollAnimation(currentY, targetY) {
    // 获取当前位置方法
    // const currentY = document.documentElement.scrollTop || document.body.scrollTop

    // 计算需要移动的距离
    let needScrollTop = targetY - currentY
    let _currentY = currentY
    setTimeout(() => {
        // 一次调用滑动帧数，每次调用会不一样
        const dist = Math.ceil(needScrollTop / 10)
        _currentY += dist
        window.scrollTo(_currentY, currentY)
        // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
        if (needScrollTop > 10 || needScrollTop < -10) {
            scrollAnimation(_currentY, targetY)
        } else {
            window.scrollTo(_currentY, targetY)
        }
    }, 1)
}

// 优化后的非线性动画
function slideTo(targetPageY) {
    var timer = setInterval(function () {
        var currentY = document.documentElement.scrollTop || document.body.scrollTop;//当前及滑动中任意时刻位置
        var distance = targetPageY > currentY ? targetPageY - currentY : currentY - targetPageY;//剩余距离
        var speed = Math.ceil(distance / 10);//每时刻速度
        if (currentY == targetPageY) {
            clearInterval(timer);
        } else {
            window.scrollTo(0, targetPageY > currentY ? currentY + speed : currentY - speed);
        }
    }, 10);
}

// 监测浏览器环境
function getOsInfo() {
    var userAgent = navigator.userAgent.toLowerCase();
    var name = 'Unknown';
    var version = 'Unknown';
    if (userAgent.indexOf('win') > -1) {
        name = 'Windows';
        if (userAgent.indexOf('windows nt 5.0') > -1) {
            version = 'Windows 2000';
        } else if (userAgent.indexOf('windows nt 5.1') > -1 || userAgent.indexOf('windows nt 5.2') > -1) {
            version = 'Windows XP';
        } else if (userAgent.indexOf('windows nt 6.0') > -1) {
            version = 'Windows Vista';
        } else if (userAgent.indexOf('windows nt 6.1') > -1 || userAgent.indexOf('windows 7') > -1) {
            version = 'Windows 7';
        } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows 8') > -1) {
            version = 'Windows 8';
        } else if (userAgent.indexOf('windows nt 6.3') > -1) {
            version = 'Windows 8.1';
        } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows nt 10.0') > -1) {
            version = 'Windows 10';
        } else {
            version = 'Unknown';
        }
    } else if (userAgent.indexOf('iphone') > -1) {
        name = 'Iphone';
    } else if (userAgent.indexOf('mac') > -1) {
        name = 'Mac';
    } else if (userAgent.indexOf('x11') > -1 || userAgent.indexOf('unix') > -1 || userAgent.indexOf('sunname') > -1 || userAgent.indexOf('bsd') > -1) {
        name = 'Unix';
    } else if (userAgent.indexOf('linux') > -1) {
        if (userAgent.indexOf('android') > -1) {
            name = 'Android';
        } else {
            name = 'Linux';
        }
    } else {
        name = 'Unknown';
    }
    return { name, version };
}


// 监测电脑设备
function judgeOS() {
    if (navigator.platform.match(/Win|Linux|MAC/i)) {
        alert('请使用移动设备访问!');
        return true;
    } else {
        return false;
    }
}

module.exports = {
    scrollAnimation,
    slideTo,
    getOsInfo,
    judgeOS
}
