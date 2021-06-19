puts <<~TEXT
  旅行プランを選択して下さい。

  1. 沖縄旅行(10000円)
  2. 北海道旅行(20000円)
  3. 九州旅行(15000円)
TEXT

products = [
  {name: "沖縄旅行", price: 10000},
  {name: "北海道旅行", price: 20000},
  { name: "九州旅行", price: 15000 }
]

while true
  print "商品選択 > "
  select_product_num = gets.to_i
  break if (1..3).include?(select_product_num)
  puts "1~3の番号を入力して下さい。"
end

chose_product = products[select_product_num - 1]

puts <<~TEXT
  #{chose_product[:name]}ですね。
  何名で予約されますか？
TEXT

while true
  print "人数を入力 > "
  number_of_people = gets.to_i
  break if number_of_people > 0
  puts "1以上を入力して下さい。"
end

puts "#{number_of_people}名ですね。"

total_price = chose_product[:price] * number_of_people

if number_of_people >= 5
  total_price *= 0.9
  puts "5名以上ですので10%割引となります。"
end

puts "合計金額は#{total_price.floor}円になります。"