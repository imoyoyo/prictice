var topic = [
    "殺戮の天使-Pray",
    "フェアリーテイル-明日を鳴らせ",
    "打ち上げ花火、下から見るか？横から見るか？-打上花火",
    "進撃の巨人-紅蓮の弓矢",
    "化物語-恋愛サーキュレーション",
    "クズの本懐-嘘の火花"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(8,27);