import { argv } from 'node:process';
import fetch from "node-fetch";
import jsdom from "jsdom";
const { JSDOM } = jsdom;
import Flatmates from './services/flatmates.js';
import Gumtree from './services/gumtree.js';
import serviceList from './config/index.js';

const srv = createInstances();
const requestUrl = srv.getUrl();
const response = await crawling(requestUrl);
const contents = srv.filterResponse(response);
sendSMS(contents);

// send sms with urls
function createInstances(){
	const service = argv[2];
	const condition = argv[3];
	const sort = argv[4]?true:false;
	switch(service){
		case "flatmates":
			return new Flatmates(condition,sort);
		case "gumtree":
			return new Gumtree();
	}
}

async function sendSMS (contents) {
	const res = await fetch(serviceList['awsAPI'],{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(contents)
	});
}

async function crawling(requestUrl){
	const res = await fetch(requestUrl);
	const body = await res.text();
	const dom = new JSDOM(body); // パース
	return dom;
}