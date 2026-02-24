import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 755106,
      rating: 5.00,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
   {
  id: 2,
  name: 'Стайлер Dyson HS08 Straight+Wavy розовый/медный',
  description: 'Dyson Airwrap HS08 — это инновационный стайлер для выпрямления и создания локонов без экстремального перегрева.',
  price: 255000, 
  rating: 5.0,
  image: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/campaigns/hair-care/q4-gifting/2022/pdp/aw/gallery/PDP-Gallery-3-AW-Full-Product-Complete-Case.jpg?&cropPathE=desktop&fit=stretch,1&fmt=pjpeg&wid=1920',
  link: 'https://kaspi.kz/shop/p/dyson-hs08-straight-wavy-stailer-rozovyi-mednyi-104443900/'
},
    {
      id: 3,
      name: 'Шуба бежевый',
      description: 'Элегантная бежевая шуба, выполненная из качественных материалов. Идеальный выбор для холодной зимы, сочетающий в себе тепло, комфорт и роскошный внешний вид.',
      price: 2000000, 
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfb/78058882.jpeg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/shuba-30385214-168139146-bezhevyi-2xl-149600050/?c=750000000'
    },
    {
      id: 4,
      name: 'Dior J\'adore парфюмерная вода EDP 100 мл, для женщин',
      description: 'Dior J\'adore — это легендарный цветочный аромат, символ абсолютной женственности и роскоши. Букет из жасмина, иланг-иланга и розы дарит неповторимый шлейф.',
      price: 49000, 
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h16/63806021795870.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dior-j-adore-parfjumernaja-voda-edp-100-ml-dlja-zhenschin-17302127/?c=750000000'
    },
     {
      id: 5,
      name: 'Dior Backstage Eye Palette 001 Warm Neutrals',
      description: 'Палетка теней для век Dior Backstage — это секретное оружие визажистов Dior для создания безупречного макияжа глаз с профессиональным результатом.',
      price: 28000, 
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h12/64676655104030.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dior-backstage-eye-palette-001-warm-neutrals-106252037/?c=750000000'
    },
    {
      id: 6,
      name: 'Dior Miss Dior парфюмерный набор 50 мл, для женщин',
      description: 'Изысканный подарочный набор Miss Dior, включающий культовую парфюмерную воду. Аромат воплощает в себе дух любви, нежности и современной элегантности от кутюр.',
      price: 200000, 
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/h92/80826026426398.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dior-miss-dior-parfjumernyi-nabor-50-ml-dlja-zhenschin-110412563/?c=750000000'
    },
    
    {
      id: 7,
      name: 'Dior Rouge набор декоративной косметики для женщин',
      description: 'Роскошный набор от Dior, включающий легендарную помаду Rouge Dior и дополнительные средства для создания безупречного образа. Идеальный подарок для ценителей высокой моды.',
      price: 200000, 
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/p2f/5711582.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dior-rouge-nabor-dekorativnoi-kosmetiki-dlja-zhenschin-129227331/?c=750000000'
    },
   {
      id: 8,
      name: 'Кисть для макияжа серебряный 1 шт',
      description: 'Стильное и комфортное женское пальто для повседневной носки. Современный крой и качественные материалы обеспечивают отличную посадку и тепло в прохладную погоду.',
      price: 117000, 
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p13/p8e/39983648.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lf15291494-1-139019587/?c=750000000'
    },
   {
      id: 9,
      name: 'Цифровое пианино Yamaha CLP-825B',
      description: 'Цифровое фортепиано серии Clavinova, сочетающее в себе аутентичное звучание и отзывчивость акустического инструмента с современными технологиями.',
      price: 850000, 
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/ped/56367042.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/yamaha-clp-825b-143476723/?c=750000000'
    },
     {
      id: 10,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. ',
      price: 419900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    }
    
     
  ];
  share(link: string, name: string) {
  const message = encodeURIComponent(`Посмотри, что я нашел на Kaspi: ${name} - ${link}`);
  window.open(`https://wa.me/?text=${message}`, '_blank'); 
}
}