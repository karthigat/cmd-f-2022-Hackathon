import pandas as pd

recipes = pd.read_csv(r'new_ingredients.csv', error_bad_lines=False, sep=',')
print('Enter Ingredient')
get_ingredient = input()
search_ingredient = recipes['ingredient_list']
add_recipes=[]
for i in range(len(search_ingredient)):
    print(i)
    if get_ingredient in search_ingredient[i]:
        idex = i
        recipe = recipes.iloc[i]
        add_recipes.append(recipe)
print(add_recipes)