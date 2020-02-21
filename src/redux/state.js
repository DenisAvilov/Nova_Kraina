let state = {
    profile: {
        user: [{
            id: 0,
            name: 'Илья',
            second_Name: 'Авилов',
            bg_logo: "https://www.dswiss.com/assets/components/phpthumbof/cache/Office_PC1.27be4b79db61149d2ae0a950ea0d216f.jpg",
            get bg_logo_alt() {
                return this.name + " " + this.second_Name;
            },
            user_avatar: "http://avilovdenis.pp.ua/img/2-mini-min.png",
            get user_avtar_alt() {
                return this.name + " " + this.second_Name;
            },



        }]
    }
}





export default state;