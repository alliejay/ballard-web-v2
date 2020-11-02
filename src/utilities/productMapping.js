import React from 'react';
import { forEach as _forEach, find as _find } from 'lodash';
import honda6vt from '../img/products/honda-6vt.jpeg';
import honda12vt from '../img/products/honda12vt.jpeg';
import yamaha12vt from '../img/products/yamaha12vt.jpeg';
import hondaGrizzly from '../img/products/hondaGrizzly12vt.jpeg';
import disneyPrincess from '../img/products/disneyPrincess.jpeg';
import disneyFrozen from '../img/products/disneyFrozen.jpeg';
import disneySofia from '../img/products/disneySofia.jpeg';
import minnieMouse from '../img/products/minnieMouse.jpeg';
import thunderTank from '../img/products/thunderTank.jpeg';
import disneyFrozen6 from '../img/products/disneyFrozen6.jpeg';
import disneyFrozenScooter from '../img/products/disneyFrozenScooter.jpeg';
import hondaScooter from '../img/products/honda6vtScooter.jpeg';
import disneyFrozenSleigh from '../img/products/frozensleigh.jpeg';
import batMobile from '../img/products/batmobile.jpeg';
import batMobile6 from '../img/products/batmobile6vt.jpeg';
import seaScooter from '../img/products/seascooter.jpeg';
import yamahaXYZ from '../img/products/yamaha12vtXYZ.jpeg';
import yamahaViking from '../img/products/yamahaViking.jpeg';
import hondaBlack6 from '../img/products/hondaBlack6vt.jpeg';
import hondaBlack12 from '../img/products/hondaBlack12.jpeg';
import yamaha16in from '../img/products/yamaha16in.jpeg';
import yamaha12in from '../img/products/yamaha12in.jpeg';
import batman16in from '../img/products/batman16in.jpeg';
import batman12in from '../img/products/batman12in.jpeg';
import wonderWoman16in from '../img/products/wonderWoman16in.jpeg';
import columbiaTeton20 from '../img/products/columbiaTeton20_2.png';
import columbiaHybrid700 from '../img/products/columbiaHybrid700.png';

const productName = "productName";
const productImage = "productImage";
const walmartLink = "walmartLink";
const dunhamLink = "dunhamLink";
const assemblyVideo = "assemblyVideo";
export const eros = "electricRideOns";
export const bikes = "bikes";
const videoEmbed = "videoEmbed";
const assemblyGuide = "assemblyGuide";
const itemPosition = "itemPosition";

const HONDA_EROS = [
  {
    [productName]: "12 VOLT HONDA TALON UTV",
    [productImage]: honda12vt,
    [walmartLink]: "https://www.walmart.com/ip/12-VOLT-HONDA-TALON-UTV-Honda-Official-Licensed-Product/577126686?irgwc=1&sourceid=imp_TVn1NExR0xyLTOdwUx0Mo38KUkExSdxJo0F:0Y0&veh=aff&wmlspartner=imp_1911725&clickid=TVn1NExR0xyLTOdwUx0Mo38KUkExSdxJo0F:0Y0&sharedid=test",
    [assemblyGuide]: 'manuals/assembly/honda12v.pdf',
    [itemPosition]: 6
  },
  {
    [productName]: "6 Volt Honda Metropolitan Pink Battery Powered Ride-on",
    [productImage]: hondaScooter,
    [walmartLink]: "https://www.walmart.com/ip/6-Volt-Honda-Metropolitan-Pink-Battery-Powered-Ride-on-Perfect-for-your-darling-little-girl/883630988?athcpid=883630988&athpgid=athenaItemPage&athcgid=null&athznid=PWVUB&athieid=v0&athstid=CS020&athguid=7928bce8-007-175425412cc12d&athancid=null&athena=true",
    [itemPosition]: -2
  },
  {
    [productName]: "6 Volt Black Honda TRX Battery Powered Ride-On ATV",
    [productImage]: hondaBlack6,
    [walmartLink]: "https://www.walmart.com/ip/6-Volt-Black-Honda-TRX-Battery-Powered-Ride-On-ATV/495925421",
    [itemPosition]: 5
  },
  {
    [productName]: "12 Volt Honda Black TRX Battery Powered Ride-On",
    [productImage]: hondaBlack12,
    [walmartLink]: "https://www.walmart.com/ip/12-Volt-Honda-Black-TRX-Battery-Powered-Ride-On/399851452",
    [itemPosition]: 4
  }
];

const HONDA_PRODUCTS = {
  [eros]: HONDA_EROS
};

const YAMAHA_EROS = [
  {
    [productName]: "12 Volt Yamaha Raptor Battery Powered Ride-on Black/Green",
    [productImage]: yamaha12vt,
    [walmartLink]: "https://www.walmart.com/ip/12-Volt-Yamaha-Raptor-Battery-Powered-Ride-on-Black-Green-New-Custom-Graphic-Design/861364225",
    [assemblyGuide]: 'manuals/assembly/yamaha12v.pdf',
    [itemPosition]: 8
  },
  {
    [productName]: "12 Volt Yamaha Grizzly Blue",
    [productImage]: hondaGrizzly,
    [walmartLink]: "https://www.walmart.com/ip/12-Volt-Yamaha-Grizzly-Blue/673924141?athcpid=673924141&athpgid=athenaItemPage&athcgid=null&athznid=PWVUB&athieid=v0&athstid=CS020&athguid=f2d02ede-007-1754252a8b7264&athancid=null&athena=true",
    [itemPosition]: 0
  },
  {
    [productName]: "12 Volt Yamaha YXZ Battery Powered Ride-On",
    [productImage]: yamahaXYZ,
    [walmartLink]: "https://www.walmart.com/ip/12-Volt-Yamaha-YXZ-Battery-Powered-Ride-On-Aggressive-Design-for-serious-Off-Road-Fun/55627504",
    [itemPosition]: -1
  },
  {
    [productName]: "6 Volt Yamaha Viking Battery Powered Ride-On",
    [productImage]: yamahaViking,
    [walmartLink]: "https://www.walmart.com/ip/6-Volt-Yamaha-Viking-Battery-Powered-Ride-On-Hours-of-fun-with-this-kid-size-UTV/52674911",
    [itemPosition]: 0
  }
];

const YAMAHA_BIKES = [
  {
    [productName]: 'Yamaha 16" Moto BMX Boys Bike',
    [productImage]: yamaha16in,
    [walmartLink]: "https://www.walmart.com/ip/Yamaha-16-Moto-BMX-Boys-Bike-Blue/21616169?wmlspartner=wlpa&selectedSellerId=0&adid=22222222222016073267&wmlspartner=wmtlabs&wl0=e&wl1=s&wl2=c&wl3=10374944981&wl4=pla-1105723423981&wl12=21616169_0&wl14=walmart%20yamaha%20bike&veh=sem&msclkid=e26ff0727bb117847151afebdedfc5ac",
    [itemPosition]: 0
  },
  {
    [productName]: 'Yamaha 12" Moto BMX Boys Bike',
    [productImage]: yamaha12in,
    [walmartLink]: "https://www.walmart.com/ip/Yamaha-12-Moto-BMX-Boys-Bike-Blue/17242520?wmlspartner=wlpa&selectedSellerId=0&adid=22222222222014286765&wmlspartner=wmtlabs&wl0=e&wl1=s&wl2=c&wl3=10354037913&wl4=pla-1105703855993&wl12=17242520_0&wl14=walmart%20yamaha%20bike&veh=sem&msclkid=721fce83a6b91b89f726911a03d7f31f",
    [itemPosition]: 0
  }
];


const YAMAHA_PRODUCTS = {
  [eros]: YAMAHA_EROS,
  [bikes]: YAMAHA_BIKES
};


const DISNEY_EROS = [
  {
    [productName]: "Disney Princess Mercedes 6-Volt Battery Powered Ride-On",
    [productImage]: disneyPrincess,
    [walmartLink]: "https://www.walmart.com/ip/Disney-Princess-Mercedes-6-Volt-Battery-Powered-Ride-On-Perfect-for-your-little-Princess/842112795",
    [itemPosition]: 3
  },
  {
    [productName]: "Disney Frozen Convertible Car 6-Volt Battery-Powered Ride-On",
    [productImage]: disneyFrozen,
    [walmartLink]: "https://www.walmart.com/ip/Disney-Frozen-Convertible-Car-6-Volt-Battery-Powered-Ride-On/37312935?athcpid=37312935&athpgid=athenaItemPage&athcgid=null&athznid=PWVUB&athieid=v0&athstid=CS020&athguid=13236ddb-007-1754250813b751&athancid=null&athena=true",
    [itemPosition]: 2
  },
  {
    [productName]: "Disney Sofia the First Convertible Car 6-Volt Battery-Powered Ride-On",
    [productImage]: disneySofia,
    [walmartLink]: "https://www.walmart.com/ip/Disney-Sofia-the-First-Convertible-Car-6-Volt-Battery-Powered-Ride-On/25414430?athcpid=25414430&athpgid=athenaItemPage&athcgid=null&athznid=PWVUB&athieid=v0&athstid=CS020&athguid=86379c4a-007-17542517cb31bc&athancid=null&athena=true",
    [itemPosition]: 1
  },
  {
    [productName]: "12 Volt Minnie Mouse Mercedes GLS-320 Battery Powered Ride-On",
    [productImage]: minnieMouse,
    [walmartLink]: "https://www.walmart.com/ip/12-Volt-Minnie-Mouse-Mercedes-GLS-320-Battery-Powered-Ride-On/139212311?irgwc=1&sourceid=imp_TVn1NExR0xyLTOdwUx0Mo38KUkExSYXJo0F:0Y0&veh=aff&wmlspartner=imp_1911725&clickid=TVn1NExR0xyLTOdwUx0Mo38KUkExSYXJo0F:0Y0&sharedid=test",
    [itemPosition]: 0
  },
  {
    [productName]: "Disney Frozen Mercedes 6-Volt Battery Powered Ride-On",
    [productImage]: disneyFrozen6,
    [walmartLink]: "https://www.walmart.com/ip/Disney-Frozen-Mercedes-6-Volt-Battery-Powered-Ride-On-Perfect-For-Your-Little-Elsa-or-Anna/55627507?irgwc=1&sourceid=imp_TVn1NExR0xyLTOdwUx0Mo38KUkExSd3lo0F:0Y0&veh=aff&wmlspartner=imp_1911725&clickid=TVn1NExR0xyLTOdwUx0Mo38KUkExSd3lo0F:0Y0&sharedid=test",
    [itemPosition]: 0
  },
  {
    [productName]: "6 Volt Disney Frozen 3-Wheel Scooter Battery Powered Ride-On",
    [productImage]: disneyFrozenScooter,
    [walmartLink]: "https://www.walmart.com/ip/6-Volt-Disney-Frozen-3-Wheel-Scooter-Battery-Powered-Ride-On/52674914?athcpid=52674914&athpgid=athenaItemPage&athcgid=null&athznid=PWVUB&athieid=v0&athstid=CS020&athguid=27d5dfe0-007-1754253cdd895f&athancid=null&athena=true",
    [itemPosition]: 0
  },
  {
    [productName]: "Disney Frozen Sleigh 12-Volt Battery Powered Ride-On",
    [productImage]: disneyFrozenSleigh,
    [walmartLink]: "https://www.walmart.com/ip/Disney-Frozen-Sleigh-12-Volt-Battery-Powered-Ride-On-for-your-little-Elsa-and-Anna-Hours-of-Fun/440160665?athcpid=440160665&athpgid=athenaItemPage&athcgid=null&athznid=PWVAV&athieid=v0&athstid=CS020&athguid=e455f5e2-007-1754254c218768&athancid=null&athena=true",
    [itemPosition]: -3
  }
];

const DISNEY_PRODUCTS = {
  [eros]: DISNEY_EROS,
};

const THUNDER_TANK_EROS = [
  {
    [productName]: "24 Volt Thunder Tank Ride-On With Working Cannon and Rotating Turret",
    [productImage]: thunderTank,
    [walmartLink]: "https://www.walmart.com/ip/NEW-WALMART-EXCLUSIVE-24-Volt-Thunder-Tank-Ride-On-With-Working-Cannon-and-Rotating-Turret/204394575?athcpid=204394575&athpgid=athenaItemPage&athcgid=null&athznid=PWVAV&athieid=v0&athstid=CS020&athguid=e917c4fe-007-175425342f7517&athancid=null&athena=true",
    [itemPosition]: 7,
    [assemblyGuide]: 'manuals/assembly/thunder_tank.pdf',
  },
];

const THUNDER_TANK_PRODUCTS = {
  [eros]: THUNDER_TANK_EROS,
};

const BATMAN_EROS = [
  {
    [productName]: "6 Volt DC Comics Batman Batmobile Battery Powered Ride-on",
    [productImage]: batMobile,
    [walmartLink]: "https://www.walmart.com/ip/6-Volt-DC-Comics-Batman-Batmobile-Battery-Powered-Ride-on-Features-Light-up-Cannons-and-Sounds/513873743",
    [itemPosition]: 0
  },
  {
    [productName]: "Batman Batmobile 6-Volt Battery-Powered Ride-On",
    [productImage]: batMobile6,
    [walmartLink]: "https://www.walmart.com/ip/Batman-Batmobile-6-Volt-Battery-Powered-Ride-On/53341544?athcpid=53341544&athpgid=athenaItemPage&athcgid=null&athznid=PWVUB&athieid=v0&athstid=CS020&athguid=a155d614-008-17542590d9f64d&athancid=null&athena=true",
    [itemPosition]: 0
  },
];

//TODO change to DC_COMICS
const BATMAN_BIKES = [
  {
    [productName]: 'DC Comics 16" Batman Boys Bike',
    [productImage]: batman16in,
    [walmartLink]: "https://www.walmart.com/ip/DC-Comics-16-Batman-Boys-Bike/379787122",
    [itemPosition]: 0
  },
  {
    [productName]: 'DC Comics 12" Batman Boys Bike',
    [productImage]: batman12in,
    [walmartLink]: "https://www.walmart.com/ip/DC-Comics-12-Batman-Boys-Bike/251527546",
    [itemPosition]: 0
  },
  {
    [productName]: "16 Inch Wonder Woman Girl's Bike",
    [productImage]: wonderWoman16in,
    [walmartLink]: "https://www.walmart.com/ip/16-Inch-Wonder-Woman-Girl-s-Bike-Give-the-neighborhood-some-Girl-Power/366173863",
    [itemPosition]: 0
  }
];

const BATMAN_PRODUCTS = {
  [eros]: BATMAN_EROS,
  [bikes]: BATMAN_BIKES
};

const SEA_SCOOTER_EROS = [
  {
    [productName]: "12 Volt SEASCOOTER - Battery Powered Ride-On Water Toy",
    [productImage]: seaScooter,
    [walmartLink]: "https://www.walmart.com/ip/12-Volt-SEASCOOTER-Exciting-New-Wal-Mart-Exclusive-Battery-Powered-Ride-On-Water-Toy/945884402",
    [itemPosition]: 9
  },
];

const SEA_SCOOTER_PRODUCTS = {
  [eros]: SEA_SCOOTER_EROS,
};

const COLUMBIA_BIKES = [
  {
    [productName]: 'Columbia Boys 20" Teton Dual Suspension Bike',
    [productImage]: columbiaTeton20,
    [dunhamLink]: "https://www.dunhamssports.com/product/boys_20_teton_dual_suspension_bike/W0000074810.html#q=columbia%2Bbike&lang=en_US&start=1",
    [itemPosition]: 0
  },
  {
  [productName]: 'Columbia Mens 700c Dual Hybrid Mountain Bicycle',
    [productImage]: columbiaHybrid700,
    [dunhamLink]: "https://www.dunhamssports.com/product/mens_700c_dual_hybrid_mountain_bicycle/W0000091232.html#q=columbia%2Bbike&lang=en_US&start=2",
    [itemPosition]: 0
}
];

const COLUMBIA_PRODUCTS = {
  [bikes]: COLUMBIA_BIKES,
};


//************************ COMPILE PRODUCT LISTS

export const PARENT_COMPANIES = [
  {
    name: "Action Wheels",
    productList: [HONDA_PRODUCTS, YAMAHA_PRODUCTS, DISNEY_PRODUCTS, THUNDER_TANK_PRODUCTS, BATMAN_PRODUCTS, SEA_SCOOTER_PRODUCTS]
  },
  {
    name: "Columbia",
    productList: [COLUMBIA_PRODUCTS]
  }
];

export const BRANDS = [
  {
    name: "Columbia",
    productList: [COLUMBIA_PRODUCTS]
  },
  {
    name: "DC Comics",
    productList: [BATMAN_PRODUCTS]
  },
  {
    name: "Disney",
    productList: [DISNEY_PRODUCTS]
  },
  {
    name: "Honda",
    productList: [HONDA_PRODUCTS]
  },
  {
    name: "SeaScooter",
    productList: [SEA_SCOOTER_PRODUCTS]
  },
  {
    name: "Thunder Tank",
    productList: [THUNDER_TANK_PRODUCTS]
  },
  {
    name: "Yamaha",
    productList: [YAMAHA_PRODUCTS]
  }
];

// function that turns that info into useful array/obj
export const transformData = (category, target, productType = null) => {
  let searchList = PARENT_COMPANIES;
  let data = [];
  let productList = {
    [eros]: [],
    [bikes]: []
  };
  let productTypes = ['all'];

  // category can be parent company or brand
  // target can be products or assembly videos
  // productType is optional - can be eros or bikes, if nothing return all

  if(category == "Select Brand") {
    _forEach(PARENT_COMPANIES, (company) => {
      _forEach(company.productList, (item) => {
        _forEach(item[eros], (ero) => {
          productList[eros].push(ero)
        });

        _forEach(item[bikes], (bike) => {
          productList[bikes].push(bike)
        })
      })
    });
  }

  _forEach(PARENT_COMPANIES, (company) => {
    if(company.name == category) {
      searchList = PARENT_COMPANIES;
      _forEach(company.productList, (item) => {
        _forEach(item[eros], (ero) => {
          productList[eros].push(ero)
        });

        _forEach(item[bikes], (bike) => {
          productList[bikes].push(bike)
        })
      })
    }
  });

  _forEach(BRANDS, (brand) => {
    if(brand.name == category) {
      searchList = BRANDS;
      productList = _find(searchList, {'name': category}).productList[0];
    }
  });

  _forEach(productList, (products, productKey) => {
    productTypes.push(productKey);

    if(productType == productKey) {
      _forEach(products, (product) => {
        if(target == "products") {
          let item = {
            name: product[productName],
            image: product[productImage],
            walmartLink: product[walmartLink],
            dunhamLink: product[dunhamLink],
            assemblyVideo: product[assemblyVideo],
            assemblyGuide: product[assemblyGuide],
            itemPosition: product[itemPosition]
          };
          data.push(item)
        } else if(target == "videos") {
          let video = {
            name: product[productName],
            assemblyVideo: product[assemblyVideo],
            videoEmbed: product[videoEmbed]
          };
          data.push(video)
        }
      })
    } else if(productType == "all") {
      _forEach(products, (product) => {
        if(target == "products") {
          let item = {
            name: product[productName],
            image: product[productImage],
            walmartLink: product[walmartLink],
            dunhamLink: product[dunhamLink],
            assemblyVideo: product[assemblyVideo],
            assemblyGuide: product[assemblyGuide],
            itemPosition: product[itemPosition]
          };
          data.push(item)
        } else if(target == "videos") {
          let video = {
            name: product[productName],
            assemblyVideo: product[assemblyVideo],
            videoEmbed: product[videoEmbed]
          };
          data.push(video)
        }
      })
    }

  });


  if(productTypes.length < 3) {
    productTypes.shift();
  }

  return {
    productTypes,
    data
  };
};
