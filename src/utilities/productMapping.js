import { forEach as _forEach, find as _find } from 'lodash';
import honda6vt from '../img/products/honda-6vt.jpeg';
import honda12vt from '../img/products/honda12vt.jpeg';

const productName = "productName";
const productImage = "productImage";
const walmartLink = "walmartLink";
const assemblyVideo = "assemblyVideo";
export const eros = "electricRideOns";
export const bikes = "bikes";

const HONDA_EROS = [
  {
    [productName]: "6 Volt Black Honda TRX Battery Powered Ride-On ATV",
    [productImage]: honda6vt,
    [walmartLink]: "https://www.walmart.com/ip/6-Volt-Black-Honda-TRX-Battery-Powered-Ride-On-ATV/495925421",
    [assemblyVideo]: ""
  },
  {
    [productName]: "12 VOLT HONDA TALON UTV - Honda Official Licensed Product",
    [walmartLink]: "https://www.walmart.com/ip/12-VOLT-HONDA-TALON-UTV-Honda-Official-Licensed-Product/577126686",
    [productImage]: honda12vt,
    [assemblyVideo]: ""
  }
];

const HONDA_PRODUCTS = {
  [eros]: HONDA_EROS
};

const YAMAHA_EROS = [
  {
    [productName]: "6 Volt Black Honda TRX Battery Powered Ride-On ATV",
    [productImage]: "",
    [walmartLink]: "",
    [assemblyVideo]: ""
  },
  {
    [productName]: "12 VOLT HONDA TALON UTV - Honda Official Licensed Product",
    [walmartLink]: "https://www.walmart.com/ip/12-VOLT-HONDA-TALON-UTV-Honda-Official-Licensed-Product/577126686",
    [productImage]: "",
    [assemblyVideo]: ""
  }
];

const YAMAHA_BIKES = [
  {
    [productName]: "6 Volt Black Honda TRX Battery Powered Ride-On ATV",
    [productImage]: "",
    [walmartLink]: "",
    [assemblyVideo]: ""
  },
  {
    [productName]: "12 VOLT HONDA TALON UTV - Honda Official Licensed Product",
    [walmartLink]: "https://www.walmart.com/ip/12-VOLT-HONDA-TALON-UTV-Honda-Official-Licensed-Product/577126686",
    [productImage]: "",
    [assemblyVideo]: ""
  }
];


const YAMAHA_PRODUCTS = {
  [eros]: YAMAHA_EROS,
  [bikes]: YAMAHA_BIKES
};

export const PARENT_COMPANIES = [
  {
    name: "Action Wheels",
    productList: [HONDA_PRODUCTS, YAMAHA_PRODUCTS]
  }
];

export const BRANDS = [
  {
    name: "Honda",
    productList: [HONDA_PRODUCTS]
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
  let productList = [];

  console.log("category", category)
  console.log("target", target)
  console.log("productType", productType)

  // category can be parent company or brand
  // target can be products or assembly videos
  // productType is optional - can be eros or bikes, if nothing return all

  if(category == "Select Brand") {
    _forEach(PARENT_COMPANIES, (company) => {
        productList.push(company.productList[0])
    });
  }

  _forEach(PARENT_COMPANIES, (company) => {
    if(company.name == category) {
      searchList = PARENT_COMPANIES;
      productList = _find(searchList, {'name': category}).productList;
    }
  });

  _forEach(BRANDS, (brand) => {
    if(brand.name == category) {
      searchList = BRANDS;
      productList = _find(searchList, {'name': category}).productList;
    }
  });


  _forEach(productList[0], (products, productKey) => {
    if(productType == productKey) {
      _forEach(products, (product) => {
        if(target == "products") {
          let item = {
            name: product[productName],
            image: product[productImage],
            walmartLink: product[walmartLink]
          };
          console.log("item", item)
          data.push(item)
        } else if(target == "videos") {
          let video = {
            name: product[productName],
            assemblyVideo: product[assemblyVideo]
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
            walmartLink: product[walmartLink]
          };
          console.log("item", item)
          data.push(item)
        } else if(target == "videos") {
          let video = {
            name: product[productName],
            assemblyVideo: product[assemblyVideo]
          };
          data.push(video)
        }
      })
    }

  });

  return data;
};
