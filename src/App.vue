<script>
  import utils from "./utils/utils.js";

  export default {
    onLaunch(option) {
    },
    onShow(option) {
      console.log(option)
      this.$store.state.board.actId= '6';
      var QQMapWX = require('../static/qqmap-wx-jssdk.min.js');
      var qqmapsdk;
      qqmapsdk = new QQMapWX({
        key: 'OISBZ-SUKW6-LJ7SS-MXQHI-GC5FF-CQBGM'
      });
      wx.getLocation({
        type: 'gcj02',
        altitude: true,
        success: (res) => {
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: (addressRes) => {
              console.log(addressRes)
              this.$store.state.board.address = addressRes.result.address_component.province + '' + addressRes.result.address_component.district;
              this.$store.state.board.location = addressRes.result.address_component.province;
            }
          })
        }
      })
      if(option.path&&option.path == 'pages/showPages/main'){
        var otherHelpId = this.$store.state.board.otherHelpId
        var actId = this.$store.state.board.actId
        wx.redirectTo({
          url: '/pages/activePower/main?actId=' + actId + "&helpId=" + otherHelpId
        })
      }
    },
    created() {

    }
  }
</script>

<style>
  page {
    height: 100%;
    width: 100%;
  }

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
</style>
