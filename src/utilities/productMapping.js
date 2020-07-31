import { forEach as _forEach, find as _find } from 'lodash';

const productName = "productName";
const productImage = "productImage";
const walmartLink = "walmartLink";
const assemblyVideo = "assemblyVideo";
const eros = "electricRideOns";
const bikes = "bikes";

const HONDA_EROS = [
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

const HONDA_BIKES = [
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

const HONDA_PRODUCTS = {
  [eros]: HONDA_EROS,
  [bikes]: HONDA_BIKES
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
  let searchList;
  let data = [];

  // category can be parent company or brand
  // target can be products or assembly videos
  // productType is optional - can be eros or bikes, if nothing return all

  _forEach(PARENT_COMPANIES, (company) => {
    if(company == category) {
      searchList = PARENT_COMPANIES;
    }
  });

  _forEach(BRANDS, (brand) => {
    if(brand == category) {
      searchList = BRANDS;
    }
  });

  const productList = _find(searchList, {'name': category}).productList;
  _forEach(productList, (productKey, products) => {
    if(productType == productKey) {
      _forEach(products, (product) => {
        if(target == "products") {
          let product = {
            name: product[productName],
            image: product[productImage],
            walmartLink: product[walmartLink]
          };
          data.push(product)
        } else if(target == "videos") {
          let video = {
            name: product[productName],
            assemblyVideo: product[assemblyVideo]
          };
          data.push(video)
        }
      })
    } else {
      _forEach(products, (product) => {
        if(target == "products") {
          let product = {
            name: product[productName],
            image: product[productImage],
            walmartLink: product[walmartLink]
          };
          data.push(product)
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
