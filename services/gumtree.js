class Gumtree
{
  constructor(keyword,code,type,distance,category,area,price,sort,airconditioning){
	// uri
	this.keyword = keyword?keyword:'';
	this.code = code?code:"k0c18320l3004948"; //4870=cairns
	this.type = type?type:"van";
	this.distance = distance?distance:"r50";
	this.category = category?category:"s-cars-vans-utes";
	this.area = area?area:"cairns-cairns"
	
	// params
	this.price = price?price:"5000.00__15000.00";
	this.sort = sort?sort:""; // default:most recent. options:rank,price_asc,price_desc,closest,carmileageinkms_a(low to high),carmileageinkms_d(high to low),caryear_a(low to high), caryear_d(high to low)
	this.airconditioning = airconditioning?airconditioning:"y"

	// crawling selector
	this.title_selectors = "user-ad-row-new-design__title-span";
	this.uri_selectors = "a.user-ad-row-new-design";
  }

getUrl(){
	return this.createUrl();
  }

  createUrl () {
	return `https://www.gumtree.com.au/${this.category}/${this.area}/${this.type}/${this.code}${this.distance}${this.price?`?price=${this.price}`:""}${!this.price&&this.sort?`&sort=${this.sort}`:""}&airconditioning=y`;
  }

  filterResponse(responseDom){
	const hrefs = responseDom.window.document.querySelectorAll(this.uri_selectors);
	let res = "";
	Array.from(hrefs).forEach((v,i)=>{
		const href = v.getAttribute('href');
		const labels = v.getAttribute('aria-label');
		res += `desc : ${labels} url : https://gumtree.com.au/${href} \n`;
	});
	return res;
  }
  
}

export default Gumtree;
