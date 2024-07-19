from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Customer)
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(Product)
admin.site.register(Topwear)
admin.site.register(Bottomwear)
admin.site.register(Innerwear_Sleepwear)
admin.site.register(Footwear)
admin.site.register(Sports_Activewear)

