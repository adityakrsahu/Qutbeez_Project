from django.db import models
import datetime

# Create your models here.

class Customer(models.Model):
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=10)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

Topwear_Choices = [
    ('T-shirts', 'T-SHIRTS'),
    ('Casual shirts', 'CASUAL SHIRTS'),
    ('Jackets', 'JACKETS'),
    ('Suits', 'SUITS'),
    ('Sweaters', 'SWEATERS')
]

Bottomwear_Choices = [
    ('Jeans', 'JEANS'),
    ('Shorts', 'SHORTS'),
    ('Formal Trousers', 'FORMAL TROUSERS'),
    ('Casual Trousers', 'CASUAL TROUSERS'),
    ('Track Pants & Joggers', 'Track Pants & Joggers')
]

Footwear_Choices = [
    ('Casual Shoes', 'Casual Shoes'),
    ('Sports Shoes', 'Sports Shoes'),
    ('Formal Shoes', 'Formal Shoes'),
    ('Sneakers', 'Sneakers'),
    ('Sandals & Floaters', 'Sandals & Floaters'),
    ('Socks', 'Socks')
]

Sports_Activewear_Choices = [
    ('Sports Shoes', 'Sports Shoes'),
    ('Sports Sandals', 'Sports Sandals'),
    ('Active T-Shirts', 'Active T-Shirts'),
    ('Track Pants & Shorts', 'Track Pants & Shorts'),
    ('Tracksuits', 'Tracksuits'),
    ('Swimwear', 'Swimwear')
]

Innerwear_Sleepwear_Choices = [
    ('Boxers', 'Boxers'),
    ('Vests', 'Vests'),
    ('Sleepwear & Loungewear', 'Sleepwear & Loungewear'),
    ('Thermals', 'Thermals')
]

# Choices for gender categories
Category_Choices = [
    ('Men', 'Men'),
    ('Women', 'Women'),
    ('Kids', 'Kids')
]

class Topwear(models.Model):
    topwear = models.CharField(max_length=30, choices=Topwear_Choices, default='Not available')
    category = models.CharField(max_length=10, choices=Category_Choices, default='Men')

    def __str__(self):
        return self.topwear

class Bottomwear(models.Model):
    bottomwear = models.CharField(max_length=30, choices=Bottomwear_Choices, default='Not available')
    category = models.CharField(max_length=10, choices=Category_Choices, default='Men')

    def __str__(self):
        return self.bottomwear

class Footwear(models.Model):
    footwear = models.CharField(max_length=30, choices=Footwear_Choices, default='Not available')
    category = models.CharField(max_length=10, choices=Category_Choices, default='Men')

    def __str__(self):
        return self.footwear

class Sports_Activewear(models.Model):
    sports_activewear = models.CharField(max_length=30, choices=Sports_Activewear_Choices, default='Not available')
    category = models.CharField(max_length=10, choices=Category_Choices, default='Men')

    def __str__(self):
        return self.sports_activewear

class Innerwear_Sleepwear(models.Model):
    innerwear_sleepwear = models.CharField(max_length=30, choices=Innerwear_Sleepwear_Choices, default='Not available')
    category = models.CharField(max_length=10, choices=Category_Choices, default='Men')

    def __str__(self):
        return self.innerwear_sleepwear

class Category(models.Model):
    name = models.CharField(max_length=50)
    topwear = models.ForeignKey(Topwear, on_delete=models.CASCADE, null=True, blank=True, related_name='categories')
    bottomwear = models.ForeignKey(Bottomwear, on_delete=models.CASCADE, null=True, blank=True, related_name='categories')
    footwear = models.ForeignKey(Footwear, on_delete=models.CASCADE, null=True, blank=True, related_name='categories')
    sports_activewear = models.ForeignKey(Sports_Activewear, on_delete=models.CASCADE, null=True, blank=True, related_name='categories')
    innerwear_sleepwear = models.ForeignKey(Innerwear_Sleepwear, on_delete=models.CASCADE, null=True, blank=True, related_name='categories')
    category = models.CharField(max_length=10, choices=Category_Choices, default='Men')

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Categories"

size_option = [
    ("extra-extra-small", "extra-extra-small"),
    ("extra-small", "extra-small"),
    ("small", "small"), 
    ("medium", "medium"), 
    ("large", "large"), 
    ("extra-large", "extra-large"), 
    ("extra-extra-large", "extra-extra-large")
]

class Product(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(default=0, decimal_places=2, max_digits=6)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)
    description = models.CharField(max_length=250, default='', blank=True, null=True)
    size = models.CharField(max_length=20, choices=size_option)
    image = models.ImageField(upload_to="upload/product")

    def __str__(self):
        return self.name

class Order(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    address = models.CharField(max_length=150, default='', blank=True)
    phone = models.CharField(max_length=20, default='', blank=True)
    date = models.DateField(default=datetime.datetime.today)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.product.name

class Cart(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.customer.name
