let photoPath = [
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PA321147-NARUTOPUFFERJACKET_1024x1024.jpg?v=1623693168',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PA321148-NARUTOBOMBERJACKET-B_1024x1024.jpg?v=1623693726',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PAPFA2189-ITACHISHARINGANHOOD-BRGNDY-F_1024x1024.jpg?v=1623702424',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PA321245-OROCHIMARUWASHEDHOOD-BLK-B_1024x1024.jpg?v=1623693967',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PAPFA2169-OROCHIMARUWASHEDTEE-BLK_1024x1024.jpg?v=1623694969',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PAPFA2172-SIXPATHSLONGLSLEEVETEE-BLK-B_1024x1024.jpg?v=1623699354',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PAPFA2188-SASUKEBLADEHOOD-BLK-B_1024x1024.jpg?v=1623701564',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PA321553_OROCHIMARU_WASHED_SWEATPANT_1024x1024.jpg?v=1623694122',
];

let photoPath2 = [
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PAPFA2156-KAKASHIDOGSSQUADLSTEE-BLK-B_1024x1024.jpg?v=1623699154',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PAPFA2170-SIXPATHSTEE-BLK-B_1024x1024.jpg?v=1623695390',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PAPFA2171-SASUKEBLADETEE-BLK-B_1024x1024.jpg?v=1623695662',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PAPFA2150-ITACHISHARINGANTEE-BLK-F_1024x1024.jpg?v=1623698778',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PAPFA2145-FINALFIGHTTEE-BLK-F_1024x1024.jpg?v=1623698954',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PA321A126-SIXPATHSFLAG-SLATE_1024x1024.jpg?v=1627512237',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PA321A123-OROCHIMARUFLAG-BLK_1024x1024.jpg?v=1627512006',
    'https://cdn.shopify.com/s/files/1/0342/5665/products/PA321A114-NARUTOPOWERTRAY_1024x1024.jpg?v=1623702966',
]

window.onload = function refreshProductPhoto() {
    //Getting a random index
    randomIndex = Math.floor(Math.random() * photoPath.length);

    //Setting image paths
    let featuredPath = 'url(' + photoPath[randomIndex];
    let featuredPath2 = 'url(' + photoPath2[randomIndex];

    //Settings all background style rules for product 1
    document.getElementById("featured-product-1").style.background = featuredPath;
    document.getElementById("featured-product-1").style.backgroundPosition = 'center';
    document.getElementById("featured-product-1").style.backgroundSize = '24rem';
    document.getElementById("featured-product-1").style.backgroundRepeat = 'no-repeat';
    //Settings all background style rules for product 2
    document.getElementById("featured-product-2").style.background = featuredPath2;
    document.getElementById("featured-product-2").style.backgroundPosition = 'center';
    document.getElementById("featured-product-2").style.backgroundSize = '24rem';
    document.getElementById("featured-product-2").style.backgroundRepeat = 'no-repeat';
}