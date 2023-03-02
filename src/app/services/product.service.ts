import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public categories = [
    {
      name: "IPhones",
      products: [
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
          likes: 10,
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
          likes: 10,
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
          likes: 10,
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
          likes: 10,
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
          likes: 10,
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
          likes: 10,
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
          likes: 10,
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
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-fioletovyi-107116491/?c=750000000",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/he5/62948782407710/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h67/62948782637086/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/hc4/63073996177438/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hcd/63073996406814/apple-iphone-14-pro-max-128gb-fioletovyj-106363345-4.jpg"
          ]
        },
      ]
    },
    {
      name: "Macbooks",
      products: [
        {
          name: "Ноутбук Apple MacBook Air 13 MGN63 серый",
          description: "диагональ экрана: 13.3 дюйм\n" +
            "        процессор: Apple M1\n" +
            "        видеокарта: Apple M1 7 core\n" +
            "        размер оперативной памяти: 8 ГБ\n" +
            "        тип жесткого диска: SSD\n" +
            "        общий объем накопителей: 256 ГБ",
          raiting: "Raiting: 5",
          likes: 10,
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
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hbb/52177862557726/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h97/50489392824350/apple-macbook-air-13-mgn63-seryj-100797845-4.jpg"
          ]
        },
        {
          name: "Ноутбук Apple MacBook Pro 14 MKGP3 серый",
          description: "диагональ экрана: 14.2 дюйм\n" +
            "        процессор: Apple M1 Pro\n" +
            "        видеокарта: Apple M1 Pro 14-Core\n" +
            "        размер оперативной памяти: 16 ГБ\n" +
            "        тип жесткого диска: SSD\n" +
            "        общий объем накопителей: 512 ГБ",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/hbf/50637730054174/apple-macbook-pro-14-mkgp3-seryj-102866247-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/ha4/50637730283550/apple-macbook-pro-14-mkgp3-seryj-102866247-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hc0/49341874208798/apple-macbook-pro-14-mkgp3-seryj-102866247-4.jpg"
          ]
        },
        {
          name: "Ноутбук Apple MacBook Pro 13 MYD82 серый",
          description: "диагональ экрана: 13.3 дюйм\n" +
            "        процессор: Apple M1\n" +
            "        видеокарта: Apple M1\n" +
            "        размер оперативной памяти: 8 ГБ\n" +
            "        тип жесткого диска: SSD\n" +
            "        общий объем накопителей: 256 ГБ",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/apple-macbook-pro-13-myd82-seryi-100797630/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hd7/33090953773086/apple-macbook-pro-13-myd82-seryi-100797630-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h6a/66921281028126/apple-macbook-pro-13-myd82-seryi-100797630-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hee/h53/66921281290270/apple-macbook-pro-13-myd82-seryi-100797630-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h35/66921281552414/apple-macbook-pro-13-myd82-seryi-100797630-4.jpg"
          ]
        },
        {
          name: "Ноутбук Apple MacBook Pro 13 MNEH3 серый",
          description: "диагональ экрана: 13.3 дюйм\n" +
            "        процессор: Apple M2\n" +
            "        видеокарта: Apple M2 10-Core\n" +
            "        размер оперативной памяти: 8 ГБ\n" +
            "        тип жесткого диска: SSD\n" +
            "        общий объем накопителей: 256 ГБ",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/apple-macbook-pro-13-mneh3-seryi-105514238/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7f/h40/51918241169438/apple-macbook-pro-13-mneh3-seryi-105514238-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/hae/51918241628190/apple-macbook-pro-13-mneh3-seryi-105514238-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/hf6/51918242086942/apple-macbook-pro-13-mneh3-seryi-105514238-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/h17/51918242742302/apple-macbook-pro-13-mneh3-seryi-105514238-4.jpg"
          ]
        },
      ]
    },
    {
      name: "Robot Vacuum Cleaners",
      products: [
        {
          name: "Робот-пылесос Dreame F9 белый",
          description: "тип уборки: сухая и влажная\n" +
            "        емкость пылесборника: 600 мл\n" +
            "        емкость бака для воды: 200 мл\n" +
            "        фильтр тонкой очистки: Да\n" +
            "        наличие дисплея: Нет\n" +
            "        наличие боковых щеток: Да\n" +
            "        емкость аккумулятора: 5200 мАч\n" +
            "        цвет: белый",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/dreame-f9-belyi-100549614/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h38/hdc/62855138705438/xiaomi-dreame-f9-belyj-100549614-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hb8/62855141163038/xiaomi-dreame-f9-belyj-100549614-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h9d/62855141392414/xiaomi-dreame-f9-belyj-100549614-3-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h76/62855141621790/dreame-f9-belyj-100549614-4.jpg"
          ]
        },
        {
          name: "Робот-пылесос ROIDMI EVE Plus Robot Vacuum белый",
          description: "тип уборки: сухая и влажная\n" +
            "емкость пылесборника: 550 мл\n" +
            "емкость бака для воды: 250 мл\n" +
            "фильтр тонкой очистки: Да\n" +
            "наличие дисплея: Нет\n" +
            "наличие боковых щеток: Да\n" +
            "емкость аккумулятора: 5200 мАч\n" +
            "цвет: белый",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/roidmi-eve-plus-robot-vacuum-belyi-101000358/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h8d/33199726657566/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/hbc/33199730196510/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb4/h4a/50297461637150/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-3-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/hff/62032640016414/xiaomi-roidmi-eve-plus-robot-vacuum-belyj-101000358-4.jpg"
          ]
        },
        {
          name: "Робот-пылесос Xiaomi Mi Robot Vacuum Mop 2 BHR5055EU белый",
          description: "тип уборки: сухая и влажная\n" +
            "емкость пылесборника: 550 мл\n" +
            "емкость бака для воды: 250 мл\n" +
            "фильтр тонкой очистки: Нет\n" +
            "наличие дисплея: Нет\n" +
            "емкость аккумулятора: 3200 мАч\n" +
            "цвет: белый",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/xiaomi-mi-robot-vacuum-mop-2-bhr5055eu-belyi-103450270/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h19/48289555709982/xiaomi-bhr5055eu-mi-robot-vacuum-mop-2-belyj-103450270-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h49/48289890041886/xiaomi-bhr5055eu-mi-robot-vacuum-mop-2-belyj-103450270-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/hda/48908414582814/xiaomi-mi-robot-vacuum-mop-2-bhr5055eu-belyj-103450270-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/hf7/48912085057566/xiaomi-mi-robot-vacuum-mop-2-bhr5055eu-belyj-103450270-4.jpg"
          ]
        },
        {
          name: "Робот-пылесос Dreame D9 белый",
          description: "тип уборки: сухая и влажная\n" +
            "емкость пылесборника: 570 мл\n" +
            "емкость бака для воды: 270 мл\n" +
            "фильтр тонкой очистки: Да\n" +
            "наличие боковых щеток: Да\n" +
            "емкость аккумулятора: 5200 мАч\n" +
            "цвет: белый",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/dreame-d9-belyi-100987780/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/he3/33417527197726/xiaomi-dreame-d9-belyj-100987780-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h07/33417531654174/xiaomi-dreame-d9-belyj-100987780-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h69/h26/33417535160350/xiaomi-dreame-d9-belyj-100987780-3-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0c/hb1/33417539387422/xiaomi-dreame-d9-belyj-100987780-4-Container.jpg"
          ]
        },
        {
          name: "Робот-пылесос Xiaomi Mi Robot Vacuum-Mop 2 Lite MJSTL BHR5217EN белый",
          description: "тип уборки: сухая и влажная\n" +
            "емкость пылесборника: 450 мл\n" +
            "емкость бака для воды: 270 мл\n" +
            "фильтр тонкой очистки: Нет\n" +
            "наличие дисплея: Нет\n" +
            "наличие боковых щеток: Да\n" +
            "емкость аккумулятора: 2600 мАч\n" +
            "цвет: белый",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/xiaomi-mi-robot-vacuum-mop-2-lite-mjstl-bhr5217en-belyi-103536017/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdb/h09/48451735257118/xiaomi-mi-robot-vacuum-mop-2-lite-mjstl-belyj-103536017-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf9/hdc/48451735846942/xiaomi-mi-robot-vacuum-mop-2-lite-mjstl-belyj-103536017-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4e/h17/51216286875678/xiaomi-mi-robot-vacuum-mop-2-lite-mjstl-belyj-103536017-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h23/51216287367198/xiaomi-mi-robot-vacuum-mop-2-lite-mjstl-belyj-103536017-4.jpg"
          ]
        },
      ]
    },
    {
      name: "TVs",
      products: [
        {
          name: "Телевизор Xiaomi TV P1 32 L32M6-6ARG 81 см черный",
          description: "тип: LED-телевизор\n" +
            "диагональ: 32 дюйм\n" +
            "разрешение: 1366x768\n" +
            "поддержка HD: 720p HD\n" +
            "технология Smart TV: Да\n" +
            "wi-Fi: Да\n" +
            "входы: композитный, ,HDMI, ,USB, ,Bluetooth",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hd2/49320434008094/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/hb7/49320434237470/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h9f/49320434466846/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb4/h4d/49320434925598/xiaomi-l32m6-6arg-cernyj-103039169-4.jpg"
          ]
        },
        {
          name: "Телевизор LG 43LM5772PLA 109 см черный",
          description: "тип: LED-телевизор\n" +
            "диагональ: 42.5 дюйм\n" +
            "разрешение: 1920x1080\n" +
            "поддержка HD: 1080p Full HD\n" +
            "технология Smart TV: Да\n" +
            "wi-Fi: Да\n" +
            "входы: AV, ,компонентный, ,HDMI, ,Ethernet (RJ-45), ,USB",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h04/hfd/49320430829598/lg-43lm5772pla-cernyj-101293496-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h0b/49320431288350/lg-43lm5772pla-cernyj-101293496-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/hd6/49320431747102/lg-43lm5772pla-cernyj-101293496-4.jpg"
          ]
        },
        {
          name: "Телевизор Samsung UE43T5300AUXCE 109 см черный",
          description: "тип: LED-телевизор\n" +
            "диагональ: 43 дюйм\n" +
            "разрешение: 1920x1080\n" +
            "поддержка HD: 1080p Full HD\n" +
            "технология Smart TV: Да\n" +
            "wi-Fi: Да\n" +
            "входы: AV, ,компонентный, ,Ethernet (RJ-45), ,USB",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hb2/49319748927518/samsung-ue43t5300au-chernyi-100182013-3.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/hcb/49319749156894/samsung-ue43t5300au-chernyi-100182013-4.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h69/49319749615646/samsung-ue43t5300au-chernyi-100182013-5.jpg"
          ]
        },
        {
          name: "Телевизор Xiaomi MI TV P1 L43M6-6ARG 109 см черный",
          description: "тип: LED-телевизор\n" +
            "диагональ: 43 дюйм\n" +
            "разрешение: 3840x2160\n" +
            "поддержка HD: 4K UHD\n" +
            "технология Smart TV: Да\n" +
            "wi-Fi: Да\n" +
            "входы: аудио, ,оптический, ,композитный, ,HDMI, ,Ethernet (RJ-45), ,USB, ,антенный",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-l43m6-6arg-109-sm-chernyi-102743844/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h5b/49320428371998/televizor-xiaomi-mi-tv-p1-l43m6-6arg-109-sm-cernyj-102743844-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h5b/49320428371998/televizor-xiaomi-mi-tv-p1-l43m6-6arg-109-sm-cernyj-102743844-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/hdb/49320428830750/xiaomi-mi-tv-p1-l43m6-6arg-cernyj-102743844-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h19/hc6/49320429289502/xiaomi-mi-tv-p1-l43m6-6arg-cernyj-102743844-3.jpg"
          ]
        },
        {
          name: "Телевизор Xiaomi Mi TV P1 50 L50M6-6ARG 127 см черный",
          description: "тип: LED-телевизор\n" +
            "диагональ: 50 дюйм\n" +
            "разрешение: 3840x2160\n" +
            "поддержка HD: 4K UHD\n" +
            "технология Smart TV: Да\n" +
            "wi-Fi: Да\n" +
            "входы: AV, ,HDMI, ,Ethernet (RJ-45), ,USB, ,антенный, ,Bluetooth",
          raiting: "Raiting: 5",
          likes: 10,
          realPage: "https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-50-l50m6-6arg-127-sm-chernyi-105324626/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/he8/51568662249502/xiaomi-l50m6-6arg-cernyj-105324626-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/he8/51568662249502/xiaomi-l50m6-6arg-cernyj-105324626-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h2a/51568662708254/xiaomi-l50m6-6arg-cernyj-105324626-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/hca/51568663167006/xiaomi-l50m6-6arg-cernyj-105324626-3.jpg"
          ]
        },
      ]
    },
  ]

  constructor() {
  }
}
