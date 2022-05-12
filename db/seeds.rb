puts ("deleting")
Box.delete_all
Subscription.delete_all
User.delete_all

puts("making new")

User.create(username: "thomas", password: "pass", email: "fakeemail@fake.com", isAdmin: false)

10.times do 
    User.create(
        username: Faker::Name.name,
        password: "password",
        email: Faker::Internet.email,
        isAdmin: false
        #fake a secured password? or just create one?
    )
end

User.create(
    username: "ADMIN",
    password: "secret",
    email:"admin@admin.com",
    isAdmin: true
)

# 10.times do
#     Box.create(
#         title: Faker::Marketing.buzzwords,
#         price: rand(4.0..30.0).round(2),
#         items: "Ice, Bourbon, Lemon Peel",
#         description: Faker::Movie.quote,
#         image_url: "data:image/jpeg;base64,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"
#     )
# end

Box.create(
    title: "Sipsby Tea of the Month Box",
    price: 16.00,
    items: "Four new teas curated just for you every month - Reusable tea filters for loose teas ",
    description: "Welcome to the best tea club! Take the quiz, get your own personalized Sips by Box, and access brand offers + giveaways by creating your free tea profile now!",
    image_url:"https://cdn.shopify.com/s/files/1/1677/2601/files/animation-sips-by-box-60.gif?v=1636653547"
)

Box.create(
    title: "EveryPlate Meals",
    price: 10.00,
    items: "Each box comes handpacked with delicious ingredients and recipe cards. Your ingredients are also insulated so they stay cool even if you’re not at home.",
    description: "Choose from 17 delicious and affordable recipes that change with every week - Our recipes have only 6 simple steps and will turn you into a chef",
    image_url:"data:image/jpeg;base64,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"
)

Box.create(
    title: "KnitCrate",
    price: 30.00,
    items: "Yarn skeins, crochet pattern, knitting pattern ",
    description: "Luxury Yarn, Custom Colorways & Curated Projects Delivered Monthly
    Treat yourself to a monthly kit of yarny goodness delivered right to your door every month.",
    image_url:"data:image/webp;base64,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"
)

Box.create(
    title: "Book of the Month",
    price: 16.99,
    items: "4-6 wow worthy reads ",
    description: "Books are cool again.
    Choose from a curated selection of the best new reads every month and get them delivered.",
    image_url:"https://static.bookofthemonth.com/landing/hiw/hiw1.webp"
)

Box.create(
    title: "Foot Cardigan ",
    price: 12.99,
    items: "2-3 pairs of novelty socks",
    description: "A PARTY ON YOUR FEET DELIVERED EVERY MONTH: get fun socks delivered monthly. the best way to surprise your feed every month.",
    image_url:"https://cdn.shopify.com/s/files/1/1719/5359/files/0003_Sock_Subscription_7b2f95fb-d010-4ef6-a6b2-a034cbb3fa31.jpg?v=1648679213"
)

Box.create(
    title: "BarkBox",
    price: 30.00,
    items: "2 innovative toys, 2 all-natural bags of treats, and a chew, curated from each month's themed collection",
    description: "Give your dog exactly what they want
    A totally customized box of themed toys and treats for your pup - every month",
    image_url:"https://images.ctfassets.net/j4x7ugudy4uu/yf65qhTVs5RDqAMFG3KYo/7bceb2bc5f8411c054906587a4066ab5/09.01.20_Testimonial_Images_HP668X668_04.jpg?w=334&h=334"
)

Box.create(
    title: "CrateJoy Shaker & Spoon Cocktail Club",
    price: 59.00,
    items: "Each month you'll get 3 unique recipes by top bartenders + everything you need to make 12 drinks (4 from each recipe) other than the liquor—syrups, bitters, mixers, garnishes & more. ",
    description: "A monthly cocktail box delivering original recipes plus all you need to make them! You'll be exposed to new flavors & combos, and look at your liquor cabinet in a whole new way. Subscribe today & be your own bartender + the tastemaker in your circle!",
    image_url:"https://cdn.filestackcontent.com/auto_image/cache=expiry:max/mncw6fhTfcPzInbKG6HA"
)

Box.create(
    title: "Piquant Post",
    price: 10.00,
    items: "4 freshly-ground, handcrafted spice blends

    4 high-quality printed recipe cards – one to use each spice
    
    Digital access to our catalog of hundreds of recipes on the website, including plant-based and gluten-free options",
    description: "Break The Routine
    Right on cue, we’ll deliver a curated box of global spice blends paired with delectable recipes. You’ll never get the same exact combination of spices or recipes even if you stay with us for years!",
    image_url:"https://cdn.shopify.com/s/files/1/0493/3061/8524/t/10/assets/spice-spread_1000x.jpg?v=131552528987213358041605542143"
)

Box.create(
    title: "Candy Club",
    price: 29.99,
    items: "Six 6oz candy cups",
    description: "We partner with small artisans and famed candy producers to fill your box with a thoughtfully curated selection of delectable candies every month.",
    image_url:"https://subscription.candyclub.com/assets/images/ccr/whats_inside_fun_desktop.png"
)

Box.create(
    title: "Artvana",
    price: 45.00,
    items: "Each monthly box comes stuffed with all of the art supplies you will need for each practice.",
    description: "Nurture Your Inner Artist
    Artväna makes it easy to develop your artistic ability every month.",
    image_url:"https://cdn.shopify.com/s/files/1/0561/3142/0249/products/CharcoalPhotoSustainableandEnergyEfficientArchitecturePresentation_2.png?v=1647557757&width=823"
)


20.times do
    Subscription.create(
        user: User.all.sample,
        box: Box.all.sample,
        duration: rand(1..12)
    )
end
puts ("done seeding")
