class Flatmates
{
  constructor(area,sortFlg=true,page=false){
	this.area = area?area:'';
	this.sort = sortFlg?sortFlg:true;
	this.page = page?page:false;
  }

  getUrl(){
	return this.createUrl();
  }

  createUrl () {
	return `https://flatmates.com.au/rooms/${this.area}/${this.sort?'newest?search_source=search_function':''}`;
  }

  filterResponse(responseDom){
	const hrefs = responseDom.window.document.querySelectorAll("a.styles__tileLink___1JJi8");
	const urls = []
	Array.from(hrefs).forEach((v,i)=>{
		const href = v.getAttribute('href');
		urls.push("https://flatmates.com.au/"+href);
	});
	return urls;
  }
}

export default Flatmates;