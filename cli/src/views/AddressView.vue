<template>
  <div class="address">
    <h1>Address</h1>
    <input type="text" class="inputAddress" v-model="searchItem" placeholder="지번 또는 도로명 주소를 입력하시오." />
    <button v-on:click="getAddress">search</button>
    <div class="areaAddress">{{this.addressJson}}</div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function() {
            return {
              searchItem: '',
              addressJson: '조회된 데이터가 없습니다.',
              KAKAO_REST_API: ''
            }
        },
        methods: {
            getAddress() {
              axios.get("https://dapi.kakao.com/v2/local/search/address.json", {
                headers: {
                  Authorization: `KakaoAK ${this.KAKAO_REST_API}`
                },
                params: {
                  query: this.searchItem
                }
              }).then((res) => {
                  console.log(res.data);
                  this.addressJson = res.data
              })
              .catch((err) => {
                  console.log(err);
              });
            }
        }
    }
</script>
