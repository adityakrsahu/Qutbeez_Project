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
    

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Categories"


class Men(models.Model):
    name = models.ForeignKey(Category, on_delete=models.CASCADE)
    men_category = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "Men"



class Women(models.Model):
    name = models.ForeignKey(Category, on_delete=models.CASCADE)
    women_category = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "Women"


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
    men_category = models.ForeignKey(Men, on_delete=models.CASCADE, default=1)
    women_category = models.ForeignKey(Women, on_delete=models.CASCADE, default=1)
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
        return self.product
    
class Cart(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.customer