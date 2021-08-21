export default {
  "pages": [
    'pages/home/index',
    'pages/nextDayClassify/index',
  ],
  "window": {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'taro',
    navigationBarTextStyle: 'black'
  },
  "tabBar": {
    "color": "#000000",
    "backgroundColor": "#fafafa",
    "selectedColor": "#FA080A",
    "borderStyle": "white",
    "list": [
      {
        "pagePath": "pages/home/index",
        "text": "首页",
        "iconPath": "static/tabs/bar_home.png",
        "selectedIconPath": "static/tabs/bar_home_selected.png"
      },
      {
        "name": "次日达",
        "pagePath": "pages/nextDayClassify/index",
        "icon": "static/tabs/next_day.png",
        "activeIcon": "static/tabs/next_day_selected.png"
      }
    ]
  },
  "networkTimeout": {
    "request": 60000
  }
}
