// pages/editPuntos/editPuntos.js
const app = getApp()
const db = wx.cloud.database()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        puntos: 0,
        num : 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.setData({
           
            puntos: app.userInfo.puntos,
          });
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    addCount : function (e) {
        var value = parseInt(this.data.puntos) + parseInt(this.data.num)
        this.setData({
            puntos: value
        });
        this.updatePuntos();
    },

    delCount : function (e) {

        var value = parseInt(this.data.puntos) - parseInt(this.data.num)

        if(value < 0){
            wx.showToast({
                title: 'Puntos Insuficientes',
                icon: 'error',
                duration: 2000
            });
        }else{

            this.setData({
                puntos: value
            });
            this.updatePuntos();
        }

    },

    handleText(ev){
        console.log(ev);
        var value = ev.detail.value;
        console.log(value);
        var aux = this.data.puntos;
        console.log(aux);

        this.data.num = value
        console.log(this.data.num);
    },

    updatePuntos(){
        wx.showLoading({
            title: '更新中'
        })
        db.collection('users').doc(app.userInfo._id).update({
            data: {
                puntos: this.data.puntos
            }
        }).then((res) => {
            wx.hideLoading();
            wx.showToast({
            title: '更新成功'
            });
            app.userInfo.puntos = this.data.puntos;
        });
        },

    handleLinks(ev){
        let id = ev.target.dataset.id;
        let value = ev.detail.value;
        wx.cloud.callFunction({
            name: "update",
            date:{
                collection : 'users',
                doc: id,
                data:  "{puntos : _.set(value)}"
            }
        }).then((res)=> {
            console.log(res);
        });
    },


    
})