import * as React from 'react';
import d from './Friends.module.css';
import { NavLink } from 'react-router-dom';
 import { ItemsType } from '../../redux/friends-reduce';

type FriendsType ={
  user:  any  
  usersTracking: Array<number>
  friendUnFollow: (userID: number) => void
  friendFollow: (userID: number) => void  
}
const Friend: React.FC<FriendsType> = (props: FriendsType) => {
  let {user, usersTracking, friendUnFollow, friendFollow} = props
  return (
    <div className={d.wrap}>     
        <div className={d.friend_wrap}>
          <div className={d.logo}>
      <NavLink to={"Profile/" + user.id}>   <img src={user.photos.large === null ? "https://www.w3schools.com/w3css/img_avatar3.png" : user.photos.large} /> </NavLink>
          </div>       
          <h1 className={d.user_name}>  {user.name} </h1>
          <div className={d.status}>
            {user.followed
              ? <button disabled={usersTracking.some(id => id == user.id)} onClick={() => { friendUnFollow(user.id)} 
              }>
                <span>Удалить из друзей</span>
              </button>
              : <button disabled={usersTracking.some(id => id == user.id)} onClick={() => { friendFollow(user.id)}}> 
              Добавить в друзья </button>
            }
          </div>

        </div>

     
    </div>
  )
}

export default Friend; 


// var count = 10; //всего записей
// var cnt = 5; //сколько отображаем сначала
// var cnt_page = Math.ceil(count / cnt); //кол-во страниц

// //выводим список страниц
// var paginator = document.querySelector(".paginator");
// var page = "";
// for (var i = 0; i < cnt_page; i++) {
//   page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
// }
// paginator.innerHTML = page;

// //выводим первые записи {cnt}
// var div_num = document.querySelectorAll(".num");
// for (var i = 0; i < div_num.length; i++) {
//   if (i < cnt) {
//     div_num[i].style.display = "block";
//   }
// }

// var main_page = document.getElementById("page1");
// main_page.classList.add("paginator_active");

// //листаем
// function pagination(event) {
//   var e = event || window.event;
//   var target = e.target;
//   var id = target.id;
  
//   if (target.tagName.toLowerCase() != "span") return;
  
//   var num_ = id.substr(4);
//   var data_page = +target.dataset.page;
//   main_page.classList.remove("paginator_active");
//   main_page = document.getElementById(id);
//   main_page.classList.add("paginator_active");

//   var j = 0;
//   for (var i = 0; i < div_num.length; i++) {
//     var data_num = div_num[i].dataset.num;
//     if (data_num <= data_page || data_num >= data_page)
//       div_num[i].style.display = "none";

//   }
//   for (var i = data_page; i < div_num.length; i++) {
//     if (j >= cnt) break;
//     div_num[i].style.display = "block";
//     j++;
//   }
// }
// .num {
//   display: none;
// }
// .paginator {
//   line-height: 150%;
// }
// .paginator > span {
//   display: inline-block;
//   margin-right: 10px;
//   cursor: pointer;
// }
// .paginator_active {
//   color: red;
// }
// Блоки:
// <div class="page">
//   <div data-num=1 class="num">1</div>
//   <div data-num=2 class="num">2</div>
//   <div data-num=3 class="num">3</div>
//   <div data-num=4 class="num">4</div>
//   <div data-num=5 class="num">5</div>
//   <div data-num=6 class="num">6</div>
//   <div data-num=7 class="num">7</div>
//   <div data-num=8 class="num">8</div>
//   <div data-num=9 class="num">9</div>
//   <div data-num=10 class="num">10</div>
// </div>
// Страницы:
// <div class="paginator" onclick="pagination(event)"></div>