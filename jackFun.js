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


//Hooks 
function Hooks() {
            return {
                initEnv: function () {
                    Function.prototype.hook = function (realFunc, hookFunc, context) {
                        var _context = null; //函数上下文
                        var _funcName = null; //函数名
 
                        _context = context || window;
                        _funcName = getFuncName(this);
                        _context['realFunc_' + _funcName] = this;
 
                        console.log(window);
 
                        if (_context[_funcName].prototype && _context[_funcName].prototype.isHooked) {
                            console.log("Already has been hooked,unhook first");
                            return false;
                        }
                        function getFuncName(fn) {
                            // 获取函数名
                            var strFunc = fn.toString();
                            var _regex = /function\s+(\w+)\s*\(/;
                            var patten = strFunc.match(_regex);
                            if (patten) {
                                return patten[1];
                            };
                            return '';
                        }
                        try {
                            eval('_context[_funcName] = function ' + _funcName + '(){\n' +
                                'var args = Array.prototype.slice.call(arguments,0);\n' +
                                'var obj = this;\n' +
                                'hookFunc.apply(obj,args);\n' +
                                "return _context['realFunc_" + _funcName + "'].apply(obj,args);\n" +
                                '};');
                            _context[_funcName].prototype.isHooked = true;
                            return true;
                        } catch (e) {
                            console.log("Hook failed,check the params.");
                            return false;
                        }
                    }
                    Function.prototype.unhook = function (realFunc, funcName, context) {
                        var _context = null;
                        var _funcName = null;
                        _context = context || window;
                        _funcName = funcName;
                        if (!_context[_funcName].prototype.isHooked) {
                            console.log("No function is hooked on");
                            return false;
                        }
                        _context[_funcName] = _context['realFunc' + _funcName];
                        delete _context['realFunc_' + _funcName];
                        return true;
                    }
                },
                cleanEnv: function () {
                    if (Function.prototype.hasOwnProperty("hook")) {
                        delete Function.prototype.hook;
                    }
                    if (Function.prototype.hasOwnProperty("unhook")) {
                        delete Function.prototype.unhook;
                    }
                    return true;
                }
            };
        }
 
        var hook = Hooks();
        hook.initEnv();
 
        // 这个是要执行的正常的函数
        function test() {
            alert(arguments[0]);
        }
 
        // 这个是钩子函数。此钩子函数内心戏：
        // 我只喜欢test函数，所以我必须出现在她前面（在她前面执行），这样她才能看到我。
        function hookFunc() {
            alert('hookFunc');
        }
 
        // hookFunc钩住test
        test.hook(test, hookFunc, window);
 
        window.onload = function () {
            // 由于钩子函数hookFunc钩住了test函数，所以test执行时，会先执行hookFunc。
            test("haha");
        }

