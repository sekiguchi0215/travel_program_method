require "./methods.rb"
require "pry"

products = [
  { name: "沖縄旅行", price: 10000 },
  { name: "北海道旅行", price: 20000 },
  { name: "九州旅行", price: 15000 },
]

disp_products(products)
chosen_product = ask_product_number(products)
number_of_people = ask_how_many_people(chosen_product)
calculate_price(number_of_people, chosen_product)
