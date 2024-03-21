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
                              <button class="btn btn_child shadow" type="button" id="btn2" value="3D PHOTOFACE">3D PHOTOFACE</button>
                            </router-link>
                            <router-link to="/fb">
                              <button class="btn btn_child shadow " type="button" id="btn3" value="FULL BODY">FULL BODY</button>
                            </router-link>
                            <router-link to="/empty"> 
                              <button class="btn btn_child shadow btn1" type="button" id="btn4" value="EMPTY">EMPTY</button>
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
                          </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                          <td align="right">
                           
                          </td>
                          <td align="left">
                           
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td align="right">
                    
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

export default {
  name: 'emptyCharacter',
  components: {
  },

  methods: {
    sayText: function (txt, voice, lang, engine) {
      window.sayText(txt,voice,lang,engine);
    },
    sayAudio: function (audioName) {
      window.sayAudio(audioName);
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