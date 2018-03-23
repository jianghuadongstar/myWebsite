## 继承 
 /**
     * extend  子继承父的属性
     * @param Child   子
     * @param Parent  父
     */
    function extend(Child, Parent) {

        var F = function(){};

        F.prototype = Parent.prototype;

        Child.prototype = new F();

        Child.prototype.constructor = Child;

        //意思是为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。
        // （uber是一个德语词，意思是"向上"、"上一层"。）这等于在子对象上打开一条通道，可以直接调用父对象的方法。
        // 这一行放在这里，只是为了实现继承的完备性，纯属备用性质。
        Child.uber = Parent.prototype;

    }

    /**
       例子：
         function Cat(name,color){
                this.name = name;
                this.color = color;
            }
         function Animal(){
            this.species = "动物";
         }
         extend(Cat,Animal);
         var cat1 = new Cat("大毛","黄色");
         alert(cat1.species); // 动物
     */


// ## 拷贝

 /**
     * extend  深层拷贝
     * @param c   子
     * @param p  父
     */
　function deepCopy(p, c) {

　　　　var c = c || {};

　　　　for (var i in p) {

　　　　　　if (typeof p[i] === 'object') {

　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};

　　　　　　　　deepCopy(p[i], c[i]);

　　　　　　} else {

　　　　　　　　　c[i] = p[i];

　　　　　　}
　　　　}

　　　　return c;
　　}

/*   eg:
     var Doctor = deepCopy(Chinese);
     
  　　Chinese.birthPlaces = ['北京','上海','香港'];
    
　　  Doctor.birthPlaces.push('厦门');
　　
     alert(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
　  　alert(Chinese.birthPlaces); //北京, 上海, 香港

*/
