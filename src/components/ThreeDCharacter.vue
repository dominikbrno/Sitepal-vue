<template>
  <div>
    <header class="main_header">
      <div class="left_div">
        <div class="logo logo_heading">
          <a href="/"><img src="https://www.sitepal.com/api/examples/images/logo.png" alt="SitePal"></a>
        </div>
      </div>
    </header>

    <table id="tblContainer" cellspacing="0" align="center" border="0" width="50%" style="min-height: 73vh;">
      <tbody>
        <tr>
          <td id="tdContent">
            <p class="feature_entire_heading text-center f-bold h2" align="center"><b>Embed Your SitePal Scene in Vue Js</b></p>
            <table align="center" width="90%">
              <tbody>
                <tr>
                  <td align="left">
                    <table cellpadding="0" cellspacing="0" border="0" width="90%">
                      <tbody class="black10">
                        <tr>
                          <td class="btn_parent">
                             <router-link to="/">
                              <button class="btn btn_child shadow" type="button" id="btn1" value="2D ILLUSTRATED">2D ILLUSTRATED</button>
                            </router-link>
                            <router-link to="/3d">
                              <button class="btn btn_child shadow btn1" type="button" id="btn2" value="3D PHOTOFACE">3D PHOTOFACE</button>
                            </router-link>
                            <router-link to="/fb">
                              <button class="btn btn_child shadow " type="button" id="btn3" value="FULL BODY">FULL BODY</button>
                            </router-link>
                            <router-link to="/empty"> 
                              <button class="btn btn_child shadow " type="button" id="btn4" value="EMPTY">EMPTY</button>
                            </router-link>
                            <a class="download" href="/api/examples/vue/Sitepal-vue.zip" download="">
                              <button class="btn btn_child shadow" type="button" id="btn1" value="SOURCE CODE">DOWNLOAD SOURCE CODE</button>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td align="center">
                    <table cellpadding="10" cellspacing="0" border="0" width="350">
                      <tbody>
                        <tr>
                          <td colspan="2" align="center">
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" align="center">
                             <SitePal embed='3432155,600,800,"",1,1, 2695693, 0,1,1,"c3ecd7055a9d58e95ce593a5cf2a8fba",0'/>
                          </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                          <td align="right">
                            <button v-on:click="sayAudio('sayAudioExample')" class="btn btn_child shadow" type="button" id="btn1" value="SAYAUDIO">sayAudio()</button>
                          </td>
                          <td align="left">
                            <button v-on:click="sayText()" class="btn btn_child shadow" type="button" id="btn1" value="SAYTEXT">sayText()</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td align="right">
                    <form action="#" name="messageForm">
                      <textarea cols=45 rows=16 name="message" class="feature_entire_heading" READONLY></textarea>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          
        </tr>
      </tbody>
    </table>

    <footer>
      <div class="footer-menu oddcast text-center">
        <ul class="w-50 m-auto ">
          <li class="w-100 f-bold ">Please feel free to use the source code of this page as an example.</li>
          <li>To view the source code of this page, <a href="/api/examples/vue/Sitepal-vue.zip" download="">download</a> souce code</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>

import SitePal from 'sitepal-vue'

export default {
  name: 'ThreeDCharacter',
  components: {
    SitePal
  },

  methods: {
    sayText: async function () {
      const delay = (ms) => new Promise(res => setTimeout(res, ms));
      window.sayText("Phone advice for filling out self-assessment and VAT forms is cut back drastically in favour of web services", 3,1,3);
      await delay(4000)
      window.stopSpeech();
      window.sayText("When you refer to Facebook - you mean the facebook app. An app can do as it likes, and is not subject to browser restrictions.", 3,1,3);
      await delay(4000)
      window.stopSpeech();
      window.sayText("They predicted the devices may be used to spot symptoms of the brain robbing disease in the future.", 3,1,3);
      await delay(4000)
      window.stopSpeech();
      window.sayText("Most of follow a set daily routine, which defines how much we move throughout the day and when, known as your daily activity pattern.", 3,1,3);
      await delay(4000)
      window.stopSpeech();
      window.sayText("Researchers from the Johns Hopkins Bloomberg School of Public Health sought to investigate whether activity patterns could shed light on someone's risk of developing Alzheimer's disease.", 3,1,3);
    },
    sayAudio: function (audioName) {
      SitePal.sayAudio(audioName);
    }
  },
};
</script>

<style scoped>
@import 'https://sitepal.com/api/examples/css/apiExample.css';
  header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;

    p {
      margin-left: 1rem;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
  }
</style>