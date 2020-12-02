var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res,next){
 res.render('mekanlar-liste',{
 	'baslik':'Anasayfa',
 	'sayfaBaslik': {
 		'siteAd':'Mekan32',
 		'aciklama':'Isparta Civarındaki Mekanları Keşfedin!!'
 	},
 	'mekanlar':[
 	{
 		'ad':'Starbucks',
 		'adres':'Centrum Garden AVM',
 		'puan':3,
 		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
 		'mesafe':'10 km'
 	},
 	 {
 	 	'ad':'Kyk Kantini',
 	 	'adres':'Centrum Garden AVM',
 	 	'puan':0,
 	 	'imkanlar':['Yok','YOK','YOOOKK'],
 	 	'mesafe':'10.4 km'
 	 },
 	 {
 	 	'ad':'Türk Kahvesi',
 	 	'adres':'Fatih Mah.',
 	 	'puan':3,
 	 	'imkanlar':['Türk kahvesi','Çay','Kahveler'],
 	 	'mesafe':'19 km'
 	 },
 	 {
 	 	'ad':'Çay ocağı',
 	 	'adres':'İyaş Park AVM',
 	 	'puan':2,
 	 	'imkanlar':['Türk Kahvesi','Poğaça','Çay'],
 	 	'mesafe':'18 km'
 	 },
 	 {
 	 	'ad':'Burger King',
 	 	'adres':'Fatih Mah. İyaş Park AVM karşısı',
 	 	'puan':5,
 	 	'imkanlar':['Nugget','Hamburger','Tatlılar'],
 	 	'mesafe':'10.4 km'
 	 }
 	]
 });
}

const mekanBilgisi=function(req,res,next){
 res.render('mekan-detay',{
 	'baslik':'Mekan Bilgisi',
 	'sayfaBaslik':'Starbucks',
 	'mekanBilgisi':{
 		'ad':'Starbucks',
 		'adres':'Centrum Garden AVM',
 		'puan':3,
 		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
 		'koordinatlar':{
 			'enlem':'37.781835',
 			'boylam':'30.566034'
 		},
 		'saatler':[
 		  {
 			'gunler':'Pazartesi - Cuma ',
 			'acilis':' 07:00 ',
 			'kapanis':' 23:00 ',
 			'kapali':false
 		  },
 		  {
 			'gunler':'Cumartesi ',
 			'acilis':' 09:00 ',
 			'kapanis':' 22:00 ',
 			'kapali':false
 			
 		  },
 		  {
			'gunler':'Pazar ',
 			'kapali':true
 		
 		  }
 		],
 		'yorumlar':[
 		   {
 		   	 'yorumYapan':'Ahmet Kaan ŞENÖNDER',
 		   	 'puan':3,
 		   	 'tarih': '02.12.2020',
 		   	 'yorumMetni':'İce lattle favorim'
 		   },
 		   {
 		 	 'yorumYapan':'Armağan KENAR',
 		   	 'puan':3,
 		   	 'tarih': '27.11.2020',
 		   	 'yorumMetni':'kapitalist sistem'
 		   }
 		]
 	   }
 });
}

const yorumEkle=function(req,res,next){
 res.render('yorum-ekle',{title:'Yorum Ekle'});
}
module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}