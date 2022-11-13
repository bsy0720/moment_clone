const quotes = [
  {
    quote: "세월을 헛되이 보내지 마라, 청춘은 다시 돌아오지 않는다",
    authour: "안중근 의사",
  },
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
    authour: "나폴레옹",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. ",
    authour: "괴테",
  },
  {
    quote:
      "大切な事を悟る場所は何時もパソコンの前ではなくて青い空の下でした.",
    authour: "高橋あゆみ",
  },
  {
    quote: "できると思えばできる、(できないと思えばできない。) これはゆるぎない絶対的な法則である。",
    authour: "ピカソ",
  },
  {
    quote: "己の限界は、己のあきらめ心が決めてしまうものである。あきらめない限り、そこに限界はない",
    authour: "孫正義",
  },
  {
    quote: "They must often change who would be constant in happiness or wisdom.",
    authour: "Confucius",
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    authour: "Maya Angelou",
  },
  {
    quote: "This too shall pass.",
    authour: "Et hoc transibit",
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    authour: "Carol Burnett",
  },
]

const quote = document.querySelector("#quote p:first-child");
const authour = document.querySelector("#quote p:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
authour.innerText = `- ${todayQuote.authour} -`;