// albumPopup.js

// Глобальный объект с фактами для альбомов.
// Ключ – уникальный идентификатор альбома (например, имя альбома без пробелов),
// значение – объект с полями text (текст фактов) и (опционально) img (URL изображения или массив URL).
let albumFacts = {
  "Контроль": {
    text: `Выпущен 5 марта 2021 г. <br> Вот и самый заслушанный альбом по данным из ВК Музыки!<br> Цитата Локи: «От первого и до последнего трека альбома я держу слушателя за шиворот и обсуждаю с ним темы, о которых люди обычно не хотят задумываться.» (<a href="https://genius.com/albums/Loqiemean/Control" target="_blank" style="color: #4fc3f7;">Источник</a>) <br>До сих пор забавляет тот факт, что в слове «тщеславен» (на обложке альбома) ошибка. <br>Отмеченные мной треки: Одинокий каннибал, Хоровод, Но, Олонхо, Фауст, Озоновый слой. И абсолютный фаворитом является Удочка для охоты. Это, к слову, одна из моих самых любимых песен Локимина вообще.`,
    img: [] 
  },
  "Чёрная_метка": {
    text: `Выпущен 13 ноября 2020 г.<br>Мужик, вставай… У тебя метки не черные, а зеленые…<br>Фаворит – Прорубь, которым и вдохновлен мой арт. А еще всем сердцем люблю Вудпекер.`,
    img: ["./обложки/прорубь.PNG"]
  },
  "Зверь_без_нации": {
    text: `Выпущен 30 марта 2017 г.<br>Перед вами – дебютный альбом Loqiemean, известного ранее исключительно в роли саундпродюсера. (<a href="https://genius.com/albums/Loqiemean/Beast-of-no-nation" target="_blank" style="color: #4fc3f7;">Источник</a>)<br>Согласно тому же genius, Зверь без нации (или же Beast of No Nation) «авангардный и шероховатый, спешащий сбивчиво высказать все, что накопилось за годы обдумывания реальности». Нельзя не согласиться.<br>Здесь моим абсолютным фаворитом является Грязное окно!<br>Еще отмечены: На боль, Запад/Восток, Пёс, На русском, Ёк ёк, На фоксе, Латина и Зверь без нации/Одной крови`,
    img: []
  },
  "Сожги_Этот_Альбом": {
    text: `Выпущен 15 февраля 2019 г.<br>Именно с этого альбома начала слушать Локимина, поэтому все треки тут любимые-прелюбимые, СЭА заслушан до дыр. Очень много воспоминаний связано со всеми этими песнями, всех не перечислить.<br>Как бы банально это ни было, Лоботомия и, конечно, Солнечная Сторона – фавориты. А еще Когда меня заберут и Лирический герой (но к ним любовь выросла с годами, в 14-15 лет еще не прочувствовала их).<br>Солнечная сторона для меня всецело про любовь и про дом (дом в высоком смысле). Поэтому вот два моих арта, вдохновленных этой песней. А третий вдохновлен песней Свое лицо.<br>Инфы из genius тут нет, но все равно рекомендую к прочтению: <a href="https://genius.com/albums/Loqiemean/Burn-this-album" target="_blank" style="color: #4fc3f7;">ссылка</a>`,
    img: ["./обложки/солнечная.PNG", "./обложки/сторона.PNG", "./обложки/своелицо.PNG"]
  },
  "Повестка": {
    text: `Выпущен 8 ноября 2017 г.<br>Главное, что стоит уяснить перед прослушиванием: отбросьте любые ожидания, связанные с релизом, ибо Рома плевал на них и буквально в каждом треке норовит преподнести сюрприз. Здесь слушателя даже не выводят из зоны комфорта — его пинают туда-сюда, как мяч на футбольном поле. (<a href="https://genius.com/albums/Loqiemean/Povestka" target="_blank" style="color: #4fc3f7;">Источник</a>)<br>Моя абсолютная любовь – Королева. Именно после неё влюбилась в творчество Ромы окончательно.`,
    img: []
  },
  "ПОВЕС2КА": {
    text: `Выпущен 1 апреля 2018 г.<br>Сам серийный релиз «Повестки» задумывался, как сборник треков – триггеров, ответной реакции на какие-то локальные события, которые навряд ли можно собрать в полноценный концептуальный альбом, но, как оказалось, «Повестка» собрала себе концепт сама, будто по законам «невидимой руки» Смита. (Цитата Локи, <a href="https://genius.com/albums/Loqiemean/2-poves2ka" target="_blank" style="color: #4fc3f7;">источник</a>)<br>Фавориты тут – Издат и ВВВ.<br>Еще отмечены Китобой и Быть Дауном. Хотя по сути весь альбом горячо люблю.`,
    img: []
  },
  "Пов3стка": {
    text: `Выпущен 9 декабря 2022 г.<br>Очень сильный и важный альбом. Почитать о нем как всегда советую на  <a href="https://genius.com/albums/Loqiemean/3-pov3stka" target="_blank" style="color: #4fc3f7;">genius</a> <br>Отмечены: Хейт Спич, Мартышка и Технологии.<br>Фаворит тут Тревожная Сумка, каждый раз до слез.`,
    img: []
  },
  "My_Little_Dead_Boy": {
    text: `Выпущен 20 апреля 2016 г.<br>Самой популярной песней на альбоме My Little Dead Boy группы Loqiemean является Athens Freestyle, Evolution с общим количеством просмотров 88,3 тыс. страниц (<a href="https://genius.com/albums/Loqiemean/My-little-dead-boy" target="_blank" style="color: #4fc3f7;">Источник</a>)<br>К слову, именно эта песня и является моей любимой в альбоме.`,
    img: []
  },
  "У_себя_на_кухне": {
    text: `Выпущен 6 декабря 2024 г.<br>Супер важный для меня альбом, который пробирает до мурашек и берет за душу. Это вторые версии старых, добрых, любимых треков (и еще три новых трека). Частичка концертов, которых давно нет. Чтобы лучше понять, зачем и почему этот альбом, настоятельно рекомендую почитать этот пост из <a href="https://t.me/Loqiemeantg/1536" target="_blank" style="color: #4fc3f7;">ТГК Ромы</a><br>Как я когда-то писала: «Спасибо, что проникаешь в сердца людям, чтобы вечность еще петь. Большое счастье, что вечность будет звучать именно так»<br>Отмечены: Пёс v2, Ёк ёк v2, В полупустой хате v2, Стая 1993 v2, Спасибо за опыт, Как у людей<br>Фавориты: Буду быть v2, Удочка для охоты v2, Гибрид. Гибридом и вдохновлен мой рисунок.`,
    img: ["./обложки/гибрид.png"]
  },
  "MLAB": {
    text: `Выпущен 28 октября 2022 г.<br>MLAB – My Little Alive Boy EP. <br>«На крышке гроба ноготочки<br>Ты видишь муки, я тут вижу — автор не закончил,» – этим, в целом, все сказано.<br>Обожаю этот маленький альбом. Пугало вдохновило на создание рисунка ниже. А Молочные зубы и Рорк вообще любимцы, тоже одни из самых любимых треков Ромы. «Не говори приятно, говори как есть»`,
    img: ["./обложки/пугало.PNG"]
  },
  "Живой_Питер_2018_(Live)": {
    text: `Лайв-запись концерта в Санкт-Петербурге прямиком из 2018`,
    img: []
  },
  "Зомби_надо_хоронить_(Live)": {
    text: `Выпущен 3 апреля 2020 г. <br>Это лайв-запись концерта в Москве в 2019 году, на котором я была. Приятно знать, что среди тысяч голосов есть и мой.<br>Отмечены: Лоботомия, Лирический герой, Королева, Быть дауном<br>Фаворит (конечно же): Солнечная сторона`,
    img: []
  },
  // Добавьте другие альбомы по необходимости.
};

// Глобальный элемент всплывающего окна для фактов об альбоме
let albumFactsPopupDiv;

function createAlbumFactsPopup() {
  albumFactsPopupDiv = createDiv('');
  albumFactsPopupDiv.style('position', 'fixed');
  albumFactsPopupDiv.style('top', '120px'); // Располагается ниже основного popup.js (top: 20px)
  albumFactsPopupDiv.style('right', '20px');
  albumFactsPopupDiv.style('width', '300px');

  albumFactsPopupDiv.style('max-height', '80vh');
  albumFactsPopupDiv.style('overflow-y', 'auto');


  albumFactsPopupDiv.style('background-color', 'rgba(0, 0, 0, 0.8)');
  albumFactsPopupDiv.style('color', '#fff');
  albumFactsPopupDiv.style('padding', '10px');
  albumFactsPopupDiv.style('border-radius', '8px');
  albumFactsPopupDiv.style('font-family', 'sans-serif');
  albumFactsPopupDiv.style('font-size', '14px');
  albumFactsPopupDiv.style('line-height', '1.5');
  albumFactsPopupDiv.style('z-index', '10000'); // Очень высокий z-index
  albumFactsPopupDiv.style('display', 'none');

  albumFactsPopupDiv.elt.addEventListener('wheel', function(e) {
    e.stopPropagation();
  }, { passive: false });
}

function showAlbumFactsPopup(album) {
  // Генерируем уникальный идентификатор на основе имени альбома
  let albumId = album.name.replace(/\s+/g, '_');
  // Если окно ещё не создано, создаём его
  if (!albumFactsPopupDiv) {
    createAlbumFactsPopup();
  }
  
  // Получаем данные для данного альбома из albumFacts
  let data = albumFacts[albumId];
  let text = "";
  let imgHTML = "";
  
  if (typeof data === "object") {
    text = data.text || "";
    // Если data.img является массивом, проходимся по нему и создаём для каждого элемента <img>
    if (Array.isArray(data.img)) {
      data.img.forEach(url => {
        imgHTML += `<img src="${url}" alt="${album.name}" style="max-width:100%; margin-bottom:5px;">`;
      });
    } else if (data.img) {
      // Если data.img – строка, выводим одно изображение
      imgHTML = `<img src="${data.img}" alt="${album.name}" style="max-width:100%;">`;
    }
  } else {
    text = data;
  }
  
  // Формируем HTML для окна
  let html = `<h3 style="margin: 0 0 10px 0;">Факты об альбоме: ${album.name}</h3>`;
  html += `<p>${text}</p>`;
  if (imgHTML) {
    html += imgHTML;
  }
  
  albumFactsPopupDiv.html(html);
  albumFactsPopupDiv.style('display', 'block');
}

function hideAlbumFactsPopup() {
  if (albumFactsPopupDiv) {
    albumFactsPopupDiv.style('display', 'none');
  }
}