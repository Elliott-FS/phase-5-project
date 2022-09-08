# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "removing seeds..."
Game.destroy_all
puts "planting new seeds"

#   Game.create(name:"", console:"", image_url:"")
p51 = Game.create(name:"FF7 Remake", console: "PS5", image_url:"https://www.godisageek.com/wp-content/uploads/FF7R-Thumb-1.jpg")
p52 = Game.create(name:"Ratchet and Clank: Rift Apart", console: "PS5", image_url:"https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/DwVjpbKOsFOyPdNzmSTSWuxG.png")
p53 = Game.create(name:"Elden Ring", console:"PS5", image_url:"https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png")
p54 = Game.create(name:"God of War", console:"PS5", image_url:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/kratos_ps5.jpg")
p55 = Game.create(name:"Spider-Man:Miles Morales", console:"PS5", image_url:"https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg")

pc1 = Game.create(name:"Minecraft", console:"PC", image_url:"https://i.ytimg.com/vi/-0PjOvHeGiY/maxresdefault.jpg")
pc2 = Game.create(name:"World of Warcraft", console:"PC", image_url:"https://i.pcmag.com/imagery/articles/01DT6925CNSbhDhYF6vCY7F-1..v1569486318.jpg")
pc3 = Game.create(name:"Overwatch", console:"PC", image_url:"https://i.ytimg.com/vi/UEYp1RTvllM/maxresdefault.jpg")
pc4 = Game.create(name:"FF XIV: A Realm Reborn", console:"PC", image_url:"https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/06/21122105/FFXIV-box-art.jpg")

switch1 = Game.create(name:"The Legend of Zelda: Breath of the Wild", console:"Nintendo Switch", image_url:"https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg")
switch2 = Game.create(name:"Mario Cart 8 Deluxe", console:"Nintendo Switch", image_url:"https://assets1.ignimgs.com/2019/05/31/mario-kart-8-deluxe---button-1559265583166.jpg")
switch3 = Game.create(name:"Super Smash Bros. Ultimate", console:"Nintendo Switch", image_url:"https://www.smashbros.com/assets_v2/img/sns/en.png?180613")
switch4 = Game.create(name:"Hades", console:"Nintendo Switch", image_url:"https://i.ytimg.com/vi/mD8x5xLHRho/maxresdefault.jpg")

xbox1 = Game.create(name:"Halo: Infinite", console:"Xbox", image_url:"https://cdn.windowsreport.com/wp-content/uploads/2021/12/halo-infinite-medals-1.jpg")
xbox2 = Game.create(name:"Sifu", console:"Xbox", image_url:"https://images.purexbox.com/4b6cb489c2613/1280x720.jpg")
xbox3 = Game.create(name:"Forza Horizon 5", console:"Xbox", image_url:"https://gamingbolt.com/wp-content/uploads/2021/08/forza-horizon-5-image-3.jpg")
xbox4 = Game.create(name:"Gears 5", console:"Xbox", image_url:"https://www.gears5.com/static/e7317a2bb749f0510dd21561fdfdd03a/gears5.jpg")

puts "seeds planted!"