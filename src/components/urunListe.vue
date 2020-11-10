<template>
  <div>
    <div class="ProductListContent">
      <div id="ProductPageProductList" class="ProductList sort_4">
        <div
          class="ItemOrj col-lg-3 col-md-3 col-sm-6 col-xs-6"
          v-for="product in productList"
          :key="product"
        >
          <div class="productItem">
            <ul>
              <li>
                <div class="productImage">
                  <img :src="product.productImage" />
                </div>
                <div
                  class="productDetail videoAutoPlay"
                  data-id=""
                  data-variant-id=""
                >
                  <!-- <div class="productMarka" style="display: none;">Minik Terzi</div> -->
                  <div class="productName detailUrl" data-id="">
<a href="" >{{ product.productName }}</a>
                    
                      </div>
                    <div class="productPrice">
                      <div class="discountPrice">
                        <span>
                          {{ product.productPrice }}
                        </span>
                        <!-- <span class="discountKdv">
KDV Dahil
</span> -->
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="productIcon">
              <div class="favori favoriContent-990-1745">
                <a
                  onclick="productFavoritesProcess(-1,2,990,1745,1,this)"
                  init="false"
                  data-action="1"
                  class="favoriteslist listfavoriPasif tip"
                  onload="urunfavoriKontrol(this,990)"
                  title="Favorilere Ekle"
                >
                  Favorilere Ekle
                </a>
              </div>
              <div class="mycartIcon tip" title="Sepete Ekle">
                <a
                 
                  class="btnAddToCart"
                  data-productid="990"
                  data-variantid="1745"
                >
                  <span class="urunListeSpanSepeteEkle">Sepete Ekle</span>
                </a>
              </div>
              <div class="examineIcon tip detailLink" title="Ürünü İncele">
                <a 
                  
                  class="detailUrl"
                  data-id="990"
                >
                  Ürünü İncele
                </a>
       
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
  data() {
    return {
      productList: [
        {
          productId: 0,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1c8b.jpg",
          productPrice: "149,00",
        },
        {
          productId: 1,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-bf42.jpg",
          productPrice: "149,00",
        },
        {
          productId: 2,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-e90f.jpg",
          productPrice: "149,00",
        },
        {
          productId: 3,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/dugmeli-havuc-pantolon-e57c.jpg",
          productPrice: "149,00",
        },
        {
          productId: 4,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/dugmeli-havuc-pantolon-32ed.jpg",
          productPrice: "149,00",
        },
         {
          productId: 5,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/dugmeli-havuc-pantolon-dbe6.jpg",
          productPrice: "149,00",
        },
         {
          productId: 6,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1c8b.jpg",
          productPrice: "149,00",
        },
         {
          productId: 7,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/dugmeli-havuc-pantolon-dbe6.jpg",
          productPrice: "149,00",
        },
        {
          productId: 6,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1c8b.jpg",
          productPrice: "149,00",
        },
         {
          productId: 7,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/dugmeli-havuc-pantolon-dbe6.jpg",
          productPrice: "149,00",
        },
      ],
    };
    
  },
  methos:{
    
  }
};
</script>

<style scoped>
li{
    list-style-type: none;
}
.ProductListContent .ProductList {
  margin-left: -15px;
  margin-right: -15px;
}
.ProductListContent {
  width: 1170px;
  height: 7300px;
  margin-left: 327.5px;
}
* {
  margin: 0;
  margin-right: 0px;
  margin-left: 0px;
  outline: 0;
  padding: 0;
}
.ProductList .productItem .productDetail .productPrice .discountPrice {
  color: #03a0b4;
  font-size: 20px;
  margin-right: 5px;
  display: inline-block;
  line-height: 24px;
}
.productName{
    font-size: 5px;
}
.ProductList .productItem .productDetail .productPrice {
  text-align: center;
}
.ProductList .productItem .productDetail .productPrice[data-v-46701ad1] {
  margin: 3px 0;
  clear: both;
  float: left;
  width: 100%;
  text-align: center;
  display: block;
  height: 30px;
}
.ProductList .productItem .productDetail .productName a:hover {
    color: #03a0b4;
}

body,
td,
th,
input,
textarea,
select,
a {
  font-size: 12px;
}
body {
  color: #000;
  font-family: open sans, sans-serif;
  font-weight: 400;
}

.col-md-3,
.col-lg-3,
.col-xs-4,
.col-xs-6 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.productImage {
  height: 0;
  position: relative;
  background: #fff;
  padding-bottom: 150%;
  overflow: hidden;
  width: 100%;
  border-bottom: 0;
}
* {
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.ProductListContent .ProductList {
  margin-left: -15px;
  margin-right: -15px;
}
* {
  box-sizing: border-box;
}

.col-lg-3 {
  width: 25%;
}
.col-lg-3 {
  float: left;
}
* {
  margin: 0;
  margin-right: 0px;
  margin-left: 0px;
  outline: 0;
  padding: 0;
}
.ProductList .productItem {
  position: relative;
  border: 1px solid #f5f1f1;
  padding: 0 0;
  width: 100%;
  float: left;
  margin: 0 0 30px;
}
.ProductList .productItem .productDetail {
  z-index: 90;
  height: 73px;
}
.ProductList .productItem .productDetail .productName {
  margin: 0 0 2px;
  padding: 5px 0;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  height: 44px;
  overflow: hidden;
}
.ProductList .productItem .productIcon .favori a {
  background: 0 0;
  width: 100%;
  padding: 0;
  display: block;
  background: #fff;
  padding: 0;
  font-size: 0;
  height: 35px;
  text-align: center;
  white-space: nowrap;
  color: #03a0b4;
  text-transform: uppercase;
  font-weight: 400;
  border: 1px solid #03a0b4;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}
.ProductList .productItem .productDetail .productPrice {
  margin: 3px 0;
  clear: both;
  float: left;
  width: 100%;
  text-align: center;
  display: block;
  height: 30px;
}
.ProductList .productItem .productIcon .mycartIcon {
  width: 50%;
  float: left;
  margin-left: 10px;
}
.ProductList .productItem .productIcon .mycartIcon a {
  background: 0 0;
  width: 100%;
  padding: 0;
  display: block;
  background: #fff;
  padding: 0;
  font-size: 14px;
  height: 35px;
  line-height: 33px;
  text-align: center;
  white-space: nowrap;
  color: #03a0b4;
  text-transform: uppercase;
  font-weight: 400;
  border: 1px solid #03a0b4;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}
.ProductList .productItem .productIcon .mycartIcon a {
  font-size: 14px;
  line-height: 33px;
  text-align: center;
  white-space: nowrap;
  color: #03a0b4;
  text-transform: uppercase;
  font-weight: 400;
}

.ProductList .productItem .productIcon .hoverFalse,
.ProductList .productItem .productIcon .favori,
.ProductList .productItem .productIcon .mycartIcon,
.ProductList .productItem .productIcon .examineIcon {
  opacity: 0;
  visibility: hidden;

  transform: translateY(50px);
}
.ProductList .productItem .productIcon .examineIcon {
  width: 17%;
  float: right;
}
.ProductList .productItem .productIcon .examineIcon a {
  background: 0 0;
  width: 100%;
  padding: 0;
  display: block;
  background: #fff;
  padding: 0;
  font-size: 0;
  height: 35px;
  text-align: center;
  white-space: nowrap;
  color: #03a0b4;
  text-transform: uppercase;
  font-weight: 400;
  border: 1px solid #03a0b4;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}
.ProductList .productItem:hover .favori,
.ProductList .productItem:hover .mycartIcon,
.ProductList .productItem:hover .examineIcon {
  opacity: 1;
  visibility: visible;

  transform: translateY(-20px);
}
.ProductList .productItem .productIcon .hoverFalse,
.ProductList .productItem .productIcon .favori,
.ProductList .productItem .productIcon .mycartIcon,
.ProductList .productItem .productIcon .examineIcon {
  transition: all 0.4s ease;
}
.ProductList .productItem .productIcon .favori {
  width: 17%;
  cursor: pointer;
  float: right;
  margin-left: 10px;
  margin-right: 10px;
}
.ProductList .productItem .productDetail .productName a {
    font-family: open sans,sans-serif;
    color: #444;
    text-decoration: none;
}
.productItem:hover .productPrice {
    opacity: 0;
    /* z-index: -1; */
}

</style>