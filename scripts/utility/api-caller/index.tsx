import {IApi} from "../../types/iapi.d";

class ApiCaller<T> {
	private controller;
	private promise;
	constructor (data:IApi) {
		this.controller = new AbortController();
		const signal = new AbortController().signal;
		const {url, method} = data;
		this.promise = new Promise<T>((resolve, reject) => {
			fetch(url, {method, signal})
				.then((response) => response.json())
				.then((value) => {
					resolve(value);
				})
				.catch((error) => {
					reject(error);
				});
		});
		
	}
	public success (successCallback:(data:T) => void):ApiCaller<T> {
		this.promise = this.promise.then(successCallback);
		return this;
	}
	public failure (failureCallback:() => void):ApiCaller<T> {
		this.promise = this.promise.catch(failureCallback);
		return this;
	}
	public getPromise ():Promise<T> {
		return this.promise;
	}
	public abort ():void {
		this.controller.abort();
	}
}


export default ApiCaller;