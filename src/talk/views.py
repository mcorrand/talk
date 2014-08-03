from django.shortcuts import render

def home(request):
    return render(request, 'base.html')

def appv0(request):
	return render(request, 'v0.html')
	
def appv1(request):
	return render(request, 'v1.html')

def appv2(request):
	return render(request, 'v2.html')

def appv3(request):
	return render(request, 'v3.html')

def appv4(request):
	return render(request, 'v4.html')

def appv5(request):
	return render(request, 'v5.html')