const sampleListings=[
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: { url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner: "6683e1e334145fa7dfc15eb1",
    geometry: { lat: 34.0259, lng: -118.7798 }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
    price: 1200,
    location: "New York City",
    country: "United States",
    owner: "6683e20334145fa7dfc15eb8",
    geometry: { lat: 40.7128, lng: -74.0060 }
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
    price: 1000,
    location: "Aspen",
    country: "United States",
    owner: "6683e23134145fa7dfc15ebf",
    geometry: { lat: 39.1911, lng: -106.8175 }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
    price: 2500,
    location: "Florence",
    country: "Italy",
    owner: "6683e24f34145fa7dfc15ec6",
    geometry: { lat: 43.7696, lng: 11.2558 }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
    price: 800,
    location: "Portland",
    country: "United States",
    owner: "6683e26b34145fa7dfc15ecd",
    geometry: { lat: 45.5152, lng: -122.6784 }
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: { url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    owner: "6683e28634145fa7dfc15ed4",
    geometry: { lat: 21.1619, lng: -86.8515 }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    owner: "6683e2a034145fa7dfc15edb",
    geometry: { lat: 39.0968, lng: -120.0324 }
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: { url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    owner: "6683e2da34145fa7dfc15ee2",
    geometry: { lat: 34.0522, lng: -118.2437 }
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: { url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNraSUyMHZhdGFyaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
    price: 3000,
    location: "Swiss Alps",
    country: "Switzerland",
    owner: "6683e2f134145fa7dfc15ee9",
    geometry: { lat: 46.8182, lng: 8.2275 }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: { url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    owner: "6683e30934145fa7dfc15ef0",
    geometry: { lat: -2.3333, lng: 34.8333 }
  },
    {
      title: "Historic Canal House",
      description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", fieldname: "listingimage" },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
      owner: "6683e28634145fa7dfc15ed4",
      geometry: { lat: 52.3676, lng: 4.9041 }
    },
    {
      title: "Private Island Resort",
      description: "Enjoy the ultimate in luxury and privacy on your own private island. An exclusive paradise awaits.",
      image: { url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/217686317.jpg?k=a7e745b5ab5eb48c717355d5446eb679f2e2d7c55ea27ba39d7236905efe6209&o=&hp=1", fieldname: "listingimage" },
      price: 10000,
      location: "Maldives",
      country: "Maldives",
      owner: "6683e2a034145fa7dfc15edb",
      geometry: { lat: 3.2028, lng: 73.2207 }
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: {
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        fieldname: "listingimage"
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
      owner: "6683e1e334145fa7dfc15eb1",
      geometry: { lat: 51.929, lng: -1.725 }
    },
      {
        title: "Historic Brownstone in Boston",
        description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
          url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          fieldname: "listingimage"
        },
        price: 2200,
        location: "Boston",
        country: "United States",
        owner: "6683e20334145fa7dfc15eb8",
        geometry: { lat: 42.3601, lng: -71.0589 }
      },
      {
        title: "Beachfront Bungalow in Bali",
        description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
          url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          fieldname: "listingimage"
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
        owner: "6683e23134145fa7dfc15ebf",
        geometry: { lat: -8.409518, lng: 115.188919 }
      },
      {
        title: "Mountain View Cabin in Banff",
        description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
          url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          fieldname: "listingimage"
        },
        price: 1500,
        location: "Banff",
        country: "Canada",
        owner: "6683e24f34145fa7dfc15ec6",
        geometry: { lat: 51.1784, lng: -115.5708 }
      },
      {
        title: "Art Deco Apartment in Miami",
        description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          fieldname: "listingimage"
        },
        price: 1600,
        location: "Miami",
        country: "United States",
        owner: "6683e26b34145fa7dfc15ecd",
        geometry: { lat: 25.7617, lng: -80.1918 }
      },
      {
        title: "Tropical Villa in Phuket",
        description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
          url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          fieldname: "listingimage"
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
        owner: "6683e28634145fa7dfc15ed4",
        geometry: { lat: 7.8804, lng: 98.3923 }
      },
      {
        title: "Historic Castle in Scotland",
        description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
          url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          fieldname: "listingimage"
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
        owner: "6683e2a034145fa7dfc15edb",
        geometry: { lat: 57.2809, lng: -5.5107 }
      },
      {
        title: "Desert Oasis in Dubai",
        description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
          url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          fieldname: "listingimage"
        },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
        owner: "6683e2da34145fa7dfc15ee2",
        geometry: { lat: 25.2048, lng: 55.2708 }
      },
      {
        title: "Rustic Log Cabin in Montana",
        description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
          url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          fieldname: "listingimage"
        },
        price: 1100,
        location: "Montana",
        country: "United States",
        owner: "6683e2f134145fa7dfc15ee9",
        geometry: { lat: 46.8797, lng: -110.3626 }
      },
      {
        title: "Beachfront Villa in Greece",
        description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
          url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          fieldname: "listingimage"
        },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
        owner: "6683e30934145fa7dfc15ef0",
        geometry: { lat: 37.4467, lng: 25.3289 }
      },
      {
        title: "Eco-Friendly Treehouse Retreat",
        description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
          url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          fieldname: "listingimage"
        },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
        owner: "6683e31e34145fa7dfc15ef7",
        geometry: { lat: 9.7489, lng: -83.7534 }
      },
        {
          title: "Historic Cottage in Charleston",
          description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
          image: {
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            fieldname: "listingimage"
          },
          price: 1800,
          location: "Charleston",
          country: "United States",
          owner: "6683e2f134145fa7dfc15ee9",
          geometry: {
            lat: 32.7765,
            lng: -79.9311
          }
        },
        {
          title: "Modern Apartment in Tokyo",
          description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
          image: {
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            fieldname: "listingimage"
          },
          price: 2000,
          location: "Tokyo",
          country: "Japan",
          owner: "6683e1e334145fa7dfc15eb1",
          geometry: {
            lat: 35.6895,
            lng: 139.6917
          }
        },
        {
          title: "Lakefront Cabin in New Hampshire",
          description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
          image: {
            url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            fieldname: "listingimage"
          },
          price: 1200,
          location: "New Hampshire",
          country: "United States",
          owner: "6683e20334145fa7dfc15eb8",
          geometry: {
            lat: 44.0001,
            lng: -71.5000
          }
        },
        {
          title: "Luxury Villa in the Maldives",
          description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
          image: {
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            fieldname: "listingimage"
          },
          price: 6000,
          location: "Maldives",
          country: "Maldives",
          owner: "6683e23134145fa7dfc15ebf",
          geometry: {
            lat: 3.2028,
            lng: 73.2207
          }
        },
        {
          title: "Ski Chalet in Aspen",
          description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
          image: {
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            fieldname: "listingimage"
          },
          price: 4000,
          location: "Aspen",
          country: "United States",
          owner: "6683e24f34145fa7dfc15ec6",
          geometry: {
            lat: 39.1911,
            lng: -106.8175
          }
        },
        {
          title: "Secluded Beach House in Costa Rica",
          description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
          image: {
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            fieldname: "listingimage"
          },
          price: 1800,
          location: "Costa Rica",
          country: "Costa Rica",
          owner: "6683e26b34145fa7dfc15ecd",
          geometry: {
            lat: 9.7489,
            lng: -83.7534
          }
        },
        {
          title: "Charming Studio in Historic District",
          description: "Cozy studio apartment located in a historic district. Great for solo travelers.",
          image: {
            url: "https://images.craigslist.org/00505_aXMTD6yZdh6_0x20m1_600x450.jpg",
            fieldname: "listingimage"
          },
          price: 800,
          location: "Boston",
          country: "United States",
          owner: "6683e28634145fa7dfc15ed4",
          geometry: {
            lat: 42.3601,
            lng: -71.0589
          }
        },
        {
          title: "Luxury Apartment with Ocean View",
          description: "Experience luxury living with stunning ocean views. Perfect for a relaxing getaway.",
          image: {
            url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            fieldname: "listingimage"
          },
          price: 4500,
          location: "Miami",
          country: "United States",
          owner: "6683e2a034145fa7dfc15edb",
          geometry: {
            lat: 25.7617,
            lng: -80.1918
          }
        },
        {
          title: "Modern Flat in City Center",
          description: "Stay in a modern flat in the heart of the city. Ideal for business travelers.",
          image: {
            url: "https://imagecdn.99acres.com/media1/25086/11/501731025M-1719830100868.webp",
            fieldname: "listingimage"
          },
          price: 1500,
          location: "San Francisco",
          country: "United States",
          owner: "6683e2da34145fa7dfc15ee2",
          geometry: {
            lat: 37.7749,
            lng: -122.4194
          }
        },
        {
          title: "Spacious Loft with Skyline View",
          description: "Enjoy a spacious loft with a stunning view of the city skyline.",
          image: {
            url: "https://images.unsplash.com/photo-1530731141654-5993c3016c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            fieldname: "listingimage"
          },
          price: 3000,
          location: "Chicago",
          country: "United States",
          owner: "6683e2f134145fa7dfc15ee9",
          geometry: {
            lat: 41.8781,
            lng: -87.6298
          }
        },
        {
          title: "Cozy Cabin in the Mountains",
          description: "Escape to a cozy cabin in the mountains. Great for nature lovers.",
          image: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvP9s5J2HPuOpinjznDUkv9wi_yLy-q0RWWA&s",
            fieldname: "listingimage"
          },
          price: 1200,
          location: "Denver",
          country: "United States",
          owner: "6683e30934145fa7dfc15ef0",
          geometry: {
            lat: 39.7392,
            lng: -104.9903
          }
        },        
          {
              title: "Beachfront Bungalow",
              description: "Stay in a charming beachfront bungalow. Perfect for a beach vacation.",
              image: {
                  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5fN2Qh6emRPajlIY8-JsmCEvk3J7ZztUBA&s",
                  fieldname: "listingimage"
              },
              price: 2200,
              location: "Los Angeles",
              country: "United States",
              owner: "6683e1e334145fa7dfc15eb1",
              geometry: {
                  lat: 34.0522,
                  lng: -118.2437
              }
          },
          {
              title: "Urban Studio with Modern Amenities",
              description: "Modern studio apartment with all the amenities you need for a comfortable stay.",
              image: {
                  url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                  fieldname: "listingimage"
              },
              price: 950,
              location: "Seattle",
              country: "United States",
              owner: "6683e20334145fa7dfc15eb8",
              geometry: {
                  lat: 47.6062,
                  lng: -122.3321
              }
          },     
          {
            title: "Historic House with Garden",
            description: "Stay in a historic house with a beautiful garden. Ideal for a peaceful retreat.",
            image: {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjnnUbicTWb9KBywonddT2c9Ihs9VusBYtA&s",
                fieldname: "listingimage"
            },
            price: 1300,
            location: "Philadelphia",
            country: "United States",
            owner: "6683e23134145fa7dfc15ebf",
            geometry: {
                lat: 39.9526,
                lng: -75.1652
            }
        },
        {
            title: "Stylish Apartment in Trendy Neighborhood",
            description: "Stylish apartment located in a trendy neighborhood. Great for experiencing the local culture.",
            image: {
                url: "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=vgQesOXDRzz0UfOZxmUtE-rFe75YgA9GvkKS8eeeumE=",
                fieldname: "listingimage"
            },
            price: 1600,
            location: "Portland",
            country: "United States",
            owner: "6683e24f34145fa7dfc15ec6",
            geometry: {
                lat: 45.5051,
                lng: -122.675
            }
        },
        {
            title: "Luxurious Penthouse with City View",
            description: "Experience luxury in a penthouse with stunning city views. Perfect for a lavish getaway.",
            image: {
                url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                fieldname: "listingimage"
            },
            price: 5000,
            location: "New York",
            country: "United States",
            owner: "6683e26b34145fa7dfc15ecd",
            geometry: {
                lat: 40.7128,
                lng: -74.0060
            }
        },
        {
            title: "Rustic Farmhouse in Countryside",
            description: "Stay in a rustic farmhouse in the countryside. Great for a relaxing and peaceful retreat.",
            image: {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNj2brGQx9XfqGQXTEfLg6kit9ucQOS-6umA&s",
                fieldname: "listingimage"
            },
            price: 1100,
            location: "Vermont",
            country: "United States",
            owner: "6683e28634145fa7dfc15ed4",
            geometry: {
                lat: 44.5588,
                lng: -72.5778
            }
        },
        {
            title: "Modern Loft with Open Floor Plan",
            description: "Enjoy a modern loft with an open floor plan and plenty of natural light.",
            image: {
                url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                fieldname: "listingimage"
            },
            price: 1900,
            location: "Austin",
            country: "United States",
            owner: "6683e2a034145fa7dfc15edb",
            geometry: {
                lat: 30.2672,
                lng: -97.7431
            }
        },
        {
            title: "Quaint Cottage in Rural Area",
            description: "Stay in a quaint cottage in a rural area. Perfect for a quiet and peaceful vacation.",
            image: {
                url: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                fieldname: "listingimage"
            },
            price: 850,
            location: "Nashville",
            country: "United States",
            owner: "6683e2da34145fa7dfc15ee2",
            geometry: {
                lat: 36.1627,
                lng: -86.7816
            }
        },
        {
            title: "Cozy Apartment in Downtown Area",
            description: "Cozy apartment located in the downtown area. Great for exploring the city.",
            image: {
                url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                fieldname: "listingimage"
            },
            price: 1000,
            location: "San Diego",
            country: "United States",
            owner: "6683e2f134145fa7dfc15ee9",
            geometry: {
                lat: 32.7157,
                lng: -117.1611
            }
        },
        {
            title: "Cozy Cabin with Mountain Views",
            description: "Escape to a cozy cabin with breathtaking mountain views.",
            image: {
                url: "https://img.freepik.com/premium-photo/describe-cozy-mountain-cabin-nestled-pristine-forest_1021867-2340.jpg",
                fieldname: "listingimage"
            },
            price: 1300,
            location: "Denver",
            country: "United States",
            owner: "6683e30934145fa7dfc15ef0",
            geometry: {
                lat: 39.7392,
                lng: -104.9903
            }
        },
        {
            title: "Luxury Loft with City Skyline View",
            description: "Stay in a luxury loft with a stunning view of the city skyline.",
            image: {
                url: "https://images.unsplash.com/photo-1530731141654-5993c3016c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                fieldname: "listingimage"
            },
            price: 4000,
            location: "New York City",
            country: "United States",
            owner: "6683e30934145fa7dfc15ef0",
            geometry: {
                lat: 40.7128,
                lng: -74.0060
            }
        },
        {
            title: "Modern Studio in Historic District",
            description: "Stay in a modern studio located in a historic district. Perfect for urban explorers.",
            image: {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2010-04-10_3000x2000_oakpark_nathan_g_moore_house.jpg/1200px-2010-04-10_3000x2000_oakpark_nathan_g_moore_house.jpg",
                fieldname: "listingimage"
            },
            price: 1200,
            location: "Boston",
            country: "United States",
            owner: "6683e30934145fa7dfc15ef0",
            geometry: {
                lat: 42.3601,
                lng: -71.0589
            }
        },
        {
            title: "Luxury Villa with Ocean View",
            description: "Relax in a luxury villa with stunning ocean views. Perfect for a lavish vacation.",
            image: {
                url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                fieldname: "listingimage"
            },
            price: 4800,
            location: "Los Angeles",
            country: "United States",
            owner: "6683e30934145fa7dfc15ef0",
            geometry: {
                lat: 34.0522,
                lng: -118.2437
            }
        },
        {
            title: "Urban Apartment with Pool Access",
            description: "Enjoy a modern apartment with access to a pool and other amenities.",
            image: {
                url: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                fieldname: "listingimage"
            },
            price: 1500,
            location: "San Francisco",
            country: "United States",
            owner: "6683e30934145fa7dfc15ef0",
            geometry: {
                lat: 37.7749,
                lng: -122.4194
            }
        },
          {
              title: "Spacious Condo with City Views",
              description: "Stay in a spacious condo with stunning views of the city skyline.",
              image: {
                  url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                  fieldname: "listingimage"
              },
              price: 3200,
              location: "Miami",
              country: "United States",
              owner: "6683e30934145fa7dfc15ef0",
              geometry: {
                  lat: 25.7617,
                  lng: -80.1918
              }
          },
          {
              title: "Cozy Loft in Arts District",
              description: "Stay in a cozy loft located in the vibrant arts district. Perfect for art lovers.",
              image: {
                  url: "https://www.fancypantshomes.com/wp-content/uploads/2021/06/inside-the-new-girl-loft.jpg",
                  fieldname: "listingimage"
              },
              price: 1000,
              location: "Los Angeles",
              country: "United States",
              owner: "6683e30934145fa7dfc15ef0",
              geometry: {
                  lat: 34.0522,
                  lng: -118.2437
              }
          },
          {
              title: "Modern Flat in Business District",
              description: "Stay in a modern flat located in the business district. Ideal for business travelers.",
              image: {
                  url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                  fieldname: "listingimage"
              },
              price: 1700,
              location: "San Francisco",
              country: "United States",
              owner: "6683e30934145fa7dfc15ef0",
              geometry: {
                  lat: 37.7749,
                  lng: -122.4194
              }
          },
          {
              title: "Luxury Condo with Panoramic Views",
              description: "Experience luxury living in a condo with panoramic city views.",
              image: {
                  url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
                  fieldname: "listingimage"
              },
              price: 4500,
              location: "Seattle",
              country: "United States",
              owner: "6683e30934145fa7dfc15ef0",
              geometry: {
                  lat: 47.6062,
                  lng: -122.3321
              }
          }      
];

module.exports = { data: sampleListings };