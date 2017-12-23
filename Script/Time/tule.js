var url=window.location.href;
if(url&&url.indexOf('http://www.sogou.com/web?query=')==0)
{
	setInterval(function()
	{
		if(!$bj("#baidutule24").size())
		{
			$bj("#kmap_entity_div").after('<iframe id="baidutule24" src="http://www.tule24.com/interface/ads_300x250.html" width="300" height="250" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
		}
	},500);
}
else if(url&&url.indexOf('http://www.haosou.com/s')==0)
{
	setInterval(function()
	{
		if(!$bj("#baidutule24").size())
		{
			$bj("#so_ob").after('<iframe id="baidutule24" src="http://www.tule24.com/interface/ads_300x250.html" width="300" height="250" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
		}
	},500);
}
else if(url&&url.indexOf('http://www.hao123.com/')==0)
{
	$bj("#guesslikesite").prepend('<iframe src="http://www.tule24.com/interface/ads_728x90.html" width="728" height="90" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
}
else if(url&&url.indexOf('http://123.sogou.com/')==0)
{
	$bj("#right_2").prepend('<iframe src="http://www.tule24.com/interface/ads_728x90.html" width="728" height="90" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
}
else if(url&&url.indexOf('http://www.2345.com/')==0)
{
	$bj("#nav").append('<iframe src="http://www.tule24.com/interface/ads_728x90.html" width="728" height="90" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
}
else if(url&&url.indexOf('http://www.duba.com/')==0)
{
	$bj(".detail_box").prepend('<iframe src="http://www.tule24.com/interface/ads_728x90.html" width="728" height="90" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
}
else if(url&&url.indexOf('http://news.ifeng.com/')==0)
{
	$bj(".pic300").html('<iframe src="http://www.tule24.com/interface/ads_300x250.html" width="300" height="250" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
	$bj(".box01").html('<iframe src="http://www.tule24.com/interface/ads_300x250.html" width="300" height="250" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
	$bj(".bd_t5").prepend('<iframe src="http://www.tule24.com/interface/ads_300x250.html" width="300" height="250" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
}
else if(url&&url.indexOf('http://news.qq.com/')==0)
{
	$bj("#videoModBJ").html('<iframe src="http://www.tule24.com/interface/ads_300x250.html" width="300" height="250" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
	$bj(".about-video-foot").html('<iframe src="http://www.tule24.com/interface/ads_960x90.html" width="960" height="90" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
}
else if(url&&url.indexOf('http://news.163.com/')==0)
{
	$bj(".gg300:eq(0)").html('<iframe src="http://www.tule24.com/interface/ads_300x250.html" width="300" height="250" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
	$bj(".gg200x300").html('<iframe src="http://www.tule24.com/interface/ads_300x250.html" width="300" height="250" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
}
else if(url&&url.indexOf('http://news.sina.com.cn/')==0)
{
	$bj("#PublicRelation2").html('<iframe src="http://www.tule24.com/interface/ads_300x250.html" width="300" height="250" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
	$bj(".picLead").html('<iframe src="http://www.tule24.com/interface/ads_728x90.html" width="728" height="90" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
}
else if(url&&url.indexOf('http://news.sohu.com/')==0)
{
	$bj(".ad300").html('<iframe src="http://www.tule24.com/interface/ads_300x250.html" width="300" height="250" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');
}