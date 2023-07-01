import fbchat
import os

from dotenv import load_dotenv

load_dotenv()

LOGIN = os.getenv('META_LOGIN')
PASSWORD = os.getenv('META_PASSWORD')

print(LOGIN, PASSWORD)

client = fbchat.Client(LOGIN, PASSWORD)

# no_of_friends = int(input("Number of friends: "))
# for i in range(no_of_friends):
#     name = input("Name: ")
#     friends = client.searchForUsers(name)  # return a list of names
#     friend = friends[0]
#     msg = input("Message: ")
#     sent = client.sendMessage(msg, thread_id=friend.uid)
#     if sent:
#         print("Message sent successfully!")
