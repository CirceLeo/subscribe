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

10.times do
    Box.create(
        title: Faker::Marketing.buzzwords,
        price: rand(4.0..30.0).round(2),
        items: "Ice, Bourbon, Lemon Peel",
        description: Faker::Movie.quote,
        image_url: "https://www.celladorales.com/wp-content/uploads/2016/12/ShippingBox_sq.jpg"
    )
end

20.times do
    Subscription.create(
        user: User.all.sample,
        box: Box.all.sample,
        duration: rand(1..12)
    )
end
puts ("done seeding")
