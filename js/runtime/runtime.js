var now=new Date;function createtime(){now.setTime(now.getTime()+1e3);var e=new Date("06/015/2021 00:00:00"),e=Math.trunc(234e8+(now-e)/1e3*17),t=(e/1496e5).toFixed(6),a=new Date("08/09/2022 00:00:00"),n=Math.floor((now-a)/1e3/60/60/24),o=Math.floor((now-a)/1e3/60/60-24*n),s=(1==String(o).length&&(o="0"+o),(now-a)/1e3/60-1440*n-60*o),s=Math.floor(s),a=(1==String(s).length&&(s="0"+s),(now-a)/1e3-86400*n-3600*o-60*s),a=Math.round(a),n=(1==String(a).length&&(a="0"+a),o<18&&9<=o?`<img class='boardsign' src='https://img.shields.io/badge/夜间酒馆-卖酒了-6adea8?style=social&logo=CodeIgniter' title='距离月入25k也就还差一个大佬带我~'>
		<span class='textTip'> 
            <br> 
            <b>本站居然运行了 ${n} 天 
                <span id='runtime'> ${o} 小时 ${s} 分 ${a} 秒 </span>
		</b>
		</span>
		<i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i>
		<br>
		<b>旅行者 1 号当前距离地球 ${e} 千米，约为 ${t} 个天文单位 🚀</b>
		<br>
		<b>
            <font size=2px>再看看那个光点，它就在这里，这是家园，这是我们 ——— 你所爱的每一个人，你认识的一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨</font>
        </b> `:`
		<img class='boardsign' src='https://img.shields.io/badge/夜间酒馆-打烊休息啦-6adea8?style=social&logo=CodeIgniter' title='下班了就该开开心心的玩耍，嘿嘿~'>
		<span class='textTip'> 
            <br> 
            <b>本站居然运行了 ${n} 天</b>
        </span>
		<span id='runtime'> ${o} 小时 ${s} 分 ${a} 秒 </span>
		<i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i>
		<br>
		<b>旅行者 1 号当前距离地球 ${e} 千米，约为 ${t} 个天文单位 🚀</b>
		<br>
		<b>
            <font size=2px>再看看那个光点，它就在这里，这是家园，这是我们 ——— 你所爱的每一个人，你认识的一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨</font>
        </b>`);document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=n)}setInterval(()=>{createtime()},1e3);