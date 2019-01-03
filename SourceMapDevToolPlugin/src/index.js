import { name } from './a';

function greeting(name) {
	if(name) throw '123';
	console.log('hello ' + name + '!');
}

class Person {
	sayHello() {
		Object.assign({}, {a:2}, {b:3});
	}
}

greeting(name);
