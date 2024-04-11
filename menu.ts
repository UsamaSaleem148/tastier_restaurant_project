interface MenuItem {
  name: string
  description: string
  image?: string
  vegan: boolean
  vegetarian: boolean
  allergens: string[]
  price: number
}

const burgerMenu = document.querySelector('.burger-menu')
const navLinks = document.querySelector('.nav-links')

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show')
})

const menuItems: MenuItem[] = [
  {
    name: 'Aloo Samosa',
    description: 'A samosa wrapped with aloo (potato) filling',
    image: './assets/1.jpg',
    vegan: false,
    vegetarian: true,
    allergens: ['peanut'],
    price: 10.99,
  },
  {
    name: 'Franklin Barbecue',
    description: 'Whole Brisket + Texas Barbecue BBQ Sauce',
    image: './assets/2.jpg',
    vegan: false,
    vegetarian: true,
    allergens: ['soy', 'milk'],
    price: 8.5,
  },
  {
    name: 'Terry Black Barbecue',
    description: 'A classic hamburger with lettuce, tomato, and pickles',
    image: './assets/3.jpg',
    vegan: false,
    vegetarian: true,
    allergens: ['shellfish'],
    price: 12.75,
  },
  {
    name: 'Gramercy Tavern',
    description: 'The Gramercy Tavern Burger - 4 Pack',
    image: './assets/4.jpg',
    vegan: true,
    vegetarian: false,
    allergens: ['gluten'],
    price: 6.95,
  },
  {
    name: 'Museum of Ice Cream',
    description: 'Ice Cream - Choose Your Own 6 Pints',
    image: './assets/5.jpg',
    vegan: true,
    vegetarian: false,
    allergens: ['dairy', 'nuts'],
    price: 14.5,
  },
  {
    name: 'Sugar Hill Creamery',
    description: 'Ice Cream - Choose Your Own 4 Pints',
    image: './assets/6.jpg',
    vegan: false,
    vegetarian: true,
    allergens: ['egg', 'peanut'],
    price: 9.25,
  },
  {
    name: 'Central Grocery Muffulettas',
    description: 'Original Muffuletta Sandwich - 2-Pack (Serves 6-8)',
    image: './assets/7.png',
    vegan: true,
    vegetarian: true,
    allergens: ['nuts'],
    price: 11.99,
  },
  {
    name: 'French Dip',
    description: 'The Original French Dip Sandwich - 6 Pack',
    image: './assets/8.png',
    vegan: false,
    vegetarian: true,
    allergens: ['fish'],
    price: 7.5,
  },
  {
    name: 'Bartolini',
    description: 'Meatball Sandwich Kit - 6 Pack',
    image: './assets/9.png',
    vegan: true,
    vegetarian: true,
    allergens: ['sesame', 'fish'],
    price: 13.25,
  },
  {
    name: 'Blue Ribbon Sushi',
    description: 'Blue Ribbon Sushi - DIY Kit for 2',
    image: './assets/10.png',
    vegan: true,
    vegetarian: false,
    allergens: ['mustard'],
    price: 5.95,
  },
  {
    name: 'Fox & the Knife',
    description: 'Pasta Dinner for 2 - Choose Your Own',
    image: './assets/11.png',
    vegan: true,
    vegetarian: false,
    allergens: ['wheat', 'mustard'],
    price: 15.5,
  },
  {
    name: 'Momofuku',
    description: 'Whole Plate Short Rib Dinner for 3-4',
    image: './assets/12.png',
    vegan: false,
    vegetarian: true,
    allergens: ['sulfites', 'wheat'],
    price: 8.99,
  },
  {
    name: 'Frontera Grill',
    description: 'Carnitas Taco Kit for 2-3',
    image: './assets/13.png',
    vegan: true,
    vegetarian: false,
    allergens: ['corn'],
    price: 10.5,
  },
  {
    name: 'Shirley Chungs Ms. Chi',
    description: 'Taiwanese Style Pork Chop Dinner Kit for 4',
    image: './assets/14.png',
    vegan: true,
    vegetarian: false,
    allergens: ['meat', 'egg'],
    price: 7.95,
  },
  {
    name: 'AFURI',
    description: 'Yuzu Shio Ramen Kit for 3',
    image: './assets/15.png',
    vegan: false,
    vegetarian: false,
    allergens: ['nuts'],
    price: 12.5,
  },
  {
    name: 'Central BBQ',
    description: 'Ribs & Pulled Pork Dinner for 8',
    image: './assets/16.png',
    vegan: false,
    vegetarian: true,
    allergens: ['fish'],
    price: 9.75,
  },
  {
    name: 'Emmy Squared',
    description: 'Le Big Matt Burger Kit for 6',
    image: './assets/17.png',
    vegan: true,
    vegetarian: false,
    allergens: ['sesame', 'fish'],
    price: 14.99,
  },
  {
    name: 'Old Homestead Steakhouse',
    description: 'Burger Bomb Kit for 6',
    image: './assets/18.png',
    vegan: false,
    vegetarian: true,
    allergens: ['mustard'],
    price: 6.5,
  },
  {
    name: 'Flannery Beef',
    description: 'Goldbelly Burger Blend - 4 lbs.',
    image: './assets/19.png',
    vegan: true,
    vegetarian: false,
    allergens: ['wheat', 'mustard'],
    price: 11.25,
  },
  {
    name: 'Whitmans',
    description: 'Juicy Lucy Burger Kit - 5 Pack',
    image: './assets/20.png',
    vegan: true,
    vegetarian: false,
    allergens: ['sulfites', 'wheat'],
    price: 7.99,
  },
]

function displayMenuItems(menuItems: MenuItem[]) {
  const menu = document.getElementById('container')
  if (!menu) return
  menu.innerHTML = ''
  menuItems.forEach((item) => {
    const li = document.createElement('div')
    li.className = 'item-box'
    let image = ''
    if (item.image) {
      image = `<img src="${item.image}" alt="${item.name}">`
    }
    const allergens = item.allergens.map((allergen) => `<span>${allergen}</span>`).join(' / ')
    const vegan = item.vegan ? `<span> / Vegan</span>` : ''
    const vegetarian = item.vegetarian ? `<span> / Vegetarian</span>` : ''
    li.innerHTML = `
        <div class="image">
            ${image}
        </div>
        <div class="description">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <div class="categories">
              ${allergens}
              ${vegan}
              ${vegetarian}
            </div>
        </div>
        <div class="price">
            <p>$ ${item.price}</p>
        </div>
      `
    menu.appendChild(li)
  })
}

function filterMenuItems() {
  const searchQuery = (document.getElementById('search') as HTMLInputElement).value.toLowerCase()
  const vegan = (document.getElementById('vegan') as HTMLInputElement).checked
  const vegetarian = (document.getElementById('vegetarian') as HTMLInputElement).checked
  const allergens = (document.getElementById('allergens') as HTMLSelectElement).value.toLowerCase()
  let filteredItems = menuItems.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(searchQuery)
    const descriptionMatch = item.description.toLowerCase().includes(searchQuery)
    const veganMatch = !vegan || item.vegan
    const vegetarianMatch = !vegetarian || item.vegetarian
    const allergensMatch = allergens === '' || item.allergens.includes(allergens)
    return nameMatch && descriptionMatch && veganMatch && vegetarianMatch && allergensMatch
  })
  displayMenuItems(filteredItems)
}

displayMenuItems(menuItems)
document.getElementById('search')?.addEventListener('input', filterMenuItems)
document.getElementById('vegan')?.addEventListener('change', () => {
  document.getElementById('checkbox-vegan').classList.toggle('activeCheckBox')
  filterMenuItems()
})
document.getElementById('vegetarian')?.addEventListener('change', () => {
  document.getElementById('checkbox-vegetarian').classList.toggle('activeCheckBox')
  filterMenuItems()
})
document.getElementById('allergens')?.addEventListener('change', filterMenuItems)
