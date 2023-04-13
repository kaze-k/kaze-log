const n=s=>9<Number(s)?s:"0"+s;setInterval(()=>{{var e=Math.round(new Date("03/01/2023 00:00:00").getTime()/1e3);let s=Math.round((new Date).getTime()/1e3)-e,a=(e=new Array("000","00","00","00","00"),31536e3<=s&&(e[0]=s/31536e3,s%=31536e3),86400<=s&&(e[1]=Math.floor(s/86400),s%=86400),3600<=s&&(e[2]=n(Math.floor(s/3600)),s%=3600),60<=s&&(e[3]=n(Math.floor(s/60)),s%=60),0<=s&&(e[4]=n(s)),"");a=Number(e[2])<19&&6<Number(e[2])?`
      <img class='boardsign' src='https://img.shields.io/badge/klog-白天好-6adea8?style=social&logo=Ghostery&logoColor=343a43' title='X_X'>
      <div class='textTip'>
        本站已加载了
        <span id='year'>${e[0]}</span>&nbsp年
        <span id='days'>${e[1]}</span>&nbsp天
        <span id='hour'>${e[2]}</span>&nbsp时
        <span id='minute'>${e[3]}</span>&nbsp分
        <span id='second'>${e[4]}</span>&nbsp秒
        <i class='fas fa-heartbeat' style='color:red'></i>
      </div>`:`
      <img class='boardsign' src='https://img.shields.io/badge/klog-晚上好-6adea8?style=social&logo=Playwright&logoColor=343a43' title='>_<'>
      <div class='textTip'>
        本站已加载了
        <span id='year'>${e[0]}</span>&nbsp年
        <span id='days'>${e[1]}</span>&nbsp天
        <span id='hour'>${e[2]}</span>&nbsp时
        <span id='minute'>${e[3]}</span>&nbsp分
        <span id='second'>${e[4]}</span>&nbsp秒
        <i class='fas fa-heartbeat' style='color:red'></i>
      </div>`,document.getElementById("workboard").innerHTML=a}},1e3);