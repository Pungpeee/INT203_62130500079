const app = {
    data() {
        return {
            firstname: 'Wanisara',
            lastname: 'Khamracha',
            about: 'Youtuber',
            image: './images/picture.jpg',
            follow: 'https://www.youtube.com/channel/UCkvom4uMCtwaziIfAOthUiQ',
            chat: 'https://www.facebook.com/Pungpee.wns/'
        }
    }
   
}
mountedApp = Vue.createApp(app).mount('#app')