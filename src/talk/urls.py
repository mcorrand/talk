from django.conf.urls import patterns, url
from src.talk import views

urlpatterns = patterns('',
                       url(r'^$', views.home, name="home"),
                       url(r'^app/v0/$', views.appv0, name="appv0"),
                       url(r'^app/v1/$', views.appv1, name="appv1"),
                       url(r'^app/v2/$', views.appv2, name="appv2"),
                       url(r'^app/v3/$', views.appv3, name="appv3"),
                       url(r'^app/v4/$', views.appv4, name="appv4"),
                       url(r'^app/v5/$', views.appv5, name="appv5"),

)
