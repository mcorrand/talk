"""
Django settings for src project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

# lambda functions to easily build absolute paths
# here() gives us file paths from the root of the system to the directory
# holding the current file.
here = lambda *x: os.path.join(os.path.abspath(os.path.dirname(__file__)), *x)

PROJECT_ROOT = here("..", "..")
# root() gives us file paths from the root of the system to whatever
# folder(s) we pass it starting at the parent directory of the current file.
root = lambda *x: os.path.join(os.path.abspath(PROJECT_ROOT), *x)
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'h6#gj&g8vq(37(xtkii@2%(m5o543z6wmry@9b+t=tcx@pd@l0'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = [u'localhost']

# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'src',
    'src.talk',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'src.urls'

WSGI_APPLICATION = 'src.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'BlogDB',
	'USER': 'blog-admin',
	'PASSWORD': 'a long password',
	'HOST': 'localhost',
	'PORT': '5432',
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_URL = '/static/'

STATICFILES_DIRS = (
    root("src", "static"),
)

TEMPLATE_DIRS = (
    root("src", "templates"),
)
