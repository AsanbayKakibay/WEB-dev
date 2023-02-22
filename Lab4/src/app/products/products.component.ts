import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  items=[
    {
      name: "Смартфон Apple iPhone 14 Pro Max 1Tb серебристый",
      description: "технология NFC: Да\n" +
        "        цвет: серебристый\n" +
        "        тип экрана: OLED, Super Retina XDR\n" +
        "        display с возможностью постоянной работы\n" +
        "        диагональ: 6.7 дюйм\n" +
        "        размер оперативной памяти: 6 ГБ\n" +
        "        процессор: 6-ядерный Apple A16 Bionic\n" +
        "        объем встроенной памяти: 1024 ГБ\n" +
        "        емкость аккумулятора: 3095 мАч",
      raiting: "Raiting: 5",
      realPage: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-serebristyi-106363330/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hbf/63073764835358/apple-iphone-14-pro-max-128gb-serebristyj-106363330-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h90/63073765064734/apple-iphone-14-pro-max-128gb-serebristyj-106363330-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h37/63073765294110/apple-iphone-14-pro-max-128gb-serebristyj-106363330-3.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h5c/63073765523486/apple-iphone-14-pro-max-128gb-serebristyj-106363330-4.jpg"
      ]
    },
    {
      name: "Смартфон Apple iPhone 14 Pro Max 1Tb черный",
      description: "технология NFC: Да\n" +
        "        цвет: черный\n" +
        "        тип экрана: OLED, Super Retina XDR\n" +
        "        display с возможностью постоянной работы\n" +
        "        диагональ: 6.7 дюйм\n" +
        "        размер оперативной памяти: 6 ГБ\n" +
        "        процессор: 6-ядерный Apple A16 Bionic\n" +
        "        объем встроенной памяти: 1024 ГБ\n" +
        "        емкость аккумулятора: 3095 мАч",
      raiting: "Raiting: 5",
      realPage: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-chernyi-106363295/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/hef/63073416904734/apple-iphone-14-pro-max-128gb-cernyj-106363295-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/hef/63073416904734/apple-iphone-14-pro-max-128gb-cernyj-106363295-1.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/h63/63073417363486/apple-iphone-14-pro-max-128gb-cernyj-106363295-3.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/h48/63073417592862/apple-iphone-14-pro-max-128gb-cernyj-106363295-4.jpg"
      ]
    },
    {
      name: "Смартфон Apple iPhone 14 Pro Max 1Tb золотистый",
      description: "технология NFC: Да\n" +
        "        цвет: золотой\n" +
        "        тип экрана: OLED, Super Retina XDR\n" +
        "        display с возможностью постоянной работы\n" +
        "        диагональ: 6.7 дюйм\n" +
        "        размер оперативной памяти: 6 ГБ\n" +
        "        процессор: 6-ядерный Apple A16 Bionic\n" +
        "        объем встроенной памяти: 1024 ГБ\n" +
        "        емкость аккумулятора: 3095 мАч",
      raiting: "Raiting: 5",
      realPage: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-zolotistyi-106363340/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/h30/63073977565214/apple-iphone-14-pro-max-128gb-zolotistyj-106363340-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h5d/63073977794590/apple-iphone-14-pro-max-128gb-zolotistyj-106363340-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h22/63073978023966/apple-iphone-14-pro-max-128gb-zolotistyj-106363340-3.jpg  ",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/hea/63073978253342/apple-iphone-14-pro-max-128gb-zolotistyj-106363340-4.jpg"
      ]
    },
    {
      name: "Смартфон Apple iPhone 14 Pro Max 1Tb фиолетовый",
      description: "технология NFC: Да\n" +
        "        цвет: фиолетовый\n" +
        "        тип экрана: OLED, Super Retina XDR\n" +
        "        display с возможностью постоянной работы\n" +
        "        диагональ: 6.7 дюйм\n" +
        "        размер оперативной памяти: 6 ГБ\n" +
        "        процессор: 6-ядерный Apple A16 Bionic\n" +
        "        объем встроенной памяти: 1024 ГБ\n" +
        "        емкость аккумулятора: 3095 мАч",
      raiting: "Raiting: 5",
      realPage: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-fioletovyi-106363345/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/he5/62948782407710/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h67/62948782637086/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/hc4/63073996177438/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-3.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hcd/63073996406814/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-4.jpg"
      ]
    },
    {
      name: "Смартфон Apple iPhone 14 Pro Max 1Tb Dual Sim серебристый",
      description: "технология NFC: Да\n" +
        "        цвет: серебристый\n" +
        "        тип экрана: OLED, Super Retina XDR\n" +
        "        display с возможностью постоянной работы\n" +
        "        диагональ: 6.7 дюйм\n" +
        "        размер оперативной памяти: 6 ГБ\n" +
        "        процессор: 6-ядерный Apple A16 Bionic\n" +
        "        объем встроенной памяти: 1024 ГБ\n" +
        "        емкость аккумулятора: 3095 мАч",
      raiting: "Raiting: 5",
      realPage: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-serebristyi-107116458/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hbf/63073764835358/apple-iphone-14-pro-max-128gb-serebristyj-106363330-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h90/63073765064734/apple-iphone-14-pro-max-128gb-serebristyj-106363330-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h37/63073765294110/apple-iphone-14-pro-max-128gb-serebristyj-106363330-3.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h5c/63073765523486/apple-iphone-14-pro-max-128gb-serebristyj-106363330-4.jpg"
      ]
    },
    {
      name: "Смартфон Apple iPhone 14 Pro Max 1Tb Dual Sim черный",
      description: "технология NFC: Да\n" +
        "        цвет: черный\n" +
        "        тип экрана: OLED, Super Retina XDR\n" +
        "        display с возможностью постоянной работы\n" +
        "        диагональ: 6.7 дюйм\n" +
        "        размер оперативной памяти: 6 ГБ\n" +
        "        процессор: 6-ядерный Apple A16 Bionic\n" +
        "        объем встроенной памяти: 1024 ГБ\n" +
        "        емкость аккумулятора: 3095 мАч",
      raiting: "Raiting: 5",
      realPage: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-chernyi-107116389/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/hef/63073416904734/apple-iphone-14-pro-max-128gb-cernyj-106363295-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/hef/63073416904734/apple-iphone-14-pro-max-128gb-cernyj-106363295-1.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/h63/63073417363486/apple-iphone-14-pro-max-128gb-cernyj-106363295-3.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/h48/63073417592862/apple-iphone-14-pro-max-128gb-cernyj-106363295-4.jpg"
      ]
    },
    {
      name: "Смартфон Apple iPhone 14 Pro Max 1Tb Dual Sim золотистый",
      description: "технология NFC: Да\n" +
        "        цвет: золотой\n" +
        "        тип экрана: OLED, Super Retina XDR\n" +
        "        display с возможностью постоянной работы\n" +
        "        диагональ: 6.7 дюйм\n" +
        "        размер оперативной памяти: 6 ГБ\n" +
        "        процессор: 6-ядерный Apple A16 Bionic\n" +
        "        объем встроенной памяти: 1024 ГБ\n" +
        "        емкость аккумулятора: 3095 мАч",
      raiting: "Raiting: 5",
      realPage: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-zolotistyi-107195772/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/h30/63073977565214/apple-iphone-14-pro-max-128gb-zolotistyj-106363340-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h5d/63073977794590/apple-iphone-14-pro-max-128gb-zolotistyj-106363340-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h22/63073978023966/apple-iphone-14-pro-max-128gb-zolotistyj-106363340-3.jpg  ",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/hea/63073978253342/apple-iphone-14-pro-max-128gb-zolotistyj-106363340-4.jpg"
      ]
    },
    {
      name: "Смартфон Apple iPhone 14 Pro Max 1Tb Dual Sim фиолетовый",
      description: "технология NFC: Да\n" +
        "        цвет: фиолетовый\n" +
        "        тип экрана: OLED, Super Retina XDR\n" +
        "        display с возможностью постоянной работы\n" +
        "        диагональ: 6.7 дюйм\n" +
        "        размер оперативной памяти: 6 ГБ\n" +
        "        процессор: 6-ядерный Apple A16 Bionic\n" +
        "        объем встроенной памяти: 1024 ГБ\n" +
        "        емкость аккумулятора: 3095 мАч",
      raiting: "Raiting: 5",
      realPage: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-fioletovyi-107116491/?c=750000000",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/he5/62948782407710/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h67/62948782637086/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/hc4/63073996177438/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-3.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hcd/63073996406814/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-4.jpg"
      ]
    },{
      name: "Ноутбук Apple MacBook Air 13 MGN63 серый",
      description: "диагональ экрана: 13.3 дюйм\n" +
        "        процессор: Apple M1\n" +
        "        видеокарта: Apple M1 7 core\n" +
        "        размер оперативной памяти: 8 ГБ\n" +
        "        тип жесткого диска: SSD\n" +
        "        общий объем накопителей: 256 ГБ",
      raiting: "Raiting: 5",
      realPage: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hbb/52177862557726/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h97/50489392824350/apple-macbook-air-13-mgn63-seryj-100797845-4.jpg"
      ]
    },{
      name: "Ноутбук Apple MacBook Air 13 MGN63 золотистый",
      description: "диагональ экрана: 13.3 дюйм\n" +
        "        процессор: Apple M1\n" +
        "        видеокарта: Apple M1 7 core\n" +
        "        размер оперативной памяти: 8 ГБ\n" +
        "        тип жесткого диска: SSD\n" +
        "        общий объем накопителей: 256 ГБ",
      raiting: "Raiting: 5",
      realPage: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hbb/52177862557726/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h97/50489392824350/apple-macbook-air-13-mgn63-seryj-100797845-4.jpg"
      ]
    },
  ];

  goToRealPage(i: number) {
    document.location.href = this.items[i].realPage;

  }

  goToTelegram(i:number) {
    document.location.href= "https://t.me/share/url?url=" + this.items[i].realPage
  }

  changeCurrentImg(i: number, j: number) {
    this.items[i].currectImg = this.items[i].galery[j];

  }
}
