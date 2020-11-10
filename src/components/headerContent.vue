<template>
  <div>
        <div class="headerTop"></div>
    
    <div class="headerContent">
    <div class="usernav">
      <ul>
        <li><a href="" rel="nofollow">Anasayfa</a></li>
        <li><a href="" rel="nofollow">İletişim</a></li>
      </ul>
    </div>
     <div class="welcome" id="divMemberPanel">
        <div class="memberWelcomeContent" id="divMemberWelcomeContent">
          <ul>
            <li class="headerUyeGiris">
              <a
                href="javascript:void(0);"
                onclick="GirisKontrol(0)"
                title="Hesabım"
              >
                Üye Girişi
              </a>
            </li>
            <li class="headerUyeOl">
              <a
                href="javascript:void(0);"
                onclick="GirisKontrol(1)"
                title="Üye Ol"
              >
                Üye Ol
              </a>
            </li>
           
          </ul>
        </div>
      </div>

      <div id="logo">
        <p style="text-align: left;"><a href=""><img src="https://www.minikterzi.com/Uploads/EditorUploads/Logo/MinikTerziLogo.png" ></a></p>
      </div>
     
      <div class="mycart">
        <a href="" rel="nofollow">
           <!-- <span><img class="imagee" src="../assets/images/round_add_shopping_cart_black_18dp.png" /></span> -->
          <span class="sepetTecxt">Sepetim</span>
          <span id="spnTopSepetToplamUrun" class="sepetUrunSayisi">0</span>
          <span class="sepetUrun">Ürün</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style >
/* .imagee{
  position: absolute;

    width: 25px;
    height: 30px;
} */
.mycart {
  position: absolute;
  right: 0;
  top: 32px;
  margin-right:350px ;
}
.mycart > a span.sepetUrunSayisi {
    position: absolute;
    left:   4px;
    top: 18px;
    font-size: 12px;
    color: #353535;
}
.mycart > a span {
   
    margin: 0;
    line-height: 20px;
    color:black;
    font-style: normal;
    font-weight: 400;
}

.mycart > a span.sepetUrun {
    position: absolute;
    left: 14px;
    top: 18px;
    font-size: 12px;
    color: #353535;
}
/* .mycart .CartProduct {
    display: block !important;
    border: 0;
    position: fixed;
    right: 0;
    top: 0;
    margin-right: -20%;
    width: 20%;
    height: 100%;
    padding: 20px;
    background: #fff;
    z-index: 10000;
   
    box-sizing: border-box;
  
    box-shadow: 0 0 4px 0 rgba(0,0,0,.14);
   
  
    transition: margin-right .7s cubic-bezier(.165,.84,.44,1);
} */
element {
    display: block;
}
.CartProduct ul {
    list-style-type: none;
}

.headerTop {
  line-height: 33px;
  height: 33px;
  background-color: #114b5f;
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  color: #fff;
  
}

.memberWelcomeContent ul li a{
  color: white;
}
.usernav{
  color:white;  
  margin-left: 350px;
}
.usernav  ul li a{
  color: white;
}
* {
  margin: 0;
  outline: 0;
  padding: 0;
}

.headerContent {
    height: 100%;
    position: relative;
    /* margin: 0 auto; */
}
* {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
}
body,
td,
th,
input,
textarea,
select,
a {
  font-size: 12px;
  color: white;
}
body {
  color: #000;
  font-family: open sans, sans-serif;
  font-weight: 400;
}
#logo {
  padding: 25px 0 24px;
  margin-left: 350px;
}
a {
  cursor: pointer;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
element {
  text-align: left;
}
* {
  margin: 0;
  outline: 0;
  padding: 0;
  box-sizing: border-box;
}
.welcome {
  position: absolute;
  right: 0;
  margin-right:350px ;
 
  top: -25px;
  color: #fff;
}
.welcome ul {
  list-style-type: none;
}
.welcome ul li {
  float: left;
  margin-left: 10px;

}

.usernav {
  position: absolute;
  top: -25px;
  color: #fff;
}
/* .usernav ul li a {
    color: #fff;
    font-size: 12px;
} */
.usernav ul li {
  color: #fff;
  float: left;
  margin-right: 10px;
}
.usernav ul {
  list-style-type: none;
}
</style>