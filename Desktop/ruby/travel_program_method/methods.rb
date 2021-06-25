def disp_products(products)
  puts "旅行プランを選択してください。"
  products.each.with_index(1) do |product, i|
    puts "#{i}. #{product[:name]}(#{product[:price]}円)"
  end
end

def ask_product_number(products)
  while true
    print "プランの番号を選択 > "
    select_products_number = gets.to_i
    break if (1..3).include?(select_products_number)
    puts "1~3の番号を入力して下さい。"
  end
  products[select_products_number - 1]
end

def ask_how_many_people(chosen_product)
  puts "#{chosen_product[:name]}ですね。"
  puts "何名で予約されますか？"
  while true
    print "人数を入力 > "
    how_many_people = gets.to_i
    break if how_many_people > 0
    puts "1以上を入力して下さい。"
  end
  puts "#{how_many_people}名ですね。"
  how_many_people
end

def calculate_price(number_of_people, chosen_product)
  total_price = number_of_people * chosen_product[:price]
  if number_of_people >= 5
    total_price *= 0.9
    puts "5名以上ですので10%割引となります。"
  end
  puts "合計金額は#{total_price.floor}円になります。"
end

