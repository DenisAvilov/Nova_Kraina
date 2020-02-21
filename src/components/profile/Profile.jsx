import React from 'react';
import d from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = () => {
    return (<div className={d.wrap}>
                <div className={d.header}>
                    <div className={d.header_bg_logo}>
                        <img src="https://www.dswiss.com/assets/components/phpthumbof/cache/Office_PC1.27be4b79db61149d2ae0a950ea0d216f.jpg" alt="logo_name" />
                    </div>
                    <div className={d.header_logo_wrap}>
                        <div className={d.header_logo}>
                            <img src="http://avilovdenis.pp.ua/img/2-mini-min.png" alt="img_user" />
                        </div>
                        <div className={d.header_logo_download}>
                            <FontAwesomeIcon icon="camera" />
                        </div>
                        <h1 className={d.name}>Илья Авилов</h1>
                        <span className={d.add_biography}>Добавить информацию</span>
                    </div>

                </div>
                <div className={d.nav}>
                    <div className={d.nav_info}>
                        <a href="">Хроника</a>
                        <a href="">Информация</a>
                        <a href="">Друзья</a>
                        <a href="">Фото</a>                        
                    </div>
                    <div className={d.nav_edit_profile}>Редоктировать проф...</div>
                 </div>
                <div className={d.wrapper_state}>
                    <div className={d.state}>
                    <h1>Краткая информация</h1>
                    <ul>
                        <li className={d.state_item}>
                            <div>
                                <FontAwesomeIcon icon='graduation-cap'/> 
                            </div>
                            <div className={d.state_inform}><span>Учился в </span><a href="#">National Aerospace University – Kharkov Aviation Institute</a></div>
                        </li>
                        <li className={d.state_item}>
                            <div>
                                <FontAwesomeIcon icon='home'/> 
                            </div>
                            <div className={d.state_inform}><span>Живет в г.</span><a href="#">Харьков</a></div>
                        </li>
                        <li className={d.state_item}>
                            <div className={d.map}>
                                <FontAwesomeIcon icon='map-marker'/> 
                            </div>
                            <div className={d.state_inform}><span>Из </span><a href="#">Харьков</a></div>
                        </li>
                    </ul>
                    </div>
                    <div className={d.new_news}>
                        <div className={d.your_news}>
                        <div className={d.your_user_logo}>
                                <img src="http://avilovdenis.pp.ua/img/2-mini-min.png" alt="Avatar" />
                            </div>
                        <div className={d.write_news}>
                                <textarea name="your_new_news" id="your_new_news" cols="10" rows="1"></textarea>
                                <input type="submit" />
                            </div>
                        </div>
                        
                    </div>
                    <div className={d.posts}>    

                        <div className={d.post}>
                                <div className={d.post_title}>
                                    <div className={d.post_logo}><img src="http://avilovdenis.pp.ua/img/2-mini-min.png" alt="logo" /> </div>
                                    <span className={d.post_user_name}>Никита Авилов</span>
                                </div>
                                <div className={d.post_content}>
                                    <span className={d.post_content_title}>Природа</span>
                                    <a href="#">
                                    <figure>
                                        <img src="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg" alt=""/>
                                    </figure>
                                    <span className={d.post_content_text}>Какой то текст в посте, Какой то текст в посте Какой то текст в посте Какой то текст в посте Какой то текст в посте</span>
                                    </a>
                                    <div className={d.post_content_like}>  <span><FontAwesomeIcon icon='thumbs-up'/> Нравится </span></div>
                                </div>
                        </div>
                        <div className={d.post}>
                                <div className={d.post_title}>
                                    <div className={d.post_logo}><img src="http://avilovdenis.pp.ua/img/2-mini-min.png" alt="logo" /> </div>
                                    <span className={d.post_user_name}>Никита Авилов</span>
                                </div>
                                <div className={d.post_content}>
                                    <span className={d.post_content_title}>Природа</span>
                                    <a href="#">
                                    <figure>
                                        <img src="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg" alt=""/>
                                    </figure>
                                    <span className={d.post_content_text}>Какой то текст в посте, Какой то текст в посте Какой то текст в посте Какой то текст в посте Какой то текст в посте</span>
                                    </a>
                                    <div className={d.post_content_like}>  <span><FontAwesomeIcon icon='thumbs-up'/> Нравится </span></div>
                                </div>
                        </div>

                       
                    </div> 
                </div>
            </div>
        
    )
}

export default Profile;