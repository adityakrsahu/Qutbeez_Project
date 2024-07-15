from django.urls import path
from .views import *

urlpatterns = [
    path('CustomerList/', CustomerList.as_view(), name="CustomerList"),
    path('CustomerDetail/<int:pk>/', CustomerDetail.as_view(), name="CustomerDetail"),
    
    path('ProductList/', ProductList.as_view(), name="ProductList"),
    path('ProductDetail/<int:pk>/', ProductDetail.as_view(), name="ProductDetail"),

    path('CategoryList/', CategoryList.as_view(), name="CategoryList"),
    path('CategoryDetail/<int:pk>/', CategoryDetail.as_view(), name="CategoryDetail"),

    path('OrderList/', OrderList.as_view(), name="OrderList"),
    path('OrderDetail/<int:pk>/', OrderDetail.as_view(), name="OrderDetail"),
]
