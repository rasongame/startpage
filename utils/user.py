import os
# Класс user
# В нем хранится информация о юзере

class User():

    def __init__(self, name):
        """ Конструктор """
        self.name = os.getlogin()
        
