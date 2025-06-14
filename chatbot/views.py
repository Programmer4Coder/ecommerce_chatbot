from rest_framework.views import APIView
from rest_framework.response import Response
from product.models import Product
from product.serializers import ProductSerializer
from django.db.models import Q

# chat/views.py
class ChatbotAPIView(APIView):
    def post(self, request):
        query = request.data.get('query', '').lower()
        matched_products = Product.objects.filter(
            Q(name__icontains=query) |
            Q(description__icontains=query) |
            Q(category__icontains=query)
        )
        serializer = ProductSerializer(matched_products, many=True)
        return Response({'results': serializer.data})

