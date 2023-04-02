const nol=function(s){return 9<s?s:"0"+s};function createTime(){var s=Math.round(new Date("03/01/2023 00:00:00").getTime()/1e3);let a=Math.round((new Date).getTime()/1e3)-s;s=new Array(0,0,0,0,0);0===s[0]&&(s[0]="0"+s[0]),31536e3<=a&&(s[0]=a/31536e3,a%=31536e3),86400<=a&&(s[1]=Math.floor(a/86400),a%=86400),3600<=a&&(s[2]=nol(Math.floor(a/3600)),a%=3600),60<=a&&(s[3]=nol(Math.round(a/60)),a%=60),0<=a&&(s[4]=nol(a));let e="";e=Number(s[2])<20&&6<Number(s[2])?`
      <img class='boardsign' src='https://img.shields.io/badge/klog-白天好-6adea8?style=social&logo=Ghostery&logoColor=343a43' title='X_X'>
      <div class='textTip'>
        本站已加载了
        <span id='year'>${s[0]}</span>&nbsp年
        <span id='days'>${s[1]}</span>&nbsp天
        <span id='hour'>${s[2]}</span>&nbsp时
        <span id='minute'>${s[3]}</span>&nbsp分
        <span id='second'>${s[4]}</span>&nbsp秒
        <i class='fas fa-heartbeat' style='color:red'></i>
      </div>`:`
      <img class='boardsign' src='https://img.shields.io/badge/klog-晚上好-6adea8?style=social&logo=Playwright&logoColor=343a43' title='>_<'>
      <div class='textTip'>
        本站已加载了
        <span id='year'>${s[0]}</span>&nbsp年
        <span id='days'>${s[1]}</span>&nbsp天
        <span id='hour'>${s[2]}</span>&nbsp时
        <span id='minute'>${s[3]}</span>&nbsp分
        <span id='second'>${s[4]}</span>&nbsp秒
        <i class='fas fa-heartbeat' style='color:red'></i>
      </div>`,document.getElementById("workboard").innerHTML=e}setInterval(()=>{createTime()},1e3);