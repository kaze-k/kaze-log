// 格式规范化，个位数前面加0
const nol = (h) => {
  return Number(h) > 9 ? h : '0' + h;
};

function createTime() {
  let create_time = Math.round(new Date('03/01/2023 00:00:00').getTime() / 1000); //在此行修改建站时间
  let timestamp = Math.round(new Date().getTime() / 1000);
  let second = timestamp - create_time;
  let time = new Array('000', '00', '00', '00', '00');
  if (second >= 365 * 24 * 3600) {
    time[0] = second / (365 * 24 * 3600);
    second %= 365 * 24 * 3600;
  } // 年
  if (second >= 24 * 3600) {
    time[1] = Math.floor(second / (24 * 3600));
    second %= 24 * 3600;
  } // 天
  if (second >= 3600) {
    time[2] = nol(Math.floor(second / 3600));
    second %= 3600;
  } // 时
  if (second >= 60) {
    time[3] = nol(Math.floor(second / 60));
    second %= 60;
  } // 分
  if (second >= 0) {
    time[4] = nol(second);
  } // 秒

  let currentTimeHtml = '';
  // 白天
  if (Number(time[2]) < 19 && Number(time[2]) > 6) {
    currentTimeHtml = `
      <img class='boardsign' src='https://img.shields.io/badge/klog-白天好-6adea8?style=social&logo=Ghostery&logoColor=343a43' title='X_X'>
      <div class='textTip'>
        本站已加载了
        <span id='year'>${time[0]}</span>&nbsp年
        <span id='days'>${time[1]}</span>&nbsp天
        <span id='hour'>${time[2]}</span>&nbsp时
        <span id='minute'>${time[3]}</span>&nbsp分
        <span id='second'>${time[4]}</span>&nbsp秒
        <i class='fas fa-heartbeat' style='color:red'></i>
      </div>`;
  }
  // 晚上
  else {
    currentTimeHtml = `
      <img class='boardsign' src='https://img.shields.io/badge/klog-晚上好-6adea8?style=social&logo=Playwright&logoColor=343a43' title='>_<'>
      <div class='textTip'>
        本站已加载了
        <span id='year'>${time[0]}</span>&nbsp年
        <span id='days'>${time[1]}</span>&nbsp天
        <span id='hour'>${time[2]}</span>&nbsp时
        <span id='minute'>${time[3]}</span>&nbsp分
        <span id='second'>${time[4]}</span>&nbsp秒
        <i class='fas fa-heartbeat' style='color:red'></i>
      </div>`;
  }
  //覆写挂载标签的内容
  document.getElementById('workboard').innerHTML = currentTimeHtml;
}

setInterval(() => {
  createTime();
}, 1000);
