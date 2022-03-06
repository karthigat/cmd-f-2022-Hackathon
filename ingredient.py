
import pandas as pd
import re
import nltk

# removing punctuation\n",
def punctuation(sanitize):
    data_punct = []
    for i in sanitize:
        data_details_punct = re.sub(r'[^\w\s]', '', i)
        data_punct.append([data_details_punct])
    return data_punct
 
#tokenizing\n",
def token(sanitize):
    data_token = []
    for i in sanitize:
        tokenize = nltk.word_tokenize(i[0])
       
        data_token.append(tokenize)      
    return data_token

def remove_number(sanitize):
    data_string = []
    for j in sanitize:
        # strings_only = re.sub(r'[0-9], sanitize[j])
        string_only = [y for y in j if not (y.isdigit() or y[0] == '-' and y[1:].isdigit())]
        print(string_only)
        data_string.append(string_only)
    return data_string

recipes = pd.read_csv(r'recipes_82k.csv', error_bad_lines=False, sep=',')
ingredient = recipes['ingredients']
remove_punction = punctuation(ingredient)
tokenize = token(remove_punction)
remove_numbers = remove_number(tokenize)
recipes['ingredient_list'] = remove_numbers
print(recipes.head(10))
recipes.to_csv(r'new_ingredients.csv', encoding='utf-8', header=True)
# strings_only = remove_number(remove_punction)\n",
# print(strings_only)"
