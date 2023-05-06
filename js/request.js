class Service {
  constructor(config) {
    this.config = config;
  }

  request(url, data) {
    const api = this.config.baseURL + url;
    const keys = Object.keys(data);
    const values = Object.values(data);
    const headerKeys = Object.keys(this.config.headers);
    const headerValues = Object.values(this.config.headers);

    let args = '';
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        args += `${keys[i]}=${values[i]}`;
      } else {
        args += `${keys[i]}=${values[i]}&`;
      }
    }

    let headerID = '';
    for (let i = 0; i < headerKeys.length; i++) {
      if (i === headerKeys.length - 1) {
        headerID += `${headerKeys[i]}=${headerValues[i]}`;
      } else {
        headerID += `${headerKeys[i]}=${headerValues[i]}&`;
      }
    }

    return `${api}?${args}&${headerID}`;
  }
}

const service = new Service({
  baseURL: 'https://www.coderutil.com',
  headers: {
    'access-key': '1c64f399a148745e6f9e0df9c4a24ee2',
    'secret-key': 'de14e8189aea8a98f3d5e8d48056a183',
  },
});

const handlerData = (data) => {
  const message_wrapper = document.querySelector('#message-wrapper');
  let message_items = [];
  for (let i = 0; i < data.length; i++) {
    const hotValue = data[i].hotValue === null ? '' : data[i].hotValue;
    const isBoil = data[i].isBoil ? '沸' : '';
    const isHot = data[i].isHot ? '热' : '';
    const isNew = data[i].isNew ? '新' : '';
    const keyword = data[i].keyword;
    const rank = data[i].rank;
    const summary = data[i].summary ? data[i].summary : '';
    const type = data[i].type ? data[i].type : '';
    const url = data[i].url;

    let msg_item = {};

    msg_item.item = document.createElement('div');
    msg_item.item.setAttribute('class', 'swiper-slide');
    msg_item.item.setAttribute('id', 'message-item');

    msg_item.hotValue = document.createElement('span');
    msg_item.hotValue.setAttribute('id', 'msg-hotValue');
    msg_item.hotValue.innerHTML = hotValue;
    msg_item.hotValue.innerHTML === '' ? null : msg_item.hotValue.setAttribute('style', 'margin-right: 5px');

    msg_item.tags = document.createElement('span');
    msg_item.tags.setAttribute('id', 'msg-tags');
    msg_item.tags.innerHTML = isBoil + isHot + isNew;
    msg_item.tags.innerHTML === '' ? null : msg_item.tags.setAttribute('style', 'margin-right: 3px');

    msg_item.keyword = document.createElement('span');
    msg_item.keyword.setAttribute('id', 'msg-keyword');
    msg_item.keyword.innerHTML = keyword;

    msg_item.rank = document.createElement('span');
    msg_item.rank.setAttribute('id', 'msg-rank');
    msg_item.rank.innerHTML = rank;

    msg_item.summary = document.createElement('span');
    msg_item.summary.setAttribute('id', 'msg-summary');
    msg_item.summary.innerHTML = summary;

    msg_item.type = document.createElement('span');
    msg_item.type.setAttribute('id', 'msg-type');
    msg_item.type.innerHTML = type;
    msg_item.type.innerHTML === '' ? null : msg_item.type.setAttribute('style', 'margin-right: 5px');

    msg_item.url = document.createElement('a');
    msg_item.url.setAttribute('id', 'msg-url');
    msg_item.url.setAttribute('target', '_blank');
    msg_item.url.href = url;

    message_items[i] = msg_item;
  }

  for (let i = 0; i < message_items.length; i++) {
    message_wrapper.appendChild(message_items[i].item);
    message_items[i].item.appendChild(message_items[i].url);
    message_items[i].url.appendChild(message_items[i].rank);
    message_items[i].url.appendChild(message_items[i].type);
    message_items[i].url.appendChild(message_items[i].keyword);
    message_items[i].url.appendChild(message_items[i].tags);
    message_items[i].url.appendChild(message_items[i].hotValue);
    message_items[i].url.appendChild(message_items[i].summary);
  }

  var msg_swiper = new Swiper('#message-container', {
    direction: 'vertical',
    passiveListeners: true,
    spaceBetween: 0,
    effect: 'slide',
    loop: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
    },
    mousewheel: true,
  });
  msg_swiper.el.onmouseenter = function () {
    msg_swiper.autoplay.stop();
  };
  msg_swiper.el.onmouseleave = function () {
    msg_swiper.autoplay.start();
  };
};

const handlerError = (xhr, statusText) => {
  console.log(`请求失败! 状态码: ${xhr.status}, 失败原因: ${statusText}`);
};

document.addEventListener('DOMContentLoaded', () => {
  $.ajax({
    url: service.request('/api/resou/v1/weibo.jsonp', { size: 40 }),
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'callback',
    success: handlerData,
    error: handlerError,
  });
});
