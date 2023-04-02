const nol=function(s){return 9<s?s:"0"+s};function createTime(){var s=Math.round(new Date("03/01/2023 00:00:00").getTime()/1e3);let a=Math.round((new Date).getTime()/1e3)-s,e=0,n=0,o=0,i=0,t=0,l=(0===e&&(e="0"+e),31536e3<=a&&(e=a/31536e3,a%=31536e3),86400<=a&&(n=Math.floor(a/86400),a%=86400),3600<=a&&(o=nol(Math.floor(a/3600)),a%=3600),60<=a&&(i=nol(Math.round(a/60)),a%=60),0<=a&&(t=nol(a)),"");l=Number(o)<20&&6<Number(o)?`
      <img class='boardsign' src='https://img.shields.io/badge/klog-白天好-6adea8?style=social&logo=Ghostery&logoColor=343a43' title='X_X'>
      <div class='textTip'>
        本站已加载了
        <span id='year'>${e}</span>&nbsp年
        <span id='days'>${n}</span>&nbsp天
        <span id='hour'>${o}</span>&nbsp时
        <span id='minute'>${i}</span>&nbsp分
        <span id='second'>${t}</span>&nbsp秒
        <i class='fas fa-heartbeat' style='color:red'></i>
      </div>`:`
      <img class='boardsign' src='https://img.shields.io/badge/klog-晚上好-6adea8?style=social&logo=YouTube Gaming&logoColor=343a43' title='>_<'>
      <div class='textTip'>
        本站已加载了
        <span id='year'>${e}</span>&nbsp年
        <span id='days'>${n}</span>&nbsp天
        <span id='hour'>${o}</span>&nbsp时
        <span id='minute'>${i}</span>&nbsp分
        <span id='second'>${t}</span>&nbsp秒
        <i class='fas fa-heartbeat' style='color:red'></i>
      </div>`,document.getElementById("workboard").innerHTML=l}setInterval(()=>{createTime()},1e3);