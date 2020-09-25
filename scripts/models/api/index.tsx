import {
	IApi, 
	Methods
} from "../../types/iapi.d";
import {BASE_URL} from "const";


class Api implements IApi{
	public name;
	public method;
	public url;
	constructor (name:string,method:Methods,url:string) {
		this.name = name;
		this.method = method;
		this.url = BASE_URL + url;
	}
}

class SummaryApi extends Api {
	constructor(){
		super("getSummary", Methods.GET, "summary");
	}
}

export default {
	SummaryApi,
};

export {
	SummaryApi
};