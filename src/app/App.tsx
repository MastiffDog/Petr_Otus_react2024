import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Небольшая самопрезентация...</h3>
        <p className="Story">
            Меня зовут Гаврилов Петр Константинович. В ИТ я на текущий момент более 7 лет. Казалось бы, относительно большой
          срок, но сложилось так, что работая на "галере" в начале карьеры, у меня периодически менялся стек технологий. По 
          итогу, я на данный момент "специалист широкого профиля", который успел пощупать почти все фреймворки на JS, немного
          поковырять Python и Kotlin, но нет такой технологии, где я бы мог назвать себя экспертом. Основная цель прихода на 
          курс - актуализация знаний по React, а также устранить пробелы в таких вещах как Saga и сокеты. Потому как у меня есть
          опыт написания реакт-приложений, но за 5 лет много поменялось, и я писал в основном на классах и без хуков. Помимо 
          прочего, в ходе курса хотел бы все-таки закрыть вопрос с наиболее гармоничным стейт-менеджером, поскольку очень много
          реакт-приложений пишутся в связке с MobX, а не Redux. 
        </p> 
      </header>
    </div>
  );
}

export default App;