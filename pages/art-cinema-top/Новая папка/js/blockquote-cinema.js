const quotes = [
    { 
        "quote" : "Моя мама всегда говорила: «Жизнь как коробка шоколадных конфет: никогда не знаешь, какая начинка тебе попадётся».", 
        "source" : "Форрест Гамп" 
    },
    {
        "quote" : "Хьюстон, у нас проблема.", 
        "source" : "Аполлон 13"
    },
    {
        "quote" : "Украл, выпил — в тюрьму. Украл, выпил — в тюрьму. Романтика.", 
        "source" : "Джентльмены удачи"
    },
    {
        "quote" : "Наверное, вы еще не готовы к такой музыке, но вашим детям она понравится.", 
        "source" : "Назад в будущее"
    },
    {
        "quote" : "Zed is dead, baby, Zed is dead.", 
        "source" : "Криминальное чтиво"
    },
    {
        "quote" : "Я тебя поцелую, потом, если захочешь.", 
        "source" : "Здравствуйте, я ваша тетя!"
    },
    {
        "quote" : "Я три дня гналась за вами, чтобы сказать, как вы мне безразличны.", 
        "source" : "Обыкновенное чудо"
    },
    {
        "quote" : "У них же, мать их, пушки, а в них же, мать их, пули.", 
        "source" : "Карты, деньги, два ствола"
    },
    {
        "quote" : "Сдаётся мне, джентльмены, это была комедия.", 
        "source" : "Человек с бульвара Капуцинов"
    },
    {
        "quote" : "Любовь — это когда не нужно просить прощения", 
        "source" : "История Любви."
    },
    {
        "quote" : "То, из чего сделаны мечты.", 
        "source" : "Мальтийский сокол"
    },
    
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}
randomQuote();