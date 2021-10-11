<template>
  <div class="decorator">decorator</div>
</template>

<script>
export default {
  mounted() {
    this.test();
    this.test1();
    this.test2();
    this.test3();
    this.test4();
    this.log();
    this.manyDec()
  },
  methods: {
    test() {
      @testable
      class MyTestableClass {}
      function testable(target) {
        target.isTestable = true;
      }
      console.log(MyTestableClass.isTestable);
    },
    test1() {
      function testable(isTestable) {
        return function (target) {
          target.isTestable = isTestable;
        };
      }
      @testable(false)
      class MyTestableClass {}
      console.log(MyTestableClass.isTestable);
      @testable(true)
      class MyClass {}
      console.log(MyClass.isTestable);
    },
    test2() {
      function testable(target) {
        target.prototype.isTestable = true;
      }
      @testable
      class MyTestableClass {}

      let obj = new MyTestableClass();
      console.log("obj:", obj.isTestable);
    },
    test3() {
      function mixins(...list) {
        return function (target) {
          Object.assign(target.prototype, ...list);
        };
      }
      const Foo = {
        foo() {
          console.log("foo");
        },
      };
      @mixins(Foo)
      class MyClass {}

      let obj = new MyClass();
      console.log(obj.foo());
    },
    test4() {
      class Person {
        @readonly
        name() {
          return `${this.first}${this.last}`;
        }
      }
      function readonly(target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
      }
      let person = new Person();
      console.log(person.name, "xxxxxx");
      //  person.name = 2421231
      console.log(person.name, "2421231");
    },
    log() {
      class Math {
        @log
        add(a, b) {
          return a + b;
        }
      }
      function log(target, name, descriptor) {
        var oldValue = descriptor.value;
        descriptor.value = function () {
          console.log(`Calling${name}with`, arguments);
          return oldValue.apply(this, arguments);
        };
        return descriptor;
      }
      const math = new Math();
      math.add(2, 4);
    },
    manyDec() {
      function dec(id) {
        console.log("evaluated", id);
        return (target, property, descriptor) => console.log("excuted", id,target, property, descriptor);
      }
      class Example {
        @dec(1)
        @dec(2)
        method() {}
      }
      new Example();
    }
  },
};
</script>

<style></style>
