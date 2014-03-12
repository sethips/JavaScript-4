var Singleton = (function(){
	var random;
	var instance;

	return {
		getInstance : function(){
			if (!instance) {
                instance = this;
            }
            return instance;
		},
		getRandomNumber : function(){
			return random = random || Math.random();
		}
	}
})();

a = Singleton.getInstance();
b = Singleton.getInstance();

console.log(a == b ? "Same instance..." : "Not the same instance!");