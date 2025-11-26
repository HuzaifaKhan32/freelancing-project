export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  images: {
    src: string;
    alt: string;
  }[];
  colors: {
    name: string;
    class: string;
  }[];
  sizes: string[];
  description: string;
  details: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Mountain Graphic Tee',
    price: 29.99,
    rating: 4.5,
    reviews: 112,
    images: [
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb-ZNI7OxGiURrENkh2wjUr8zIPQVVmUfQQ0cwU8-9l1IABtqZ_P3K4E2WjI6xOdcxpP_ERbdtjvSIJY-5lt2TcKUSkw_JIATfaIkKCPPGWIEqt1VV3cfsRw0BZChyY53KEJhrcsVjHTWsLJCmcyT_iylh6XxyEr4tJpMzsrc-WlFzgj6R30urjkjQSGzYRZ7HU7JDLXzERm3j-2tDcWi1DMzUU1hH1r7uINkJHDWtUlkgxF16E1O4-OyCtj4yhNRT7Q27tRPr7Chh', alt: 'A person wearing a white t-shirt with a detailed mountain graphic print' },
    ],
    colors: [{ name: 'White', class: 'bg-white' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: "A comfortable and stylish tee featuring a stunning mountain graphic. Perfect for everyday wear.",
    details: ['100% Premium Cotton', 'Unisex Fit', 'Machine wash cold'],
    category: 'Unisex',
  },
  {
    id: '2',
    name: 'Abstract Splash Tee',
    price: 29.99,
    rating: 4.8,
    reviews: 98,
    images: [
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDyRN02H-f3kQORr7CQJAG5AUD7E4sCFwhXrMG2wZGVJtMUNSilSMYH7_iq2njEHzdsg2S3rhG_VKBFqTtZdsNr4eW_rnvyy1X4OHVJJ1XniSymBgXjkYecd91hLfsDEZeMeBgKeBjboggbW1ObPZSjg9isyOxk-hkdp4b9zGsIinIUcXX-pHM22bUfCQs0CET8diyS8cacWv7ZwAiPePvMDafJn2SXZQptnl7lSmN-dG8TPAVQjboU5BEaUER0JZY9Wqxh_KzpKgW', alt: 'A black t-shirt with a colorful abstract splash paint design' },
    ],
    colors: [{ name: 'Black', class: 'bg-gray-900' }],
    sizes: ['S', 'M', 'L'],
    description: "Make a statement with this vibrant and energetic abstract splash tee.",
    details: ['100% Combed Cotton', 'Modern Fit', 'Tumble dry low'],
    category: 'Unisex',
  },
  {
    id: '3',
    name: 'Retro Logo Tee',
    price: 24.99,
    rating: 4.2,
    reviews: 78,
    images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDvFgRDpcajnPYFpb5xhnxkXSwiI8Di-Ij924eDWUT3cQXq8GRT3ZKEuenZCjbI1txsBz9PKFuHyUOqR51qEG_Xef8Z0gFb6MWdH78IE3y9SCdyGSllTNc1T3AX5yJs3mJ3VFvIDbwkBteUHIzsxYfpoNwdoHCKuCG7n1JvMYb1FsmA0VQpYdOYWP4n_TOFC4pfSpi13xUdNniGaEzuQ2lighaLwOCuT-QKT1Vh72Z-KXqoNI_QNyIjv4A2ntCznuovUOflYnHJJaW', alt: 'A grey t-shirt with a minimalist retro-style logo on the chest'}
    ],
    colors: [{ name: 'Heather Grey', class: 'bg-gray-400' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'A classic tee with a retro logo that never goes out of style.',
    details: ['90% Cotton, 10% Polyester', 'Classic Fit', 'Machine wash warm'],
    category: "Men's",
  },
  {
    id: '4',
    name: 'Witty Quote Tee',
    price: 24.99,
    rating: 4.6,
    reviews: 150,
    images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz_xwuJkjD6Lc3Mc9ftQgPm6lYujAwJMmIzk5s0zdp2-83BLQIzPDeDtfF4KxwP8rbmxdozrgqb7XiC_7pR4iFTJ5JXpInqUwGty-c5UIrIMBWaHdImECqG4Dh4PFQq3gjp49Tp7V-SzLvUOJyPbJMNeBokqXWWNzxMQwutNV8T9kywBpFdKt9fcw7xX9DR-GjAuIH4l2I0sqDPCcvJsG4HHSzgWUsp7FgCnDHtazEEAvHz_snX_halc7b-ZNOqRkCvM9M7o4CdqWB', alt: 'A navy blue t-shirt with a witty text quote printed on it'}
    ],
    colors: [{ name: 'Navy Blue', class: 'bg-blue-900' }],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Let your shirt do the talking with this witty quote tee.',
    details: ['100% Premium Cotton', 'Relaxed Fit', 'Machine wash cold'],
    category: "Women's",
  },
  {
    id: '5',
    name: 'Classic Crew Neck - Heather Grey',
    price: 24.99,
    rating: 4.7,
    reviews: 130,
    images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyfY_6kiNAt8sQhI5jtsdIK83ec9y3xWaRccGJ5cDi4rkmE97-MAeEnDfZWhBPyAUVrwld4G6OpnULpjez2TqXhdmmqlmPpcjBb-lXh7ciSikQ8y5z6bJB49r4L74RFBLCrpDMxD_ejEjCKFqHUrkZfb1efVJWuqwYQYXFwIi-SExBDwMqy7we9Xn3z5gQ72DLUTVh4icHN0WAHu0-vApq_I75iCT4AzP6KlsxndkpA7HFxIvwLzUcWzPdtnm6V4X5t4h0kvNuDi-d', alt: 'A model wearing a classic heather grey crew neck t-shirt.'}
    ],
    colors: [{ name: 'Heather Grey', class: 'bg-gray-400' }],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A timeless classic for any wardrobe.',
    details: ['100% Cotton', 'Classic Fit', 'Machine wash cold'],
    category: "Men's",
  },
  {
    id: '6',
    name: 'V-Neck Basic Tee - White',
    price: 19.99,
    rating: 4.9,
    reviews: 210,
    images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDimhynvdz3pDGopFp0yL9h3PtYm_j4Op6dBWSDjW1iQRB215axBFbFbRATy7VUsCIIwFzXc7Ws6IpgaZMIa9TExgLV8AlrXNcG-vwh2lnQLSE8ay-j0_n9VRW0gVEf52V5EBUvcz7z978JYlABHTquPSDaezBT4H2ujG62e2_16cIWleIS7bcz7vQp9Y0JKyKAitCdicKv9GvGfMsc3SWFBvU-8PvU5s2-XhREftLeboiWwpYhPysQZWQeLV6Mr3J-JzD136dzBJlZ', alt: 'A clean white v-neck t-shirt on a hanger.'}
    ],
    colors: [{ name: 'White', class: 'bg-white' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'An essential V-neck tee for a sharp, clean look.',
    details: ['100% Cotton', 'Slim Fit', 'Machine wash cold'],
    category: "Men's",
  },
  {
    id: '7',
    name: 'Graphic Print Tee - Black',
    price: 29.99,
    rating: 4.6,
    reviews: 180,
    images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArYNXy2YAkkNv9-jmRKb1vOWYilbNQ1WlxIr-JBwYqtCWRrgP8dPylNeqy5rTbJL6tSI_vU_oedmhMwksjOzLRNC-vEf0lBJii7vsMOeXlxD7rwKLHxIKinSBv53Huj7qP8bbp1TojWh65rT-S37EnC_FDxPdOOGKMfga4N2EZWDuDWnosyerar4laOWVUGrudiio2AENDhwCV3PVLzCHiYCFevlbLws6xRESE97fJYs8T1PZhUydVXdCHnqitNqS2G5mrvBOH5qLx', alt: 'A black t-shirt with a minimalist graphic print.'}
    ],
    colors: [{ name: 'Black', class: 'bg-black' }],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A stylish graphic tee to make a statement.',
    details: ['100% Cotton', 'Regular Fit', 'Machine wash cold'],
    category: "Unisex",
  },
  {
    id: '8',
    name: 'Vintage Wash Pocket Tee - Navy',
    price: 27.50,
    rating: 4.8,
    reviews: 165,
    images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRtlpNhFj-nZl2ddbAISaNnF-_UZLc72TsEArjGN86L-2UWFoRxdGpxDGq4328fvY7AfWwy7qe7EwUTe9zf0MgrPGE0slIjCO1_CItO4THgQ81v8DRjhYJ2wdK_TGszC4rbQHx1qrMgbhYLpJlIzhKB84cNc_wsJEAqWT7bN2938cbGRYcdsw4u8ktUNS7X2QlMxuMZi6kz7vFZ8IH1cQnjM9sHlfFebugpcNcvZO1mCMZvDojpaWj4SCAGPvYGnqRR1wwoHifKTmh', alt: 'A vintage-style navy t-shirt with a chest pocket.'}
    ],
    colors: [{ name: 'Navy', class: 'bg-blue-900' }],
    sizes: ['S', 'M', 'L'],
    description: 'A comfortable pocket tee with a vintage look and feel.',
    details: ['100% Cotton', 'Regular Fit', 'Machine wash cold'],
    category: "Men's",
  },
  {
    id: '9',
    name: 'Slim Fit Henley - Olive',
    price: 26.00,
    rating: 4.5,
    reviews: 140,
    images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8FtK77E6-1A2zBeuX-bnqIxMu7dz0nqv8mGiWPKOHaY1mmgDPIe0cQHO1lT8w6AC3xASfEUX--Vtz0CELEVJj4r_0NrxcK_zKaoMIpG9rHXto8vxvwhVfml2Qw0LVN5M894OsOFxJK6eLuBycTSioQNnn04P-yvyCUVXA2K6ywO2rUIp01EwlKbsAipZxEzgvqfrUsxk7DcqYn1C_f93rnbBEI8C2qczjF-tMamGsD_qTnvuzhWtM5cQ_vniWTEfoCUyNiTTHoV6R', alt: 'An olive green slim fit henley shirt.'}
    ],
    colors: [{ name: 'Olive', class: 'bg-green-800' }],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A stylish and comfortable Henley for any occasion.',
    details: ['100% Cotton', 'Slim Fit', 'Machine wash cold'],
    category: "Men's",
  },
  {
    id: '10',
    name: 'Long Sleeve Crew - Charcoal',
    price: 32.00,
    rating: 4.7,
    reviews: 190,
    images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBTCwZ30oIw4z8JEw3l1eK3yv3KhiZZgbDBrJHYxRw41-AQtycF7NvXNZvIYzlAH1Bubh0byC4D02fAgk6O06yi3CZfE0_lJk0_agi0wDgAVOjIyxuFs1Q4QmkVA6tF0FkQFyFTPKbWJyRyRMkRP5F_GVOfV-yXCQEebh7vpBxzk9la-4_MFIwJGxdSI5kQFp7PIfGjhG7cJpDNU60_DbglNdqAOtfZYyhlhM2wXFScyykwARNyl1qhpER1AJbXFji6I6Sg9zqrLj1', alt: 'A long sleeve crew neck shirt in charcoal color.'}
    ],
    colors: [{ name: 'Charcoal', class: 'bg-gray-700' }],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A perfect long sleeve tee for cooler weather.',
    details: ['100% Cotton', 'Regular Fit', 'Machine wash cold'],
    category: "Men's",
  },
  {
    id: '11',
    name: 'Striped Cotton Tee - Red/White',
    price: 22.99,
    rating: 4.4,
    reviews: 110,
    images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAItxv1YXfrD0xSObO_2qF_tv99PPaWChgesZlg_ecTaFkWsG1-VHu1AOVsR1O9r6XPbcl-rEqEtGcO_UVEvAqCWpOgKPel7lmQf3hlvxZVV34A_zQfOCS8UBWmY0gsYhjjtVy3UM3WBqf5Fc7Qtx3iyQwZLXch0GwYSq_Uwy9BJ4ANgdUqlmHmSfuUQ2gdSGxVua91BdVLtubumEVKLckqH_42mkv4-xegX-Pe8OFyfPnkFHcyKDhWHDtSUFGzoWfLcc0WMujbIcm-', alt: 'A red and white striped cotton t-shirt.'}
    ],
    colors: [{ name: 'Red/White', class: 'bg-red-500' }],
    sizes: ['S', 'M', 'L'],
    description: 'A classic striped tee for a casual look.',
    details: ['100% Cotton', 'Regular Fit', 'Machine wash cold'],
    category: "Unisex",
  },
  {
    id: '12',
    name: 'Tri-Blend V-Neck - Royal Blue',
    price: 24.99,
    rating: 4.6,
    reviews: 175,
    images: [
        { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkNA58YnLy61b7trPNp_WK_Uul85TLGCNO2FOTIimX7SlSc1Ofh5VthUyUgj9riWaEjIeYQndrhKpFTRXGbRd53nK9Ft3yNg-2M3ohfb7TUFdFSY4h_lTL4k6BNji2NZCrqtrf_KpXQhJHlUIZdzf2Pvq6b-QFVbo2SHo3hu7DGaeyT0KG1m8kpmqrlVe1TfqVWCBpiLJyW4w0ZFPEiNWDQbbLqJUmP_Fnr_02FTKO6Lz6VS7PvbbnlfWEdcMfkM8GeCN9hwxoP6PP', alt: 'A royal blue tri-blend v-neck t-shirt.'}
    ],
    colors: [{ name: 'Royal Blue', class: 'bg-blue-600' }],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A soft and comfortable tri-blend V-neck tee.',
    details: ['50% Polyester, 25% Cotton, 25% Rayon', 'Modern Fit', 'Machine wash cold'],
    category: "Men's",
  }
];