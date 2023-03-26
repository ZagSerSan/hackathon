import {Module} from '../core/module'
import './message.css';

export class Message extends Module {
   constructor() {
      super('message', 'Случайное сообщение')
   }
   trigger() {
      // функционал модуля
      function  getRandomQuote() {
         const quotes = [
            "Жизнь прекрасна, если мы сами делаем ее такой.",
            "Никогда не сдавайся. Потому что в тот момент, когда ты сдаешься, это может быть именно тот момент, когда успех уже близок.",
            "Главное – не забывайте, кто вы есть, и не теряйте своих идеалов в жизни.",
            "У тебя нет шансов, если ты не попробуешь.",
            "Никогда не слишком поздно стать тем, кем ты мог бы быть.",
            '«Чем умнее человек, тем легче он признает себя дураком». Альберт Эйнштейн',
            '«Никогда не ошибается тот, кто ничего не делает». Теодор Рузвельт',
            '«Менее всего просты люди, желающие казаться простыми». Лев Николаевич Толстой',
            '«Мы находимся здесь, чтобы внести свой вклад в этот мир. Иначе зачем мы здесь?» Стив Джобс',
            '«Мода проходит, стиль остаётся». Коко Шанель',
            '«Если человек не нашёл, за что может умереть, он не способен жить». Мартин Лютер Кинг',
            '«Музыка заводит сердца так, что пляшет и поёт тело. А есть музыка, с которой хочется поделиться всем, что наболело». Джон Леннон',
            '«Если кто-то причинил тебе зло, не мсти. Сядь на берегу реки, и вскоре ты увидишь, как мимо тебя проплывает труп твоего врага». Лао-цзы',
            '«Лучше быть хорошим человеком, "ругающимся матом", чем тихой, воспитанной тварью». Фаина Раневская',
            '«Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть». Генри Форд'
         ];
         const randomIndex = Math.floor(Math.random() * quotes.length);
         return quotes[randomIndex];
      }

      const quote = getRandomQuote();
      const message = document.createElement("div");
      message.classList.add("message");
      message.textContent = quote;
   
      const isContain = document.querySelector('.message');
      if (isContain) {
         isContain.remove()
      }
      document.body.append(message);

      // setTimeout(() => {
      // document.body.remove(message);
      // }, 10000)
   }
   toHTML() {
      return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
   }
}
















