<template>
  <div class="content">
    <p class="title">进制转换，将 10 进制浮点数转换成 64 进制</p>
    <p class="desc">
      64进制每一位上可以是从大到小为
      0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,-,~'
    </p>
    <div class="form">
      <div>
        <input v-model="decimal" class="input" />
        <span class="btn" @click="decimaTo64">10进制转64进制</span>
      </div>
      <p class="to64">{{ decimaTo64Value }}</p>
      <div>
        <input v-model="base64" class="input" />
        <span class="btn base64ToDecimal" @click="base64ToDecimal"
          >10进制转64进制</span
        >
        <p class="to64">{{ base64ToDecimalValue }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      decimal: "",
      decimaTo64Value: "",
      base64: "",
      base64ToDecimalValue: "",
    };
  },
  methods: {
    decimaTo64() {
      if (this.decimal) {
        this.decimaTo64Value = this.string10to64(this.decimal);
      }
    },
    base64ToDecimal() {
      if (this.base64) {
        this.base64ToDecimalValue = this.string64to10(this.base64);
      }
    },
    string10to64(number) {
      let chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~".split(
          ""
        );

      let radix = chars.length;
      let qutient = +number;
      let arr = [];
      do {
        var mod = qutient % radix;
        qutient = (qutient - mod) / radix;
        arr.unshift(chars[mod]);
      } while (qutient);
      return arr.join("");
    },
    string64to10(numberCode) {
      let chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~";
      let radix = chars.length;
      let len = numberCode.length;
      let i = 0;
      let originNumber = 0;
      while (i < len) {
        originNumber +=
          Math.pow(radix, i++) * chars.indexOf(numberCode.charAt(len - i) || 0);
      }
      return originNumber;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  .title {
    margin-top: 30px;
  }
  .desc {
    margin-top: 20px;
  }
  .form {
    margin-top: 20px;
    .input {
      display: inline-block;
      width: 130px;
      height: 44px;
      padding: 0 10px;
      vertical-align: middle;
    }
    .to64 {
      margin: 20px;
    }
  }
  .btn {
    display: inline-block;
    border-radius: 6px;
    width: 140px;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
    background-color: #f5a87c;
    color: #fff;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
  }
}
</style>