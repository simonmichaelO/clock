setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation',rotationRatio * 360)
}

setClock()




function updateClock() {
        var now = new Date();
        var dname = now.getDay(),
          no = now.getMonth(),
          dnum = now.getDate(),
          yr = now.getFullYear(),
          hou = now.getHours(),
          min = now.getMinutes(),
          sec = now.getSeconds(),
          pe = "AM";

        if (hou == 0) {
          hou = 12;
        }
        if (hou > 12) {
          hou = hou - 12;
          pe = "PM";
        }

        Number.prototype.pad = function (digits) {
          for (var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        };

        var months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        var week = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        var ids = [
          "dayname",
          "month",
          "daynum",
          "year",
          "hour",
          "minutes",
          "seconds",
          "period",
        ];
        var values = [
          week[dname],
          months[no],
          dnum.pad(2),
          yr,
          hou.pad(2),
          min.pad(2),
          sec.pad(2),
          pe,
        ];
        for (var i = 0; i < ids.length; i++)
          document.getElementById(ids[i]).firstChild.nodeValue = values[i];
      }

      function initClock() {
        updateClock();
        window.setInterval("updateClock()", 1);
      }