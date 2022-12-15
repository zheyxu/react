# import requests
# from bs4 import BeautifulSoup

# res = requests.get("https://www.covid19data.com.au/")
# soup = BeautifulSoup(res.text, 'html.parser')

# # result = soup.find_all('span.igc-table-cell-span')
# result = soup.find_all('table')
# print(result)


from selenium import webdriver
driver = webdriver.Chrome('chromedriver')
driver.get('https://www.covid19data.com.au/')

# print(driver.find_element_by_id('login'))
print(driver.find_element('table'))